
import './Skills.css';
function Bodyskills(){
    return(
<div>
<h3 className="title-studie">Generales</h3>

<div className="d-flex skills-prog">
  <div className="card-body card-body-skills">Inglés</div>
  <div className="card-body card-body-skills">Herramientas ofimáticas</div>
  
  </div>
  <h3 className="title-studie">Programación</h3>

<div className=" skills-prog d-flex">
  <div className="card-body card-body-skills">React</div>
  <div className="card-body card-body-skills">HTML</div>
  <div className="card-body card-body-skills">GitHub</div>
  </div>

<div className="skills-prog d-flex">

  <div className="card-body card-body-skills ">JavaScript</div>
  <div className="card-body card-body-skills ">Visual Studio Code</div>
  <div className="card-body card-body-skills">Git Bash</div>
  </div>

<div className="skills-prog d-flex">
  <div className="card-body card-body-skills">Figma</div>
  <div className="card-body card-body-skills">Bootstrap</div>
  <div className="card-body card-body-skills">CSS</div>
</div>
</div>
);
}
export default Bodyskills;