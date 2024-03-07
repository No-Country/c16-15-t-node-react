import "../../../src/styles.css";
import misionImg from "../../assets/mision.png";
import aboutUsImg from "../../assets/about_us.png";
import visionImg from "../../assets/vision.png";

function AboutUs() {
  return (
    <main className="main">
      <section className="about-us section-container">
        <h1>Quienes somos?</h1>
        <div className="content-wrapper">
          <article className="about-item">
            <div className="image-container">
              <img
                className="aboutus-image"
                src={aboutUsImg}
                alt="Sobre nosotros"
              />
            </div>
            <div>
              <h2>Sobre nosotros</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nostrum nobis aut. Enim, qui quae optio commodi asperiores nam
                necessitatibus neque quam doloremque quaerat aspernatur
                adipisci, animi nihil consequatur recusandae!
              </p>
            </div>
          </article>

          <article className="about-item">
            <div className="image-container">
              <img src={misionImg} alt="Mision" />
            </div>
            <div>
              <h2>Misión</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nostrum nobis aut. Enim, qui quae optio commodi asperiores nam
                necessitatibus neque quam doloremque quaerat aspernatur
                adipisci, animi nihil consequatur recusandae!
              </p>
            </div>
          </article>

          <article className="about-item">
            <div className="image-container">
              <img src={visionImg} alt="Vision" />
            </div>
            <div>
              <h2>Visión</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Placeat
                nostrum nobis aut. Enim, qui quae optio commodi asperiores nam
                necessitatibus neque quam doloremque quaerat aspernatur
                adipisci, animi nihil consequatur recusandae!
              </p>
            </div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default AboutUs;
