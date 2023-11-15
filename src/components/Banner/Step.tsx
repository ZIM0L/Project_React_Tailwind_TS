import { ContextStep } from "../../pages/Main/Home"
import { useContext } from "react"

function Step({order,text}: {order: number,text: string}) {

    const FormStep = useContext(ContextStep)
    return(
        <>
            <div className="flex flex-row md:mt-7 items-center md:space-x-5">
                <div className={`w-10 h-10 rounded-full flex justify-center items-center ${FormStep.step == order ? 'bg-LightBlue' : ' text-white border-white border-2'}`}>{order}</div>
                <div className="flex flex-col text-left text-white uppercase">
                    <div className="text-LightGray hidden md:inline-block">Step {order}</div>
                    <div className="font-bold tracking-wider hidden md:inline-block">{text}</div>
                </div>
            </div>
        </>
    )
}

export default Step