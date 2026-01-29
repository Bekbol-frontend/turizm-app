import { createPortal } from "react-dom";

interface IProps {
  children: React.ReactNode;
}

function Portal({ children }: IProps) {
  return createPortal(children, document.body);
}

export default Portal;
