// FormContainer.js
import { useContext, useState } from "react";
import PersonalInfo from "./DifferentForms/PersonalInfo";
import SelectPlan from "./DifferentForms/SelectYourPlan";
import { DataFormat } from "../../interfaces/DataFormat";
import { ContextStep } from "../../pages/Main/Home";
import AddOns from "./DifferentForms/Add-ons";
import Summary from "./DifferentForms/Summary";
import ButtonNextBack from "../Custom/ButtonNextBack";

function FormContainer() {
  const [isFieldRequired, setIsFieldRequired] = useState([false, false, false]);

  const [Data, setData] = useState<DataFormat>({
    name: "",
    email: "",
    phone: "",
    plan: [],
    subscriptionTime: "Monthly",
    addOns: [],
  });

  const val = useContext(ContextStep);

  const handleDataChange = (newData: DataFormat) => {
    console.log(newData);
    setData(newData);
  };
  const renderSwitch = () => {
    switch (val.step) {
      case 1:
        return (
          <PersonalInfo
            getFromChild={handleDataChange}
            Data={Data}
            isFieldRequired={isFieldRequired}
          />
        );
        break;
      case 2:
        return <SelectPlan getFromChild={handleDataChange} Data={Data} />;
        break;
      case 3:
        return <AddOns getFromChild={handleDataChange} Data={Data} />;
        break;
      case 4:
        return <Summary Data={Data} />;
        break;

      default:
        return (
          <PersonalInfo
            getFromChild={handleDataChange}
            Data={Data}
            isFieldRequired={isFieldRequired}
          />
        );
        break;
    }
  };
  return (
    <section
      id="FormContainer"
      className="md:min-w-[542px] px-10 py-6 text-left flex flex-col justify-between"
    >
      {renderSwitch()}
        <ButtonNextBack
          Data={Data}
          isFieldRequired={isFieldRequired}
          setIsFieldRequired={setIsFieldRequired}
        />    
    </section>
  );
}

export default FormContainer;
