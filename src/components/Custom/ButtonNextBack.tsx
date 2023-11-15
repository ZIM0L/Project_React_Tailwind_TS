import { ContextStep } from "../../pages/Main/Home";
import { useContext } from "react";
import DataChecker from "../../utils/Checker";
import { DataFormat } from "../../interfaces/DataFormat";

interface checkNextStep {
  Data: DataFormat;
  isFieldRequired: boolean[];
  setIsFieldRequired: (updatedFieldRequired: boolean[]) => void;
}

function ButtonNextBack({
  Data,
  isFieldRequired,
  setIsFieldRequired,
}: checkNextStep) {
  const checkNextStep = () => {
    let updatedFieldRequired = [true, true, true];
    switch (val.step) {
      case 1:
        updatedFieldRequired = DataChecker(Data, isFieldRequired);
        setIsFieldRequired(updatedFieldRequired);
        if (updatedFieldRequired.every((value) => value === false))
          val.changeStep(val.step + 1);
        break;
      case 2:
        if (Data.plan.length != 0) val.changeStep(val.step + 1);
        break;
      case 3:
        if (Data.addOns.length != 0) val.changeStep(val.step + 1);
        break;

      default:
        alert("Something went wrong !");
        break;
    }
  };

  const val = useContext(ContextStep);

  const goBack = () => {
    val.changeStep(val.step == 1 ? val.step : val.step - 1);
  };

  return (

    <div
        className={`flex flex-row font-semibold mt-10 ${
          val.step == 1 ? `justify-end` : `justify-between`
        } `}
      >

      {val.step != 1 ? (
          <button onClick={goBack} className="text-MarineBlue">
          Go Back
        </button>
      ) : (
          ""
          )}
      <button
        onClick={checkNextStep}
        className="bg-MarineBlue px-6 py-3 rounded-md text-white active:bg-PurplishBlue"
        >
        {val.step != 4 ? "Next Step" : "Confirm"}
      </button>
    </div>
  
  );
}
export default ButtonNextBack;
