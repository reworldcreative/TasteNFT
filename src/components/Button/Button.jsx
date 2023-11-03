import "./button.scss";

export default function Button({ children, onButtonClick, addedClass }) {
  return (
    <button className={`button ${addedClass}`} onClick={onButtonClick}>
      {children}
    </button>
  );
}
