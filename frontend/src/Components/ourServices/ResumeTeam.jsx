import "../../../src/styles.css";
import waste_reduction from "../../assets/waste_reduction.png"

function ResumeTeam() {

    return (
        <section className="section-container about-section">
            <div className="content-wrapper">
                <h2 className="title">SOBRE ECOFINDER</h2>
                <p className="subtitle">Nuestro sitio web ha sido diseñado con el propósito de fomentar el reciclaje y crear conciencia sobre las prácticas ambientales sostenibles. Nos enfocamos en educar e informar sobre la correcta gestión de residuos, así como en resaltar las oportunidades de darle una segunda vida a productos de uso diario. Únete a nuestra iniciativa y apóyanos en la protección de nuestro planeta participando en actividades que promuevan un futuro más verde y sostenible!</p>
                <p><span>SE PARTE DE LA COMUNIDAD!</span></p>
            </div>
            <img className="background" src={waste_reduction} alt="Waste reduction"></img>
        </section>
    )
}

export default ResumeTeam;