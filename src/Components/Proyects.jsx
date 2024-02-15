function Proyects({title , subtitle , image}){
    return(
        <div>
            <img src={image} alt={title} />
            <h2>{title}</h2>
            <p>{subtitle}</p>
        </div>
    )
}


export default Proyects;
