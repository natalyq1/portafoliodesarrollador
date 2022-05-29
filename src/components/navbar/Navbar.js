import {Link} from 'react-router-dom'
import '../navbar/Navbar.css';
function Navbar(){
    return(
      

<nav class="nav navbar ">
  
<Link to="/" className="nav-link active" aria-current="page">
        <section className="nav-item-navbar nav-item color-change-2x">
                <i className="fa-solid fa-house"></i> Inicio
         </section>       
</Link>
        
<Link to="/studies" className="nav-link active" aria-current="page" >
        <section className="nav-item-navbar nav-item color-change-2x">
                <i className="fa-solid fa-building-columns"></i> Estudios
        </section>        
</Link>
<Link to="/jobs" className="nav-link active" aria-current="page" >
        <section className="nav-item-navbar nav-item color-change-2x">
                <i className="fa-solid fa-briefcase"></i> Laboral
        </section>        
</Link>
        
<Link to="/skills" className="nav-link active" aria-current="page" >
        <section className="nav-item-navbar nav-item color-change-2x">
                <i className="fa-solid fa-network-wired"></i> Habilidades
        </section>        
</Link>
      
    
 
</nav>
    );
}
export default Navbar;