import React, {Fragment, useContext, useEffect, useState} from 'react';
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {
    const [btnIsHighlighted, setBtnIsHighlighted] = useState(false)

    const cartCtx = useContext(CartContext);
    const noOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
        return currNumber + item.amount;
    },0);

    const btnClasses = `${classes.button}  ${classes.bump}`;

    useEffect(() => {
        setBtnIsHighlighted(true);
    },[])


    return (
        <Fragment>
           <button className={btnClasses} onClick={props.onCLick}>
               <span className={classes.icon}>
                   <CartIcon></CartIcon>

               </span>
               <span > Your Cart</span>
               <span className={classes.badge}> {noOfCartItems} </span>
           </button>
        </Fragment>

    );
}

export default HeaderCartButton;
