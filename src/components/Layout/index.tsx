import { PropsWithChildren } from "react";

const Layout: React.FC<PropsWithChildren> = ({ children }) => {
  return (
    <>
      <header>
        <h1>HEADER</h1>
      </header>
      {children}
      <footer>
        <h1>FOOTER</h1>
      </footer>
    </>
  );
};

export default Layout;
