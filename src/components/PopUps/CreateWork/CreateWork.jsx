import React from "react";
import "./createWork.scss";
import Button from "../../Button/Button";
import ProgressBar from "./ProgressBar/ProgressBar";
import Upload from "./Upload/Upload";
import Censor from "./Censor/Censor";
import Params from "./Params/Params";

export default function CreateWork({ finish }) {
  const [step, setStep] = useState(1);
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(false);
  const [filePath, setFilePath] = useState();

  const showError = () => {
    setError(true);
  };
  const hideError = () => {
    setError(false);
  };

  const handleNext = () => {
    if (step < 3) {
      setStep(step + 1);
      setProgress(progress + 33.33);
    }
  };

  const getFilePath = (path) => {
    setFilePath(path);
  };
  return (
    <div className="createWorkPopUp">
      <h2 className="section-title">Creating artwork</h2>
      <div className="createWorkPopUp__content">
        {error && (
          <p className="createWorkPopUp__error section-text">
            Your artwork wasn’t approved. Cause is: Amet minim mollit non
            deserunt ullamco est sit aliqua dolor do amet sint. Velit officia
            consequat duis enim velit mollit. Exercitation veniam consequat sunt
            nostrud amet.
          </p>
        )}
        <ProgressBar step={step} />
        {step == 1 && (
          <Upload
            isError={showError}
            hideError={hideError}
            getFilePath={getFilePath}
          />
        )}
        {step == 2 && <Censor image={filePath} />}
        {step == 3 && <Params />}
        <Button onButtonClick={step === 3 ? finish : handleNext}>
          {step === 3 ? "Finish creating" : "Next step"}
        </Button>
      </div>
    </div>
  );
}
