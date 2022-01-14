import check from "../Assets/checked-pricing.png";
import dropDown from "../Assets/drop-down-faq.png";
import CardQuestions from "./CardQuestions";
import "./styles/Questions.css";

function Questions() {
  return (
    <div className="FrequentlyQuestions">
      <section className="Frequently">
        <h1 className="Frequently_title">Frequently asked questions</h1>
        <p className="Frequently_text">
          Have a presale question about our products and features? Or looking
          for a refund? We would love to hear what you concern is.
        </p>
        <div className="Frequently_list">
          <div className="Frequently_list-container">
            <img src={check} alt="" />
            <p>Simple and Smart HTML code</p>
          </div>
          <div className="Frequently_list-container">
            <img src={check} alt="" />
            <p>Works reintegrated in any part of the layout</p>
          </div>
          <div className="Frequently_list-container">
            <img src={check} alt="" />
            <p>Reuse the elements from one design to another</p>
          </div>
        </div>
      </section>
      <section className="Questions">
        <CardQuestions
          title="Installing the app on all devices"
          url={dropDown}
        />
        <CardQuestions
          title="How to implement and manage API key"
          url={dropDown}
        />
        <CardQuestions
          title="How to set up and optimize your account"
          url={dropDown}
        />
        <CardQuestions
          title="Manage your account access and security settings"
          url={dropDown}
        />
        <CardQuestions title="API integration basic overview" url={dropDown} />
        <CardQuestions
          title="Deactivating or deleting your account"
          url={dropDown}
        />
      </section>
    </div>
  );
}

export default Questions;
