import { ReactComponent as CheckSvg } from "./check.svg";
import { ReactComponent as DeleteSvg } from "./delete.svg";

import "./styles.css";

const iconTypes = {
  check: (color) => <CheckSvg className="Icon-svg" fill={color} />,
  delete: (color) => <DeleteSvg className="Icon-svg" fill={color} />,
};

function TodoIcon({ type, color, onClick }) {
  return (
    <button
      className={`Icon-container Icon-container-${type}`}
      onClick={onClick}
    >
      {iconTypes[type](color)}
    </button>
  );
}

export { TodoIcon };
