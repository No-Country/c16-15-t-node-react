import "../../../src/styles.css";


function FairsGrid() {
    return (
        <section className="section-container last-projects">
            <h2 className="tittle">FERIAS ACTIVAS</h2>
            <div className="content-wrapper">
                <a href="https://www.nferias.com/expoagro-0/" target="_blank" className="project-item">
                    <article>
                        <div>
                            <h4>Expoagro 2024</h4>
                            <p>Casi un millar de stands de diferentes empresas exponen aquí sus bienes, insumos y servicios necesarios para producir granos y carne en el campo</p>
                        </div>
                        <div className="image-container">
                            <img
                                src="https://images.neventum.com/logos/2017/23/160/588773ecc45dc-expoagro.png"
                                alt="Feria 1"
                            />
                        </div>
                    </article>
                </a>
                <a href="https://www.nferias.com/fa-cosa-giusta/" target="_blank" className="project-item">
                    <article>
                        <div>
                            <h4>Fa' la cosa giusta 2024</h4>
                            <p>Feria del consumo responsable y de los estilos de vida sostenibles organizado por Terre di Mezzo que quiere promover con eventos, libros y periodicos la importancia de la economía solidaria</p>
                        </div>
                        <div className="image-container">
                            <img
                                src="https://images.neventum.com/2011/249/b_7648_1d2b2c66.jpg"
                                alt="Feria 2"
                            />
                        </div>
                    </article>
                </a>
                <a href="https://www.nferias.com/automechanika-argentina/" target="_blank" className="project-item">
                    <article>
                        <div>
                            <h4>Automechanika Argentina 2024.</h4>
                            <p>Feria sudamericana e internacional de diseño, mantenimiento y reciclaje automotriz</p>
                        </div>
                        <div className="image-container">
                            <img
                                src="https://images.neventum.com/logos/2020/264/160/5f6858536c0a8-automechanika-buenos-aires-110.png"
                                alt="Feria 3"
                            />
                        </div>
                    </article>
                </a>

            </div>

        </section>
    )
}

export default FairsGrid;
