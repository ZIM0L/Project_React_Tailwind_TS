import Banner from "../../components/Banner/Banner"
import BannerSmall from "../../components/Banner/BannerSmall"
import FormContainer from "../../components/Forms/FormContainer"

function Home() {
    return(
        <>
            <BannerSmall />
            <section id="section" className=" bg-white rounded-lg  flex flex-row h-fit p-5 shadow-md shadow-slate-300">
            <Banner />
            <FormContainer />     
            </section>
        </>
    )
}

export default Home