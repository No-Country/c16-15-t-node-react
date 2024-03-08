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
                className="about-team-img"
                src={aboutUsImg}
                alt="Sobre nosotros"
              />
            </div>
            <div>
              <h2>Sobre nosotros</h2>
              <p>
                En EcoFinder, somos un equipo multidisciplinario de desarrolladores que creemos firmemente en el poder de la tecnología para catalizar el cambio positivo. Nuestra atención a la protección del planeta y el impulso de la sostenibilidad nos ha llevado a crear esta plataforma que reúne recursos y herramientas prácticas para fomentar un estilo de vida más ecológico. Como creadores de EcoFinder, estamos comprometidos con la misión de empoderar a las comunidades y localidades para que se conviertan en agentes de cambio ambiental, brindándoles las herramientas y la información necesarias para tomar decisiones más conscientes y responsables.
              </p>
            </div>
          </article>

          <article className="about-item">
            <div className="image-container">
              <img className="about-team-img" src={misionImg} alt="Mision" />
            </div>
            <div>
              <h2>Misión</h2>
              <p>
                En EcoFinder, nuestra misión es promover y facilitar la adopción de prácticas ambientales sostenibles al proporcionar una plataforma integral que conecta a las personas con información, recursos y eventos relacionados con el cuidado del medio ambiente, tal y como lo es el reciclaje. Nos esforzamos por educar e inspirar a individuos y comunidades para que tomen acciones concretas que contribuyan a la conservación del planeta y la creación de un futuro más verde y saludable para las generaciones venideras.!
              </p>
            </div>
          </article>

          <article className="about-item">
            <div className="image-container">
              <img className="about-team-img" src={visionImg} alt="Vision" />
            </div>
            <div>
              <h2>Visión</h2>
              <p>
                Nuestra visión en EcoFinder es crear un mundo en el que cada persona esté consciente del impacto ambiental de sus acciones y esté equipada con los conocimientos y recursos necesarios para tomar decisiones más sostenibles en su vida diaria. Imaginamos un futuro en el que la información sobre prácticas ambientales saludables esté ampliamente disponible y accesible para todos, y en el que la comunidad se una en un esfuerzo colectivo para proteger y preservar nuestro precioso entorno natural. En EcoFinder, aspiramos hacia un estilo de vida más ecológico y responsable, impulsando el cambio positivo a través de la educación y la colaboración.
              </p>
            </div>
          </article>

          <article className="about-team">
            <div>
              <h3>Equipo de desarrolladores de EcoFinder!</h3>
              <p>Los creadores de EcoFinder, cuyo trabajo y dedicación han hecho posible el desarrollo y evolución continua de la plataforma, de la mano de la creatividad, perseverancia y contribución invaluable; han sido la fuerza impulsora detrás de cada línea de código, cada función implementada y cada mejora realizada:</p>
              <ul className="social-networks-team">
                <li>Federico del Corro (Back-end) - <a href="https://www.linkedin.com/in/federico-del-corro-b49501236/" target="_blank"><span className="jam jam-linkedin" ></span></a> <a href="https://github.com/EfededeCe" target="_blank"><span className="jam jam-github" ></span></a></li>
                <li>Erick Henríquez (Back-end) - <a href="https://www.linkedin.com/in/erick-david-henriquez-sierra/" target="_blank"><span className="jam jam-linkedin" ></span></a> <a href="https://github.com/erickdavidhz7" target="_blank"><span className="jam jam-github" ></span></a></li>
                <li>Casandra González (Front-end) - <a href="https://www.linkedin.com/in/casandra-gonzalez-/" target="_blank"><span className="jam jam-linkedin" ></span></a> <a href="https://github.com/CassieGz" target="_blank"><span className="jam jam-github" ></span></a></li>
                <li>Andrea Alvanés Calderón (Front-end) - <a href="https://www.linkedin.com/in/andrea-alvanes-calderon/" target="_blank"><span className="jam jam-linkedin" ></span></a> <a href="https://github.com/andrea-calderon" target="_blank"><span className="jam jam-github" ></span></a></li>
              </ul>
            </div>
          </article>

        </div>
      </section>
    </main>
  );
}

export default AboutUs;
