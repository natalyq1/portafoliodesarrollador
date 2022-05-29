import {Link} from 'react-router-dom'
import '../footer/Footer.css';
function Footer(){
    return(
      <nav class="nav">
<Link to="" className="nav-item-footer nav-link active" aria-current="page"> 
        <li className="nav-item nav-link active">
                <i className="fa-solid fa-envelope"></i> nataly_lila@hotmail.com
        </li>      
</Link>

<Link to="" className="nav-item-footer nav-link active" aria-current="page" >
        <li className="nav-item nav-link active">
                <i className="fa-brands fa-whatsapp"></i> (+57) 3017476530
        </li>        
</Link> 

<div className="nav-item-footer nav-link " aria-current="page" >     
        <li className=" nav-item nav-link " aria-current="page">
        <a target="_blank" rel="noreferrer" href='https://www.linkedin.com/in/maria-nataly-quiroga-frontend/'><i className="fa-brands fa-linkedin"></i>Perfil Linkedin </a> 
        </li>
</div> 
       
<div className="nav-item-footer nav-link " aria-current="page" >
       <li className="nav-item nav-link " aria-current="page"> 
        <a target="_blank" rel="noreferrer" href='https://github.com/natalyq1'>         
         <i class="fa-brands fa-github-square"></i> Perfil Github 
        </a> 
        </li>
</div>

</nav>
    );
}
export default Footer;