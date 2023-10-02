function SelectPlan() {
    
    return(
        <form>
        <div className="pb-6">
            <h1 className="font-bold text-4xl text-MarineBlue py-2">Select your plan</h1>
            <p className="text-CoolGray">You have the option of monthly or yearly billing.</p>
        </div>
            <div className="flex flex-col">
                <div className="flex flex-row min-w-fit space-x-2">
                    <button className=" border-purple-600 w-[142px] h-[170px] border-2 rounded-md text-left  flex flex-col  justify-between py-4 pl-4 ">
                        <img src="src\assets\images\icon-arcade.svg" alt="" className="w-11"/>
                        <div className="flex flex-col">
                            <span className=" text-MarineBlue font-semibold ">Arcade</span>
                            <span className=" text-CoolGray">$9/mo</span>
                        </div>
                    </button>
                    <button className=" border-purple-600 w-[142px] h-[170px] border-2 rounded-md text-left  flex flex-col  justify-between py-4 pl-4 ">
                        <img src="src\assets\images\icon-advanced.svg" alt="" className="w-11"/>
                        <div className="flex flex-col">
                            <span className=" text-MarineBlue font-semibold ">Advanced</span>
                            <span className=" text-CoolGray">$12/mo</span>
                        </div>
                    </button><button className=" border-purple-600 w-[142px] h-[170px] border-2 rounded-md text-left  flex flex-col  justify-between py-4 pl-4 ">
                        <img src="src\assets\images\icon-pro.svg" alt="" className="w-11"/>
                        <div className="flex flex-col">
                            <span className=" text-MarineBlue font-semibold ">Pro</span>
                            <span className=" text-CoolGray">$15/mo</span>
                        </div>
                    </button>
                </div>
            </div>
        </form>   
    )
}

export default SelectPlan