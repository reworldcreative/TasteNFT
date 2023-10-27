import "./followStat.scss";

export default function FollowStat({ id, number, text }) {
  return (
    <div className="followStat" id={id}>
      <p className="followStat__number section-text">{number}</p>
      <p className="followStat__text section-text_accent">{text}</p>
    </div>
  );
}
