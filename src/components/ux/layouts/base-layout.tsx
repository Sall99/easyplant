import { FC } from "react";
import { Header } from "./header";

export interface BaseLayoutProps {
  children: React.ReactNode;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children }) => {
  return (
    <>
      <Header />
      <main>{children}</main>
    </>
  );
};
