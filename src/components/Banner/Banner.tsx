import Step from "./Step";
import { sidebar } from "../../data";

function Banner() {
  const renderSteps = () => {
    return sidebar.map((item, index) => (
      <Step key={index} order={index + 1} text={item} />
    ));
  };
  return (
    <>
      <div className="relative hidden md:block">
        <img
          src="images\bg-sidebar-desktop.svg"
          alt="shapes"
          className=" object-cover"
        />
        <div
          id="Banner"
          className="flex flex-col m-auto rounded-md  absolute top-0 left-10"
        >
          {renderSteps()}
        </div>
      </div>
    </>
  );
}

export default Banner;
