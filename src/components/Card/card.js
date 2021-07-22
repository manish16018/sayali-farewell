import React, { useState }from 'react';
import './styles.css';
import car from '../../images/profile.png';
// ... component class

const Card = ( {data} ) => {

    const [name, setName] = useState("Guess who !!!");
    const [img, setImg] = useState(car);

    const setValues = () => {
        setName(data.Name)
        setImg(data.imgUrl)
    }
        return (
            <div className="flip-card" height={200}>
                <div className="flip-card-inner">
                    <div className="flip-card-front" height={200}>
                        <img src={img} alt="Avatar" />
                        <h1>{name}</h1>
                    </div>
                    <div className="flip-card-back">
                        <h2> My thoughts about You !! </h2>
                        <p className="desc" dangerouslySetInnerHTML={{ __html: data.Comment }}></p>
                        <div className="socialLinks">
                            <button onClick = {setValues}>
                                Find Out 
                            </button>
                        </div>
                        
                    </div>
                </div>
            </div>
    )
}
export default Card;