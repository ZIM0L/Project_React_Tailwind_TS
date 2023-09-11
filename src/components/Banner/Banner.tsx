
import Step from "./Step"

function Banner() {

    
    return(
        <>
            <div className="relative hidden sm:block">
            <img src="src\assets\images\bg-sidebar-desktop.svg" alt="shapes"  className=" object-cover"/>
                <div id="Banner" className="flex flex-col m-auto rounded-md  absolute top-0 left-10">
                    <Step order={1} text="your info"/>
                    <Step order={2} text="select plan"/>
                    <Step order={3} text="add-ons"/>
                    <Step order={4} text="summary"/>
                </div>
            </div>
        </>
    )
}

export default Banner