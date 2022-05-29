import {getAllJobs} from "../jobs";
import Navbar from "../components/navbar/Navbar";
import Header from "../components/header/Header";
import Footer from "../components/footer/Footer";
import {Link} from "react-router-dom";
import '../index.css';

function Jobs(){
    const jobs=getAllJobs();
    return(
        <html>
        <div>
            <Header />
            <Navbar />
            <h3 className="title-studie">Experiencia Laboral</h3>

    {jobs.map(job=>
        <div className="studie-box" key={job.id}>
            <div className='item-studie'>
            {job.empresa}<br/>
            </div>
            <div className="item-studie">
            {job.anio}<br/>
            </div>
            <div className="item-studie">
            <button className="button-studie-job">
                <Link to={`${job.id}`}> Ver más</Link>
            </button>
            </div>
        </div>
        
        )}

<Footer />
        </div>
        </html>
    )
}

export default Jobs;