import { FC, MouseEventHandler } from "react";
import "../components/styletog.module.css";

type Props = {
  open: boolean;
  onClick: MouseEventHandler;
  controls: string;
  label: string;
};

export const ToggleButton: FC<Props> = ({ open, controls, label, onClick }) => {
  return (
    <button
      type="button"
      aria-controls={controls}
      aria-expanded={open}
      aria-label={label}
      onClick={onClick}
      className="toggleButon"
    >
      <span className="line-1"></span>
      <span className="line-2"></span>
    </button>
  );
};