import Form from "../components/Form";
import btn_play from "../Assets/btn-play.png";
import Btn from "./Btn";
import "./styles/Header.css";

function Header() {
  return (
    <header className="Header">
      <section className="BuildApplication">
        <h1 className="BuildApplication-title">
          Build applications <code>faster</code>
        </h1>
        <p>
          Hire experts & get your job done. The right IT securuty solutions.
          Protect your clients and computer systems from hackers and fight
          against malware.
        </p>
        <p className="BuildApplication-text">
          For as low as <code>$0.95</code> per user account
        </p>
        <div className="BuildApplication-btn">
          <Btn color= 'cyan' title="WATCH DEMO">
            <img src={btn_play} alt="icon" loading="lazy"/>
          </Btn>
          <Btn color='purple'title='START NOW'/>
        </div>
      </section>
      <section className="Form">
        <Form />
      </section>
    </header>
  );
}

export default Header;
