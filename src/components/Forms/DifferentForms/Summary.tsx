import { DataFormat } from "../../../interfaces/DataFormat";
import { plans } from "../../../data";
import { addOns } from "../../../data";
import { useContext } from "react";
import { ContextStep } from "../../../pages/Main/Home";
interface summary {
  Data: DataFormat;
}

function Summary({ Data }: summary) {
  const value = useContext(ContextStep);

  const SumFunc = () => {
    let sum: number = 0;
    if (Data.subscriptionTime == "Monthly") {
      Data.plan.map((val) => {
        sum += parseInt(
          plans[val][1].slice(1).slice(0, plans[val][1].indexOf("/") - 1)
        );
      });
      Data.addOns.map((val) => {
        sum += parseInt(
          addOns[val][1].slice(2).slice(0, addOns[val][1].indexOf("/") - 1)
        );
      });
    } else {
      Data.plan.map((val) => {
        sum += parseInt(
          plans[val][2].slice(1).slice(0, plans[val][2].indexOf("/") - 1)
        );
      });
      Data.addOns.map((val) => {
        sum += parseInt(
          addOns[val][2].slice(2).slice(0, addOns[val][2].indexOf("/") - 1)
        );
      });
    }
    return (
      <p className="text-PurplishBlue font-extrabold text-xl">${sum}/yr</p>
    );
  };
  return (
    <section>
      <div className="pb-6">
        <h1 className="font-bold text-4xl text-MarineBlue py-2">
          Finishing up
        </h1>
        <p className="text-CoolGray pr-30">
          Double-check everything looks OK before confirming
        </p>
      </div>
      <div className=" w-full bg-Magnolia flex flex-col px-8 py-4 rounded-xl">
        {Data.plan.map((val, key) => {
          return (
            <div
              key={key}
              className="flex flex-row justify-between items-center"
            >
              <div className="flex flex-col">
                <p className=" text-MarineBlue font-bold ">
                  {val} ({Data.subscriptionTime})
                </p>
                <p
                  onClick={() => {
                    value.changeStep(2);
                  }}
                  className=" underline cursor-pointer  text-CoolGray font-medium"
                >
                  Change
                </p>
              </div>
              <p className=" text-MarineBlue text-lg font-extrabold">
                {Data.subscriptionTime == "Monthly"
                  ? plans[val][1]
                  : plans[val][2]}
              </p>
            </div>
          );
        })}
        <hr content="" className="w-full bg-slate-300 my-6"></hr>
        {Data.addOns.map((val, key) => {
          return (
            <div key={key} className="flex flex-row justify-between pb-3">
              <p className="text-CoolGray ">{val}</p>
              <p className="font-medium text-slate-500">
                {Data.subscriptionTime == "Monthly"
                  ? addOns[val][1]
                  : addOns[val][2]}
              </p>
            </div>
          );
        })}
      </div>
      <div className="flex flex-row justify-between py-4 px-8">
        <p className="text-CoolGray ">
          Total (per{" "}
          {Data.subscriptionTime == "Monthly"
            ? Data.subscriptionTime.slice(0, 5).toLocaleLowerCase()
            : Data.subscriptionTime.slice(0, 4).toLocaleLowerCase()}
          )
        </p>
        {SumFunc()}
      </div>
    </section>
  );
}

export default Summary;
