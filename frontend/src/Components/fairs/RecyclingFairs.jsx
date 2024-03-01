import "../../../src/styles.css";

function RecyclingFairs({title , subtitle , image, date}){
    return(
        <div>
            <div>
                <img src={image} alt={title} />
            </div>
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <h4>Fecha: {date}</h4>
        </div>
    )
}


export default RecyclingFairs;
