import "@/styles/globals.css";
import type { AppProps } from "next/app";
import AppShell from "@/components/layouts/AppShell";
import { SessionProvider } from "next-auth/react";

// INI ADALAH FILE SEPERTI MAIN.JSX di React
export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <SessionProvider session={session}>
      <AppShell>
        <Component {...pageProps} />
      </AppShell>
    </SessionProvider>
  );
}
