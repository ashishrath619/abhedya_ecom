import { Button, Card, CardContent, CardMedia } from '@material-ui/core'
import React from 'react'
import './CardBackImg.css'
import { BsArrowRight } from 'react-icons/bs';

function CardBackImg({BackImg, Title, Offer, Caption, ButtonText}) {
    return (
        <div className="cardBackImg">
            <div className="CardBackImg__card">

                    <img 
                    className="CardBackImg__cardImage"
                    src={BackImg}
                    alt="" 
                    />
                    <p className="CardBackImg__cardCaption">
                        {Caption}
                    </p>
                    <p className="CardBackImg__cardTitle">
                        {Title}
                    </p>
                    <p className="CardBackImg__cardOffer">
                        {Offer}
                    </p>
                    
                    <Button className="CardBackImg__cardButton" variant="outlined">{ButtonText}<BsArrowRight/></Button>
                
            </div>
        </div>
    )
}

export default CardBackImg
