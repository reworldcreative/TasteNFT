import "./button.scss";

export default function Button({ children, onButtonClick }) {
  return (
    <button className="button" onClick={onButtonClick}>
      {children}
    </button>
  );
}
