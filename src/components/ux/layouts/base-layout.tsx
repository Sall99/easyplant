import { FC } from "react";
import { Footer } from "./footer";
import { Header } from "./header";

export interface BaseLayoutProps {
  children: React.ReactNode;
  hero: boolean;
}

export const BaseLayout: FC<BaseLayoutProps> = ({ children, hero }) => {
  return (
    <>
      <Header hero={hero} />
      <main>{children}</main>
      <Footer />
    </>
  );
};
