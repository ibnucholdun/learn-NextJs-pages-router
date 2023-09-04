import React from "react";
import Navbar from "../Navbar";
import { useRouter } from "next/router";

type Props = {
  children: React.ReactNode;
};

const disableNavbar = ["/auth/login", "/auth/register", "/404"];

// INI ADALAH FILE CONTAINER DARI SEBUAH WEBSITE

const AppShell = (props: Props) => {
  const { children } = props;
  const { pathname } = useRouter();
  return (
    <main>
      {!disableNavbar.includes(pathname) && <Navbar />}
      {children}
    </main>
  );
};

export default AppShell;
