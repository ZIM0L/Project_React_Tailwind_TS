import { sidebar } from "../../data";
import Step from "./Step";

function BannerSmall() {
  const renderSteps = () => {
    return sidebar.map((item, index) => (
      <Step key={index} order={index + 1} text={item} />
    ));
  };
  return (
    <section
      id="BannerSmall"
      className="md:hidden flex flex-row justify-between max-w-[200px] m-auto h-[100px]"
    >
      {renderSteps()}
    </section>
  );
}
export default BannerSmall;
