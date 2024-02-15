import Proyects from "./Proyects"

function ProyectsGrid(){
    return(
        <>
            <div className="main-content">
                <Proyects
                    title='Feria I'
                    subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium architecto quasi sequi beatae voluptatibus earum inventore vel asperiores ab ipsa quo maiores rem qui, cupiditate ipsum delectus doloribus iste.'
                    image='/'
                />
                <Proyects
                    title='Feria II'
                    subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium architecto quasi sequi beatae voluptatibus earum inventore vel asperiores ab ipsa quo maiores rem qui, cupiditate ipsum delectus doloribus iste.'
                    image='/'
                />
                <Proyects
                    title='Feria III'
                    subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium architecto quasi sequi beatae voluptatibus earum inventore vel asperiores ab ipsa quo maiores rem qui, cupiditate ipsum delectus doloribus iste.'
                    image='/'
                />
            </div>
        
        </>
    )
}

export default ProyectsGrid;
