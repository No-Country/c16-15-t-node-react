import RecyclingFairs from "./fairs/RecyclingFairs";

function FairsGrid(){
    return(
        <>
            <div className="main-content">
                <RecyclingFairs
                    title='Feria I'
                    subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium architecto quasi sequi beatae voluptatibus earum inventore vel asperiores ab ipsa quo maiores rem qui, cupiditate ipsum delectus doloribus iste.'
                    image='/'
                    date=''
                />
                <RecyclingFairs
                    title='Feria II'
                    subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium architecto quasi sequi beatae voluptatibus earum inventore vel asperiores ab ipsa quo maiores rem qui, cupiditate ipsum delectus doloribus iste.'
                    image='/'
                    date=''
                />
                <RecyclingFairs
                    title='Feria III'
                    subtitle='Lorem ipsum dolor, sit amet consectetur adipisicing elit. Aperiam praesentium architecto quasi sequi beatae voluptatibus earum inventore vel asperiores ab ipsa quo maiores rem qui, cupiditate ipsum delectus doloribus iste.'
                    image='/'
                    date=''
                />
            </div>
        
        </>
    )
}

export default FairsGrid;
