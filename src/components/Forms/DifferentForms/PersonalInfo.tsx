// PersonalInfo.js
import { DataFormat } from "../../../interfaces/DataFormat";
import { personalInfo } from "../../../data";
interface PersonalInfoProps {
    getFromChild: (Data: DataFormat) => void;
    Data: DataFormat;
    isFieldRequired: boolean[];
}

function PersonalInfo({ getFromChild, Data, isFieldRequired }: PersonalInfoProps) {

    const handleInputChange = (param: string, value: string) => {
        const newData = { ...Data, [param]: value };
        getFromChild(newData);
    };
    return (
        <form>
            <div className="pb-6">
                <h1 className="font-bold text-4xl text-MarineBlue py-2">Personal info</h1>
                <p className="text-CoolGray">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="text-MarineBlue flex flex-col space-y-7">
                <div>
                    <div className="flex flex-row justify-between ">
                        <span className="font-bold">Name</span>
                        {isFieldRequired[0] && <span className="text-StrawberryBed">This field is required</span>}
                    </div>
                    <input
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className={`border-2 border-LightGray rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none ${isFieldRequired[0] && `border-red-500`} focus:border-purple-500 font-bold`}
                        id="inline-full-name"
                        type="text"
                        placeholder="e.g Stephen King"
                        required={isFieldRequired[0]}
                        value={Data.name}
                    />
                </div>
                <div>
                    <div className="flex flex-row justify-between ">
                        <span className="font-bold" >Email Address</span>
                        {isFieldRequired[1] && <span className="text-StrawberryBed">This field is required</span>}
                    </div>
                    <input
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`border-2 border-LightGray rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none ${isFieldRequired[1] && `border-red-500`} focus:border-purple-500 font-bold`}
                        id="inline-full-name"
                        type="email"
                        placeholder="stephenking@lorem.com"
                        required={isFieldRequired[1]}
                        value={Data.email}
                    />
                </div>
                <div>
                    <div className="flex flex-row justify-between ">
                        <span className="font-bold" >Phone Number</span>
                        {isFieldRequired[2] && <span className="text-StrawberryBed">This field is required</span>}
                    </div>
                    <input
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        className={`border-2 border-LightGray rounded-lg w-full py-2 px-3 text-gray-700 focus:outline-none ${isFieldRequired[2] && `border-red-500`} focus:border-purple-500 font-bold`}
                        type="number"
                        placeholder="e.g + 1 234 567 890"
                        required={isFieldRequired[2]}
                        value={Data.phone}
                    />
                </div>
            </div>
        </form>
    )
}

export default PersonalInfo;
