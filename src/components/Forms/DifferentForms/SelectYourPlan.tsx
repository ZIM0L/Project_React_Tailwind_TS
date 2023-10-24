import { DataFormat } from "../../../interfaces/DataFormat";
import { plans } from "../../../data";
interface SelectPlan{
    getFromChild: (Data: DataFormat) => void;
    Data: DataFormat;
}

function SelectPlan({ getFromChild, Data }: SelectPlan ){

    const handleInputChange = (key : string) => {
        const newData:string[] = Data.plan
        if (!Data.plan.includes(key)) {
            newData.push(key);
            newData.sort();
            getFromChild({...Data, plan: newData})
        } else {
            newData.splice(newData.indexOf(key),1);
            getFromChild({...Data, plan: newData})
        }
    };
    return(
        <form>
        <div className="pb-6">
            <h1 className="font-bold text-4xl text-MarineBlue py-2">Select your plan</h1>
            <p className="text-CoolGray">You have the option of monthly or yearly billing.</p>
        </div>
            <div className="flex flex-col">
                <div className="flex flex-row min-w-fit space-x-2 ">
                    {plans && Object.keys(plans).map((key) => {
                        return (
                            <div key={key} onClick={() => handleInputChange(key)} className={` ${Data.plan.includes(key) && `border-purple-700`} w-[142px] border-2 cursor-pointer rounded-md text-left flex flex-col justify-between py-4 pl-4`}>
                                {plans[key] && <img src={plans[key][0]} alt="" className="w-11 pb-12" />}
                                <div className="flex flex-col">
                                    <span className="text-MarineBlue font-semibold">{key}</span>
                                    <span className="text-CoolGray">{Data.subscriptionTime == "Monthly" ? plans[key][1] :plans[key][2]}</span>
                                    {Data.subscriptionTime == "Yearly" && <span className="text-MarineBlue font-medium">2 months free</span> }
                                </div>
                            </div>
                        );
                    })}
                </div>
                <div className=" bg-Magnolia flex flex-row justify-center py-3 space-x-4 mt-8 rounded-md">
                    <div className={`${Data.subscriptionTime == "Yearly" && `text-CoolGray`} font-bold`}>Monthly</div>
                        <div className="relative flex flex-col items-center justify-center overflow-hidden">
                            <label className="inline-flex relative items-center  cursor-pointer">
                                <input
                                type="checkbox"
                                className="sr-only peer"
                                readOnly
                                />
                                <div
                                onClick={() => {
                                    getFromChild(
                                       {...Data, subscriptionTime: Data.subscriptionTime == "Monthly" ? "Yearly": "Monthly"}
                                    );
                                }}
                                // Fix animation button
                                className={`w-11 h-6 bg-MarineBlue rounded-full peer peer-focus:ring-MarineBlue ${Data.subscriptionTime == "Monthly" ? `peer-checked:after:translate-x-full` : `after:translate-x-full`}  peer-checked:after:border-white after:content-[''] after:absolute after:top-1 after:left-[6px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-MarineBlue`}
                                ></div>
                            </label>
                        </div>
                    <div className={`${Data.subscriptionTime == "Monthly" && `text-CoolGray`} font-bold`}>Yearly</div>
                </div>
            </div>
        </form>   
    )
}

export default SelectPlan