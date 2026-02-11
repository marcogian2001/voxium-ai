import React from "react";

type Props = {
  children: React.ReactNode;
};

const Layout = (props: Props) => {
  const { children } = props;

  return <div className="h-screen bg-black">{children}</div>;
};

export default Layout;
