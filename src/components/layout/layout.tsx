import React, { ReactNode } from "react";
import Header from "../header/Header";
import style from "./layout.module.css";
import SideWindow from "../sideWindow/sideWindow";
import { SignProvider } from "../../context/SignContext";
import { SideWindowProvider } from "../../context/SideWindowContext";

interface ILayoutProps {
  children?: ReactNode;
}

const PageLayout = ({ children }: ILayoutProps) => {
  return (
    <>
      <div className={style.layout}>
        <Header />
        <div className={style.layout_container}>
          <SignProvider>
            <SideWindowProvider>
              <SideWindow />
              {children}
            </SideWindowProvider>
          </SignProvider>
        </div>
      </div>
    </>
  );
};

export default PageLayout;
