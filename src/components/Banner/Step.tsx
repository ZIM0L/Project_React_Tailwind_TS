
function Step({order,text}: {order: number,text: string}) {
    return(
        <>
            <div className="flex flex-row mt-7 items-center space-x-5">
                <div className="w-10 h-10 bg-LightBlue rounded-full flex justify-center items-center ">{order}</div>
                <div className="flex flex-col text-left text-white uppercase">
                    <div className="text-CoolGray">Step {order}</div>
                    <div className="font-bold tracking-wider">{text}</div>
                </div>
            </div>
        </>
    )
}

export default Step