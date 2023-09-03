import React from "react";
import Navbar from "../Navbar";

type Props = {
  children: React.ReactNode;
};

// INI ADALAH FILE CONTAINER DARI SEBUAH WEBSITE

const AppShell = (props: Props) => {
  const { children } = props;
  return (
    <main>
      <Navbar />
      {children}
    </main>
  );
};

export default AppShell;
