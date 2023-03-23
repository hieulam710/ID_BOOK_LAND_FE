import Banner from "../../components/banners/Banner";
import FeatureComponent from "../../components/feature/Feature";
import FlashSale from "../../components/flashSale/FlashSale";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MainHero from "../../components/mainHero/MainHero";
import PopularBooks from "../../components/popularBooks/PopularBooks";
import Recomment from "../../components/recomment/Recomment";

function HomePage() {
    return (<>
            <Header/>
            <MainHero/>
            <Banner/>
            <PopularBooks/>
        
            <FlashSale/>
            <Recomment/>
            <FeatureComponent/>
            <Footer/>
    </>);
}

export default HomePage;