import { Button, Card, CardContent } from '@material-ui/core'
import { BiRupee } from 'react-icons/bi';
import { FaRegHeart } from 'react-icons/fa';
import React from 'react'
import './CardBasic.css'
import { useStateValue } from '../../../StateProvider';

function CardBasic({Id, Image, Category, Name, Price, Rating, Reviews}) {

    const   [{cart, wishList}, dispatch ] = useStateValue();

    // console.log('this is in cart', cart)
    // console.log('hay this data is for wish list', wishList)

    const   AddToCart = () => {
        // dispatch item into data layer
        dispatch({
            type: 'ADD_TO_CART',
            item: {
                // id:id,
                Name:Name,
                Price:Price,
                Rating:Rating,
                Reviews:Reviews,
                Category:Category,
                Image:Image,
            },
        })
    }

    const AddToWishList =() => {
        dispatch ({
            type: 'ADD_TO_WISH_LIST',
            item: {
                Id:Id,
                Name:Name,
                Image:Image,
            },
        })
    }
    
    return (
        <div className="cardBasic">
            <Card className="cardBasic__card">
                <CardContent>
                    <div className="cardBasic__cardImgColumn">
                        <img 
                            className="cardBasic__cardImgColumnImage"
                            src={Image} 
                            alt="" 
                        />
                        <FaRegHeart 
                            onClick={AddToWishList}
                            className="cardBasic__cardImgColumnWishIcon"
                        />
                        <Button 
                        onClick={AddToCart}
                        className="cardBasic__cardImgColumnButton" 
                        variant="outlined" 
                        color="primary">
                          ADD TO CART
                        </Button>
                    </div>
                    <small className="cardBasic__cardCategory">{Category}</small>
                    <p className="cardBasic__cardName">{Name}</p>
                    <p className="cardBasic__cardPrice"><BiRupee />{Price}</p>
                    <div className="cardBasic__cardRating">
                        {Array(Rating)
                        .fill()
                        .map((_, i)=>(
                            <p>⭐</p>
                        ))}
                        <span className="cardBasic__cardReviews">({Reviews} Reviews)</span>
                    </div>
                </CardContent>
            </Card>
        </div>
    )
}

export default CardBasic
