interface DataFormat{
    name: string,
    email: string,
    phone: string
}
interface PersonalInfo{
    getFromChild: (Data : DataFormat) => void,
    Data: DataFormat
}

function PersonalInfo({getFromChild, Data}: PersonalInfo) {
    
    const handleInputChange = (param: string, value: string) => {
        const newData = { ...Data, [param]: value };
        getFromChild(newData);
      };

    return(
        <form>
            <div className="pb-6">
                <h1 className=" font-bold text-4xl text-MarineBlue py-2">Personal info</h1>
                <p className=" text-CoolGray">Please provide your name, email address, and phone number.</p>
            </div>
            <div className="text-MarineBlue flex flex-col space-y-7">
                <div>
                    <div className="flex flex-row justify-between ">
                        <span>Name</span>
                        <span>This field is required</span>
                    </div>
                    <input 
                    onChange={(e) => handleInputChange('name',e.target.value)} className="border-2 border-LightGray rounded-lg w-full py-2 px-3 text-gray-700  focus:outline-none focus:border-purple-500 font-bold" id="inline-full-name" 
                    type="text"/>
                </div>
                <div>
                    <p className="font-medium pb-1">Email Address</p>
                    <input 
                    onChange={(e) => handleInputChange('email',e.target.value)} 
                    className="border-2 border-LightGray rounded-lg w-full py-2 px-3 text-gray-700  focus:outline-none focus:border-purple-500 font-bold" id="inline-full-name" 
                    type="email" />
                </div>
                <div>
                    <p className="font-medium pb-1">Phone Number</p>
                    <input 
                    onChange={(e) => handleInputChange('phone',e.target.value)} 
                    className="border-2 border-LightGray rounded-lg w-full py-2 px-3 text-gray-700  focus:outline-none focus:border-purple-500 font-bold" id="inline-full-name" 
                    type="number" placeholder="e.g + 1 234 567 890"/>
                </div>
            </div>
        </form>

    )
}
export default PersonalInfo