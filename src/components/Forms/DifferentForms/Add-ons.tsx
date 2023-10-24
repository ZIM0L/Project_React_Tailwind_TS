import { DataFormat } from "../../../interfaces/DataFormat";
import { addOns } from "../../../data";


interface addOns {
    getFromChild: (Data: DataFormat) => void;
    Data: DataFormat;
}
function AddOns({ getFromChild, Data }: addOns) {
    
    const handleClick = (key: string) => {
        const newData:string[] = Data.addOns
        if (!Data.addOns.includes(key)) {
            newData.push(key);
            newData.sort();
            getFromChild({...Data, addOns: newData})
        } else {
            newData.splice(newData.indexOf(key),1);
            getFromChild({...Data, addOns: newData})
        }
    }

    return(
        <form>
            <div className="pb-6">
                <h1 className="font-bold text-4xl text-MarineBlue py-2">Pick add-ons</h1>
                <p className="text-CoolGray pr-30">Add-ons help enhance your gaming experience</p>
            </div>
            <div className="flex flex-col space-y-4">
                {Object.keys(addOns).map( (key) => {
                    return (
                    <div key={key} onClick={() => handleClick(key)} className={` ${Data.addOns.includes(key) && `border-purple-700`} flex flex-row  w-full justify-between p-4 border-2 rounded-md items-center cursor-pointer`}>
                        <div className="flex flex-row ">
                            {/* fix how it looks */}
                             <input type="checkbox" checked={Data.addOns.includes(key)} id="OnlineService"  
      className="before:content[''] peer relative h-5 w-5 cursor-pointer appearance-none rounded-md border border-blue-gray-200 transition-all before:absolute before:top-2/4 before:left-2/4 before:block before:h-12 before:w-12 before:-translate-y-2/4 before:-translate-x-2/4 before:rounded-full before:bg-blue-gray-500 before:opacity-0 before:transition-opacity checked:border-pink-500 checked:bg-pink-500 checked:before:bg-pink-500 hover:before:opacity-10" onChange={()=>{}}/> 
                                <div className="pl-4">
                                    <p className=" self-start text-lg font-bold text-MarineBlue">{key}</p>
                                    <p>{addOns[key][0]}</p>
                                </div>
                        </div>
                        <div className=" text-purple-600">
                        {Data.subscriptionTime.match("Monthly") ? addOns[key][1] : addOns[key][2]} 
                        </div>
                    </div>
                    )
                })}
                
            </div>
        </form>
    )
}
export default AddOns