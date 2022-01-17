import CardText from "./CardText";
import CardMembership from './CardMembership'
import "./styles/FlexiblePricing.css";

function FlexiblePricing() {
  return (
    <div className="FlexiblePricing">
      <CardText
        title={<h1 className="CardText_text">Flexible Pricing</h1>}
        description="We belive we have created the most efficient Saas landing page for your
        users. Landing page with features that will convince you to use it for
        your SaaS business."
      />
      <div className="FlexiblePricing_time">
        <button className="FlexiblePricing_time-monthly">Monthly</button>
        <button className="FlexiblePricing_time-yearly">Yearly</button>
      </div>
      <CardMembership />
    </div>
  );
}

export default FlexiblePricing;
