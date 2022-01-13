import code from "../Assets/code.png";
import Btn from "./Btn";
import CardText from "./CardText";
import "../components/styles/EasyApi.css";

function EasyApi() {
  return (
    <div className="Easy">
      <CardText
        title="Easy to use API"
        description="Guide to setup and configuration. You can present below a guide and a
        description of how your system configuration works and add some animated
        screens"
      />
      <section className="Easy_configuration">
        <div className="Configuration_container">
          <p>Initializing JS</p>
          <p>Configuration CSS</p>
          <p>Security Levels API</p>
        </div>
        <img className="Configuration_container-img" src={code} alt="Code" />
        <div className="Configuration_container-btn">
          <div className="Container-btn">
            <Btn title="Get THE CODE" color="cyan" />
            <Btn title="RUN EXAMPLE" color="purple" />
          </div>
        </div>
      </section>
    </div>
  );
}

export default EasyApi;
