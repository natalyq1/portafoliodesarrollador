import { useParams } from "react-router-dom";
import Navbar from "../components/navbar/Navbar"
import {getJobs} from '../jobs'
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";

function Job(){
    const params=useParams();
    const job=getJobs(parseInt(params.id));
    return(
        <html>
        <div>
        <Header />
        <Navbar />
         
         <div>
             <h3 className="title-studie">{job.empresa}</h3>
            <div className='item-studie item-studie-studies'>
            <p><strong>Título: </strong>{job.cargo}</p><br/>
            </div>
            <div className="item-studie item-studie-studies">
            <p><strong>Periodo: </strong>{job.anio}</p><br/>
            </div>
            <div className="item-studie item-studie-studies">
            <p><strong>Responsalbilidades: </strong>{job.tareas}</p><br/>
            </div>

         </div>

         <Footer />
         </div>
       </html>
    )
}
export default Job;