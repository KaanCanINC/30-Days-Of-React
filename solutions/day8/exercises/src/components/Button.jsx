const Button = ({ text, onClick, style, className }) => (
  <button style={style} onClick={onClick} className={className}>
    {text}
  </button>
);

export const buttonStyles = {
  backgroundColor: "#61dbfb",
  padding: 10,
  border: "none",
  borderRadius: 5,
  margin: 3,
  cursor: "pointer",
  fontSize: 18,
  color: "white",
};

export default Button;
