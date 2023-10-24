import { DataFormat } from "../../../interfaces/DataFormat";

interface summary {
    getFromChild: (Data: DataFormat) => void;
    Data: DataFormat;
}

function Summary({ getFromChild, Data }: summary) {
    return (
        <section>
            <div className="pb-6">
                    <h1 className="font-bold text-4xl text-MarineBlue py-2">Finishing up</h1>
                    <p className="text-CoolGray pr-30">Double-check everything looks OK before confirming</p>
            </div>
            <div>
                
            </div>
        </section>

    )
}

export default Summary