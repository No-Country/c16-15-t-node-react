const Contact = () => {
  return (
    <>
      {/* <WorkWithUs /> */}
      <main className="main">
        <section className="contact-section section-container">
          <h1>Contacto</h1>
          <div className="content-wrapper">
            <div>
              <h3>¿Quieres mas informacion?</h3>
              <div>
                <iframe></iframe>
              </div>
            </div>

            <address>
              <div className="contact-item">
                <h4>Teléfono</h4>
                <p>
                  <span className="jam jam-phone"></span>
                  <a href="tel:1234567890">(123) - 456 - 7890</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Correo electrónico</h4>
                <p>
                  <span className="jam jam-newsletter"></span>
                  <a href="mailto:ecofinder@gmail.com">ecofinder@gmail.com</a>
                </p>
              </div>

              <div className="contact-item">
                <h4>Redes sociales</h4>
                <div className="social-networks">
                  <a href="#">
                    <span className="jam jam-twitter"></span>
                  </a>
                  <a href="#">
                    <span className="jam jam-facebook"></span>
                  </a>
                  <a href="#">
                    <span className="jam jam-whatsapp"></span>
                  </a>
                  <a href="#">
                    <span className="jam jam-instagram"></span>
                  </a>
                </div>
              </div>

              <div className="contact-item">
                <h4>Dirección</h4>
                <p>
                  <span className="jam jam-map-marker"></span>
                  <a
                    href="https://www.google.com/maps/place/Rosario,+Santa+Fe,+Argentina/@-32.9521821,-60.7792113,12z/data=!4m15!1m8!3m7!1s0x95b6539335d7d75b:0xec4086e90258a557!2sRosario,+Santa+Fe,+Argentina!3b1!8m2!3d-32.9587022!4d-60.6930416!16zL20vMDJ0YjE3!3m5!1s0x95b6539335d7d75b:0xec4086e90258a557!8m2!3d-32.9587022!4d-60.6930416!16zL20vMDJ0YjE3?entry=ttu"
                    target="_blank"
                  >
                    Calle Falsa #123, Rosario, Santa Fe, Argentina
                  </a>
                </p>
              </div>

              <iframe></iframe>
            </address>
          </div>
        </section>
      </main>
    </>
  );
};

export default Contact;
