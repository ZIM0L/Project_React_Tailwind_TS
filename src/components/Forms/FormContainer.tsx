// FormContainer.js
import { useContext, useState } from 'react';
import PersonalInfo from "./DifferentForms/PersonalInfo"
import SelectPlan from './DifferentForms/SelectYourPlan';
import { DataFormat } from '../../interfaces/DataFormat';
import DataChecker from '../../utils/Checker';
import { ContextStep } from '../../pages/Main/Home';

function FormContainer() {

    const [isFieldRequired, setIsFieldRequired] = useState([false, false, false]);

    const [Data, setData] = useState<DataFormat>({
        name:'',
        email:'',
        phone:''
    });
    const val = useContext(ContextStep);
    
    const handleDataChange = (newData: DataFormat) => {
        console.log(newData)
        setData(newData);
    }
    const renderSwitch = () => {
        switch (val.step) {
            case 1:
              return <PersonalInfo getFromChild={handleDataChange} Data={Data} isFieldRequired={isFieldRequired}/>
            break;
            case 2:
                return <SelectPlan/>
            break;

            default:
                return <PersonalInfo getFromChild={handleDataChange} Data={Data} isFieldRequired={isFieldRequired}/>
                break;
        }
    }
    const CheckRegex = () => {
        
        let updatedFieldRequired = [true,true,true];
        if (val.step == 1) {
            updatedFieldRequired = DataChecker(Data, isFieldRequired);
            setIsFieldRequired(updatedFieldRequired);
        }
        if (updatedFieldRequired.every((value) => value === false)) {
            val.changeStep(val.step != 4 ? val.step+1 : 4)
            // Tutaj możesz dodać kod do przechodzenia do kolejnego kroku lub innych działań.
        }
    }

    const goBack = () => {
        val.changeStep(val.step == 1 ? val.step : val.step-1)
    }

    return(      
        <section id="FormContainer" className="px-10 py-6 text-left flex flex-col justify-between">
            {renderSwitch()}  
            <div className={
                `flex flex-row font-semibold ${val.step == 1 ?`justify-end` : `justify-between`} `
                }>
                {val.step != 1 ? <button onClick={goBack} className='text-MarineBlue'>Go Back</button> : ""}
                <button onClick={CheckRegex} className="bg-MarineBlue px-6 py-3 rounded-md text-white active:bg-PurplishBlue">Next Step</button>
            </div>
        </section>
    )
}

export default FormContainer;
