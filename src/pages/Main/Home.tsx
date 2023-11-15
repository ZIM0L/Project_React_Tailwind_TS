import Banner from "../../components/Banner/Banner";
import BannerSmall from "../../components/Banner/BannerSmall";
import FormContainer from "../../components/Forms/FormContainer";
import React, { useState } from "react";

interface ContextType {
  step: number;
  changeStep: (step: number) => void;
}

export const ContextStep = React.createContext<ContextType>({
  step: 1,
  changeStep: () => {},
});

function Home() {
  const [FormStep, setFormStep] = useState<number>(1);

  const ChangeFormStep = (step: number) => {
    setFormStep(step);
  };
  return (
    <>
      <ContextStep.Provider
        value={{ step: FormStep, changeStep: ChangeFormStep }}
      >
        <BannerSmall />
          <section
            id="sectionBanner"
            className=" bg-white rounded-lg flex flex-row h-fit md:p-5 shadow-md shadow-slate-300 w-[88%] md:w-full m-auto "
          >
            <Banner />
            <FormContainer />
          </section>
      </ContextStep.Provider>
    </>
  );
}

export default Home;
