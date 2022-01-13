import CardText from "./CardText";
import CardMembership from './CardMembership'
import "./styles/FlexiblePricing.css";

function FlexiblePricing() {
  return (
    <div className="FlexiblePricing">
      <CardText
        title="Flexible Pricing"
        description="We belive we have created the most efficient Saas landing page for your
        users. Landing page with features that will convince you to use it for
        your SaaS business."
      />
      <div className="FlexiblePricing_time">
        <p className="FlexiblePricing_time-monthly">Monthly</p>
        <p lassName="FlexiblePricing_time-yearly">Yearly</p>
      </div>
      <CardMembership />
    </div>
  );
}

export default FlexiblePricing;
