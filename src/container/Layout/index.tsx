import React from "react";
import Header from "../Header";

const Layout = (props: React.PropsWithChildren) => {
  return (
    <>
      <Header />
      <div className="mx-[24px]">{props.children}</div>
    </>
  );
};

export default Layout;
