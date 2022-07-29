import React from 'react'
import { AiFillStar,AiOutlineStar } from 'react-icons/ai';
import { FaStarHalfAlt} from 'react-icons/fa';

const Rating = ({value,text}) => {
    return (
        <div className="rating">
            <span>
                <AiFillStar id="rate"  className={value>=1?'show':'hide'}/>
                <FaStarHalfAlt id='halfstar' className={value<1?value>=.5?'show':'hide':'hide'}/>
                <AiOutlineStar id="rate"  className={value<.5?'show':'hide'}/>
            </span>

            <span>
                <AiFillStar id="rate" className={value>=2?'show':'hide'}/>
                <FaStarHalfAlt id='halfstar' className={value<2?value>=1.5?'show':'hide':'hide'}/>
                <AiOutlineStar id="rate"  className={value<1.5?'show':'hide'}/>
            </span>

            <span>
            <AiFillStar id="rate"  className={value>=3?'show':'hide'}/>
                <FaStarHalfAlt id='halfstar' className={value<3?value>=2.5?'show':'hide':'hide'}/>
                <AiOutlineStar id="rate"  className={value<2.5?'show':'hide'}/>
            </span>

            <span>
            <AiFillStar id="rate"  className={value>=4?'show':'hide'}/>
                <FaStarHalfAlt id='halfstar' className={value>=3.5?value<4?'show':'hide':'hide'}/>
                <AiOutlineStar id="rate"  className={value<=3?'show':'hide'}/>
            </span>

            <span>
                <AiFillStar id="rate"  className={value>=5?'show':'hide'}/>
                <FaStarHalfAlt id='halfstar' className={value>=4.5?value<5?'show':'hide':'hide'}/>
                <AiOutlineStar id="rate"  className={value<=4?'show':'hide'}/>
            </span>

            <span className="numrev">
                {text && text}
            </span>
            
        </div>
    )
}

export default Rating
