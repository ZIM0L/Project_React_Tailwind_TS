import { useState } from 'react';
import PersonalInfo from "./DifferentForms/PersonalInfo"
import DataChecker from '../../utils/Checker';

function FormContainer() {
    interface DataFormat{
        name: string,
        email: string,
        phone: string
    }

    const [Data, setData] = useState<DataFormat>({
        name:'',
        email:'',
        phone:''
    });
    
    const handleDataChange = (newData: DataFormat) => {
        setData(newData);
        console.log(newData)
    }
    return(      
            <section id="FormContainer" className=" px-14 py-6 text-left flex flex-col justify-between">
                <PersonalInfo getFromChild={handleDataChange} Data={Data} />
            <div className=" text-right">
                <button onClick={() => {DataChecker(Data)}} className="bg-MarineBlue px-6 py-3 rounded-md text-white">Next Step</button>
            </div>
            </section>
    )
}

export default FormContainer