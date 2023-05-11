import React, {useState, useEffect} from 'react'
import "../assessts/about.css"
import Scroll from '../Components/Scroll';
import data from "./data";
export default  function Management(){
    const [people] = useState(data);
    const [index , setIndex] = useState(0);

    useEffect(()=>{
        const lastIndex = people.length -1;
        if(index < 0){
            setIndex(lastIndex);
        }
        if(index > lastIndex){
            setIndex(0);
        }
    }, [index, people]);
    
    useEffect(()=>{
        let governingBody = setInterval(()=>{
            setIndex ( index + 1 )
        }, 5000);
        return ()=> {
            clearInterval(governingBody)
        }

    },[index]);

    return(
      <>
      <section className="Management">
      <Scroll />
      <p className="quote" >A strong governing body is the cornerstone of any successful institution, providing leadership, guidance, and stewardship to ensure its long-term success.</p>
    {/* Management details slider */}
      <section className="section">
            <div className="section-center">
                {people.map((item, indexPeople)=>{
                    const { id , image , name, title , quote} = item;
                    let position = "nextSlide";
                    if(indexPeople === index){
                        position ="activeSlide"
                    }
                    if(indexPeople  === index -1 || (index === 0 && indexPeople === people.length -1)){
                        position="lastSlide"
                    }
                    return(
                        <article className ={position} key ={id}>
                            <img src={image} alt={name} className="person-img"/>
                            <h1 className="name1">{name}</h1>
                            <p className="title">{title}</p>
                            <p className="text">{quote}</p>

                        </article>
                    )
                })}
                <button className="prev" onClick={()=> setIndex(index - 1)}>
                    <i className="fas fa-arrow-left" />
                </button>
                <button className="next" onClick={()=> setIndex(index + 1)}>
                    <i className="fas fa-arrow-right" />
                </button>
            </div>
</section>
</section>
      </>
    )
}
