import {getAllStudies} from "../studies";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Link} from "react-router-dom";
import '../index.css';

function Studies(){
    const studies=getAllStudies();
    return(
        <html>
           <Header />
            <Navbar />
            <h3 className="title-studie">Estudios</h3>

    {studies.map(study=>
        <div className="studie-box" key={study.id}>
            <div className="item-studie">
            {study.empresa}<br/>
            </div>
            <div className="item-studie">
            {study.anio}<br/>
            </div>
            <div className="item-studie">
            <button className="button-studie2">
                <Link to={`${study.id}`}> Ver más</Link>
            </button>
            </div>
        </div>
        )}

<Footer />
        </html>
    )
}
export default Studies;