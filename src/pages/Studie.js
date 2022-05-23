import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

import {getStudies} from '../studies';

function Study(){
    const params=useParams();
    const study=getStudies(parseInt(params.id));
    return(
        <div>
        <Header />
        <Navbar />
         
         <div>
         <h3 className="title-studie">{study.empresa}</h3>
            <div className='item-studie item-studie-studies'>
            <p><strong>Título: </strong>{study.cargo}</p><br/>
            </div>
            <div className="item-studie item-studie-studies">
            <p><strong>Fecha finalización: </strong>{study.anio}</p><br/>
            </div>
        </div>

        <Footer />
        </div>
       
    )
}
export default Study;