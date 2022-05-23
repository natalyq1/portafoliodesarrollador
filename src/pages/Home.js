import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import Bodyhome from "../components/bodyhome/Bodyhome";
function Home(){
    return(
        <div>
            
            <Header />
            <Navbar/>
            <Bodyhome />
            <Footer />
            
        </div>
    )
}
export default Home;