import "./Button.css";
import { ReactNode } from "react";

type ButtonProps = {
  children: ReactNode | ReactNode[];
  onClick: () => void;
  disabled?: boolean;
};

export const Button = ({
  children,
  onClick,
  disabled = false,
}: ButtonProps) => {
  return (
    <button disabled={disabled} onClick={() => onClick()}>
      {children}
    </button>
  );
};
