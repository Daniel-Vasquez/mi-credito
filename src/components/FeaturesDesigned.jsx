import Card from "./Card";
import CardText from "./CardText";

function FeaturesDesigned() {
  return (
    <div className="FeaturesDesigned">
      <CardText
        title={<h1 className="CardText_text">Features designed for you</h1>}
        description="We belive we have created the most efficient SaaS landing page for your users.
        Landing page with features that will convince you to use it for your SaaS business."
      />
      <section className="FeaturesDesigned-Card">
        <Card />
      </section>
    </div>
  );
}

export default FeaturesDesigned;
