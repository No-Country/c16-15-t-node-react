import "../../../src/styles.css";
import waste_reduction from "../../assets/waste_reduction.png"

function AboutUs() {

    return (
        <section className="section-container about-section">
            <div className="content-wrapper">
                <h2 className="title">SOBRE NOSOTROS</h2>
                <p className="subtitle">Este aplicación web se ha creado con la finalidad de promover el reciclaje y concientizar acerca de las buenas prácticas ambientales, sobre la disposición final de residuos y/o desechos, así como la segunda vida útil que pueden tener algunos productos de consumo diario. Se parte de esta gran iniciativa y apóyanos con las actividades que ayuden a proteger nuestro planeta!</p>
                <a href="/" className="button white ghost">Se parte de la comunidad</a>
            </div>
            <img className="background" src={waste_reduction} alt="Waste reduction"></img>
        </section>
    )
}

export default AboutUs;
