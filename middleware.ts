import { NextResponse, type NextRequest } from "next/server";
import { createServerClient } from "@supabase/ssr";
import { isAdminEmail } from "@/lib/admin-access";
import {
  isSupabaseConfigured,
  supabaseAnonKey,
  supabaseUrl,
} from "@/lib/supabase/config";

const ADMIN_ROOT = "/gajananadmin";
const LOGIN_PATH = "/gajananadmin/login";

function withNoIndex(response: NextResponse) {
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
  return response;
}

function redirectWithCookies(
  request: NextRequest,
  sessionResponse: NextResponse,
  pathname: string,
  reason?: string,
) {
  const url = request.nextUrl.clone();
  url.pathname = pathname;
  url.search = reason ? `?reason=${encodeURIComponent(reason)}` : "";

  const redirect = NextResponse.redirect(url);
  sessionResponse.cookies
    .getAll()
    .forEach(({ name, value }) => redirect.cookies.set(name, value));

  return withNoIndex(redirect);
}

export async function middleware(request: NextRequest) {
  const pathname = request.nextUrl.pathname;
  const isLogin = pathname === LOGIN_PATH;

  if (!isSupabaseConfigured) {
    if (isLogin) return withNoIndex(NextResponse.next({ request }));
    return redirectWithCookies(
      request,
      NextResponse.next({ request }),
      LOGIN_PATH,
      "config",
    );
  }

  let response = NextResponse.next({ request });
  response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");

  const supabase = createServerClient(supabaseUrl, supabaseAnonKey, {
    cookies: {
      getAll() {
        return request.cookies.getAll();
      },
      setAll(cookiesToSet) {
        cookiesToSet.forEach(({ name, value }) => {
          request.cookies.set(name, value);
        });
        response = NextResponse.next({ request });
        response.headers.set("X-Robots-Tag", "noindex, nofollow, noarchive");
        cookiesToSet.forEach(({ name, value, options }) => {
          response.cookies.set(name, value, options);
        });
      },
    },
  });

  const {
    data: { user },
  } = await supabase.auth.getUser();

  if (!user) {
    if (isLogin) return response;

    // Avoid a redirect loop if Supabase cannot establish a session.
    return redirectWithCookies(request, response, LOGIN_PATH, "auth");
  }

  const allowed = isAdminEmail(user.email);

  if (!allowed) {
    if (isLogin) return response;
    return redirectWithCookies(request, response, LOGIN_PATH, "unauthorized");
  }

  if (isLogin) {
    return redirectWithCookies(request, response, ADMIN_ROOT);
  }

  return response;
}

export const config = {
  matcher: ["/gajananadmin/:path*"],
};
