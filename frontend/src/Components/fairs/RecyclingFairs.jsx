function RecyclingFairs({title , subtitle , image, date}){
    return(
        <div>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
            <h3>Fecha: {date}</h3>
        </div>
    )
}


export default RecyclingFairs;
