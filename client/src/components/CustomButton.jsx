import { useSnapshot } from "valtio";
import state from "../store";
import PropTypes from "prop-types";

const CustomButton = ({ title, type, customStyles, handleClick }) => {
  const snap = useSnapshot(state);

  const generateStyles = (type) => {
    if (type === "filled") {
      return {
        backgroundColor: snap.color,
        color: "#fff",
      };
    }
  };

  return (
    <button
      className={`px-2 py-1.2 flex-1 rounded-md shadow-md shadow-black active:shadow-sm ${customStyles}`}
      style={generateStyles(type)}
      onClick={handleClick}
    >
      {title}
    </button>
  );
};
CustomButton.propTypes = {
  title: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  customStyles: PropTypes.string,
  handleClick: PropTypes.func,
};
export default CustomButton;
