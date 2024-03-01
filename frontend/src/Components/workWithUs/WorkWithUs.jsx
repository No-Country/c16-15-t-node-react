import "../../../src/styles.css";


function WorkWithUs() {

    return (
        <section className="work-with-us">
            <div clasName="content-wrapper">
                <h2 className="title">¿Quieres trabajar con nosotros?</h2>
                <p className="subtitle">Es momento de hacerte escuchar y darte a conocer en la localidad!. Puedes contactarnos en nuestras redes sociales <br /> o enviando un correo a:
                </p>
                <a href="mailto:ecofinder@gmail.com" class="button">ecofinder@gmail.com</a>
                <div class="social-networks">
                    <a href="#" target="_blank"><span class="jam jam-facebook"></span></a>
                    <a href="#" target="_blank"><span class="jam jam-twitter"></span></a>
                    <a href="#" target="_blank"><span class="jam jam-whatsapp"></span></a>
                    <a href="#" target="_blank"><span class="jam jam-instagram"></span></a>
                </div>
            </div>
        </section>
    )
}

export default WorkWithUs;
