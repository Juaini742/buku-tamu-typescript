import {ReactNode} from "react";
import Navbar from "./client/navbar";

interface TemplatesProps {
  children: ReactNode;
}

function Templates({children}: TemplatesProps) {
  return (
    <>
      <Navbar />
      {children}
      <footer></footer>
    </>
  );
}

export default Templates;
