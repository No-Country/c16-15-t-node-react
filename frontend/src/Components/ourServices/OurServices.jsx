import "../../../src/styles.css";
import reciclaje_local from "../../assets/reciclaje_local.png"
import registro from "../../assets/registro.png"

function OurServices(){
    return(
        <section className="services-section section-container">

            <h2>QUE SERVICIOS OFRECEMOS?</h2>
            <div className="content-wrapper">
                <article className="service-item">
                    <span><img className="image-service" src={reciclaje_local} alt="First-service"/></span>
                    <h3>Encuentra el sitio de reciclaje perfecto para lo que necesitas!</h3>
                    <p className="subtitle">Si tienes desechos o residuos reciclables en tu hogar, tales como: papel, madera, plásticos, vidrio, aluminio, baterías, entro otros tipos de materiales que se pueden reciclar y darle una segunda vida, no dudes en verificar en nuestra aplicación en donde puedes hacer una adecuada disposición de ellos.</p>
                </article>
                <article className="service-item">
                    <span><img className="image-service" src={registro} alt="Second-service"/></span>
                    <h3>Registro en la aplicación para empresas, instituciones, cooperativas y particulares.</h3>
                    <p className="subtitle">Llena el formulario con tus datos o los de tu institución para anunciar tu actividad ambientalista o feria de reciclaje que contribuya a cuidar y proteger el medio ambiente en tu localidad.</p>
                </article>
            </div>

        </section>
    )
}

export default OurServices;
