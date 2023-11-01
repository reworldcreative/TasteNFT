import React from "react";
import "./editList.scss";
import dotsIcon from "@/img/icons/vertical-dots-icon.svg";
import timerIcon from "@/img/icons/timer.svg";
import editIcon from "@/img/icons/edit.svg";
import deleteIcon from "@/img/icons/delete.svg";
export default function EditList({ onTimeEditClick, cardStat }) {
  const [isActiveSettings, setIsActiveSettings] = useState(false);

  const handleSettingsClick = () => {
    setIsActiveSettings((prev) => !prev);
  };
  return (
    <ul className="editList">
      <li>
        <button
          className={`editList__button settings ${
            isActiveSettings ? "active" : ""
          }`}
          onClick={handleSettingsClick}
        >
          <img src={dotsIcon} alt="bots icon" />
        </button>
      </li>
      {isActiveSettings && (
        <>
          <li>
            <button className="editList__button" onClick={onTimeEditClick}>
              <img src={timerIcon} alt="timer icon" />
            </button>
          </li>

          {cardStat != "On moderation" && (
            <>
              <li>
                <button className="editList__button">
                  <img src={editIcon} alt="edit icon" />
                </button>
              </li>
              <li>
                <button className="editList__button">
                  <img src={deleteIcon} alt="delete icon" />
                </button>
              </li>
            </>
          )}
        </>
      )}
    </ul>
  );
}
