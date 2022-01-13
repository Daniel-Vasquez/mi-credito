import Card from "./Card";
import CardText from "./CardText";
import "../components/styles/FeaturesDesigned.css";

function FeaturesDesigned() {
  return (
    <div className="FeaturesDesigned">
      <CardText
        title="Feactures designed for you"
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
