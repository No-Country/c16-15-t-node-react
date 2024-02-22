import RecyclingFairs from "./RecyclingFairs";

function FairsGrid(){
    return(
        <>
            <div className="main-content">
                <RecyclingFairs
                    title='RAWMEC - Recycling & Waste Management Exhibition & Conference 2024 2024'                   
                    subtitle='Tratamiento de residuos, Residuos, Reciclaje, Medio ambiente'
                    image='https://images.neventum.com/logos/2023/78/160/6418246fdf4a6-rawmec-expo-logo.png'
                    date='Del 5 al 7 marzo 2024'
                />
                <RecyclingFairs
                    title="Fa' la cosa giusta 2024"
                    subtitle='Feria del consumo responsable y de los estilos de vida sostenibles organizado por Terre di Mezzo que quiere promover con eventos, libros y periodicos la importancia de la economía solidaria. Se hablará entonces de comercio justo, financia ética, ahorro energético, cooperación social, reciclaje, reutilización y de todos los temas que quieren conjugar desarrollo y equidad'
                    image='https://images.neventum.com/2011/249/b_7648_1d2b2c66.jpg'
                    date='Del 22 al 24 marzo 2024'
                />
                <RecyclingFairs
                    title='Automechanika Argentina 2024'
                    subtitle='Feria sudamericana e internacional de diseño, mantenimiento y reciclaje automotriz.'
                    image='https://images.neventum.com/logos/0000/1/160/automechanika_ba_110.jpg'
                    date='Del 10 al 13 abril 2024'
                />
            </div>
        
        </>
    )
}

export default FairsGrid;
