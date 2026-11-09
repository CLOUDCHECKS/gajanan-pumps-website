"use client";

import {
  createContext,
  useCallback,
  useContext,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { EnquiryModal } from "@/components/ui/EnquiryModal";

type EnquiryState = {
  open: boolean;
  product?: string;
  industry?: string;
  source?: string;
};

type EnquiryContextValue = {
  openEnquiry: (options?: {
    product?: string;
    industry?: string;
    source?: string;
  }) => void;
  closeEnquiry: () => void;
};

const EnquiryContext = createContext<EnquiryContextValue | null>(null);

export function EnquiryProvider({ children }: { children: ReactNode }) {
  const [state, setState] = useState<EnquiryState>({ open: false });

  const openEnquiry = useCallback(
    (options?: { product?: string; industry?: string; source?: string }) => {
      setState({ open: true, ...options });
    },
    [],
  );

  const closeEnquiry = useCallback(() => {
    setState((current) => ({ ...current, open: false }));
  }, []);

  const value = useMemo(
    () => ({ openEnquiry, closeEnquiry }),
    [openEnquiry, closeEnquiry],
  );

  return (
    <EnquiryContext.Provider value={value}>
      {children}
      <EnquiryModal
        open={state.open}
        product={state.product}
        industry={state.industry}
        source={state.source}
        onClose={closeEnquiry}
      />
    </EnquiryContext.Provider>
  );
}

export function useEnquiry() {
  const context = useContext(EnquiryContext);
  if (!context) {
    throw new Error("useEnquiry must be used inside <EnquiryProvider>.");
  }
  return context;
}
