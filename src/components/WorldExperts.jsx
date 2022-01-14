import CardText from "./CardText";
import avatar1 from "../Assets/avatar-1.jpg";
import avatar2 from "../Assets/avatar-2.jpg";
import avatar3 from "../Assets/avatar-3.jpg";
import avatar4 from "../Assets/avatar-4.jpg";
import avatar5 from "../Assets/avatar-5.jpg";
import avatar6 from "../Assets/avatar-6.jpg";
import "./styles/WorldExperts.css";

function WorldExperts() {
  return (
    <div className="WorldExperts">
      <CardText
        title={<h1 className="CardText_title">Trusted by world experts</h1>}
      />
      <div className="WorldExperts_users">
        <div className="Users_img" style={{ top: '30%' }}>
          <img src={avatar1} alt="Icon avatar1" loading="lazy"/>
        </div>
        <div className="Users_img" style={{ top: '10%', left: '15%' }}>
          <img src={avatar2} alt="Icon avatar2" loading="lazy"/>
        </div>
        <div className="Users_img" style={{ top: '25%', left: '40%' }}>
          <img src={avatar3} alt="Icon avatar3" loading="lazy"/>
        </div>
        <div className="Users_img" style={{ top: '55%', left: '60%' }}>
          <img src={avatar4} alt="Icon avatar4" loading="lazy"/>
        </div>
        <div className="Users_img" style={{ top: '65%', left: '20%' }}>
          <img src={avatar5} alt="Icon avatar5" loading="lazy"/>
        </div>
        <div className="Users_img" style={{ top: '15%', left: '80%' }}>
          <img src={avatar6} alt="Icon avatar6" loading="lazy"/>
        </div>

      </div>
    </div>
  );
}

export default WorldExperts;
