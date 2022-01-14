import Card from "./Card";
import CardText from "./CardText";

function FeaturesDesigned() {
  return (
    <div className="FeaturesDesigned">
      <CardText
        title={<h1 className="CardText_text">Feactures designed for you</h1>}
        description="We believe we have created the most efficient SaaS landing page for your users.
        Landing page with features that will convince you use it for your SaaS business."
      />
      <section className="FeaturesDesigned-Card">
        <Card />
      </section>
    </div>
  );
}

export default FeaturesDesigned;
