import React from "react";
import { useRouter } from "next/router";
import { Roboto } from "next/font/google";
import dynamic from "next/dynamic";

const Navbar = dynamic(() => import("../Navbar"), { ssr: false });

type Props = {
  children: React.ReactNode;
};

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "700"],
});

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

// INI ADALAH FILE CONTAINER DARI SEBUAH WEBSITE

const AppShell = (props: Props) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main className={roboto.className}>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
