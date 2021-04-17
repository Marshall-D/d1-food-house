import React, {Fragment, useContext} from 'react';
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.module.css'
import CartContext from "../../store/cart-context";


const HeaderCartButton = (props) => {

    const cartCtx = useContext(CartContext);
    const noOfCartItems = cartCtx.items.reduce((currNumber, item)=>{
        return currNumber + item.amount;
    },0)

    return (
        <Fragment>
           <button className={classes.button} onClick={props.onCLick}>
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
