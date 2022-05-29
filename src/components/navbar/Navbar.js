import {Link} from 'react-router-dom'
import '../navbar/Navbar.css';
function Navbar(){
    return(
      

<nav class="nav ">
  
   
        <section className="nav-item color-change-2x">
          <Link to="/" className="nav-link active" aria-current="page">
            <i className="fa-solid fa-house"></i> Inicio
                </Link>
        </section>
        <section className="nav-item color-change-2x">
        <Link to="/studies" className="nav-link active" aria-current="page" >
                <i className="fa-solid fa-building-columns"></i> Estudios
                </Link>
        </section>
        <section className="nav-item color-change-2x">
        <Link to="/jobs" className="nav-link active" aria-current="page" >
                <i className="fa-solid fa-briefcase"></i> Laboral
                </Link>
        </section>
        <section className="nav-item color-change-2x">
        <Link to="/skills" className="nav-link active" aria-current="page" >
                <i className="fa-solid fa-network-wired"></i> Habilidades
                </Link>
        </section>
      
    
 
</nav>
    );
}
export default Navbar;