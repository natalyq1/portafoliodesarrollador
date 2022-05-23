import {Link} from 'react-router-dom'
import '../footer/Footer.css';
function Footer(){
    return(
      <nav class="nav">
        <li className="nav-item">
          <Link to="" className="nav-link active" aria-current="page">
          <i className="fa-solid fa-envelope"></i> nataly_lila@hotmail.com
                </Link>
        </li>
        <li className="nav-item">
        <Link to="" className="nav-link active" aria-current="page" >
        <i className="fa-brands fa-whatsapp"></i> (+57) 3017476530
                </Link>
        </li>
        <li className="nav-item nav-link active py-3 px-5 mx-4" aria-current="page">
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/maria-nataly-quiroga-frontend/'><i className="fa-brands fa-linkedin"></i>Perfil Linkedin </a> 
        </li>
        <li className="nav-item nav-link active py-3 px-5 mx-4" aria-current="page">
         <a target="_blank" rel="noreferrer" href='https://github.com/natalyq1'> <i class="fa-brands fa-github-square"></i> Perfil Github </a> 
        </li>
     
</nav>
    );
}
export default Footer;