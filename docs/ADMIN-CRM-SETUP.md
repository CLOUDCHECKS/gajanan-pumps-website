# Private admin CRM setup

The public website works without Supabase by falling back to
`.data/enquiries.jsonl` in local development. On Netlify the fallback is not
durable, so the form refuses to accept an enquiry until Supabase is configured.
The private CRM at `/gajananadmin` needs Supabase.

## 1. Create the database

1. Open the new Supabase project.
2. Go to **SQL Editor** and run the entire contents of
   [`supabase/schema.sql`](../supabase/schema.sql).
3. This creates the `enquiries` table, insert-only public policy, indexes and
   the `database_usage()` function used by the Storage tab.

If the project already had the older table, the `alter table ... add column if
not exists` statements upgrade it safely.

## 2. Create the admin user

1. In Supabase, open **Authentication → Users**.
2. Choose **Add user** and create an email/password admin account.
3. Confirm the user if your project has email confirmation enabled.
4. In **Authentication → Providers → Email**, turn off public sign-ups if you do
   not need them. Admin access is still protected by the email allow-list below.

## 3. Add environment variables

Copy `.env.example` to `.env.local` for local development, or add these in
**Netlify → Site configuration → Environment variables**:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com

NEXT_PUBLIC_SUPABASE_URL=https://YOUR-PROJECT.supabase.co
NEXT_PUBLIC_SUPABASE_ANON_KEY=YOUR-ANON-KEY
SUPABASE_SERVICE_ROLE_KEY=YOUR-SERVICE-ROLE-KEY
ADMIN_EMAILS=your-admin-email@example.com
SUPABASE_DB_LIMIT_MB=500
```

Find the first three values in **Supabase → Project Settings → API**:

- **Project URL** → `NEXT_PUBLIC_SUPABASE_URL`
- **anon / public key** → `NEXT_PUBLIC_SUPABASE_ANON_KEY`
- **service_role / secret key** → `SUPABASE_SERVICE_ROLE_KEY`

`ADMIN_EMAILS` may contain multiple comma-separated addresses. Access is denied
when it is empty — an authenticated Supabase user alone is not enough.

`SUPABASE_DB_LIMIT_MB` is only the allowance displayed on the Storage tab. Set it
to the database size shown on your Supabase plan (500 MB default).

## 4. Security model

- The public site inserts enquiries with the anon key. Row Level Security only
  allows `INSERT`; there is no public read, update or delete policy.
- The CRM verifies the Supabase Auth session in middleware and checks the email
  against `ADMIN_EMAILS`.
- Server components, server actions and the CSV export route use
  `SUPABASE_SERVICE_ROLE_KEY` only on the server. Never put it in a
  `NEXT_PUBLIC_*` variable.
- `/gajananadmin` is excluded from `robots.txt` and sends
  `X-Robots-Tag: noindex, nofollow`.

## 5. Using the CRM

- Open `/gajananadmin` directly. It is intentionally not linked from the public
  website.
- **Leads** shows popup and Contact page enquiries, supports search/filter,
  status updates, CSV export and individual deletion.
- **Storage** reports total database size and the enquiries table size. Delete
  old or closed leads to free database space.
- Product images, brochure PDFs and videos stay in the website repository and
  are served by Netlify; they do **not** use Supabase database or storage quota.

## 6. Netlify deployment

1. Push the repository to GitHub.
2. In Netlify, **Add new site → Import an existing project** and select the repo.
3. Build command: `npm run build`; publish directory: `.next`.
4. Add all environment variables above, then deploy.
5. After changing environment variables, trigger a fresh deploy.

`netlify.toml` already configures Node 20 and `@netlify/plugin-nextjs`.

## 7. About page videos

Drop `.mp4`/`.webm` files into `public/videos` and commit them. The filename
becomes the film title. See [`public/videos/README.md`](../public/videos/README.md)
for naming and optional poster images. A rebuild is needed after adding videos.
