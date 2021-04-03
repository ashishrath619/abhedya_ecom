import React from 'react'
import {Card , CardContent, Typography } from '@material-ui/core' ;
import './CardSimple.css'

function CardSimple({Image, Title}) {
    return (
        <div className="cardsimple">
            <div >
                <Card className="cardsimplle__card">
                    <CardContent>
                        <img 
                        className="cardsimplle__cardImage"
                        src={Image} 
                        alt="" 
                        />
                        <h5 className="cardsimplle__cardText">{Title}</h5>
                    </CardContent>
                </Card>
            </div>
        </div>
    )
}

export default CardSimple
