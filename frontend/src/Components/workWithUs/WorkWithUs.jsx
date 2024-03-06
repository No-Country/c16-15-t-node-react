import "../../../src/styles.css";
import Form from "../workWithUs/Form";

function WorkWithUs() {
  return (
    <section className="work-with-us">
      <div className="content-wrapper">
        <article>
          <h2 className="title">¿Quieres trabajar con nosotros?</h2>
          <p className="subtitle">
            Es momento de hacerte escuchar y darte a conocer en la localidad!.
            Puedes contactarnos en nuestras redes sociales <br /> o enviando un
            correo a:
          </p>
          <a href="mailto:ecofinder@gmail.com" className="button">
            ecofinder@gmail.com
          </a>
          <div className="social-networks">
            <a href="#" target="_blank">
              <span className="jam jam-facebook"></span>
            </a>
            <a href="#" target="_blank">
              <span className="jam jam-twitter"></span>
            </a>
            <a href="#" target="_blank">
              <span className="jam jam-whatsapp"></span>
            </a>
            <a href="#" target="_blank">
              <span className="jam jam-instagram"></span>
            </a>
          </div>
        </article>
        <article>
          <br />
          <Form />
        </article>
      </div>
    </section>
  );
}

export default WorkWithUs;
