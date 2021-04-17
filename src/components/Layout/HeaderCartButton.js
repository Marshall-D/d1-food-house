import React, {Fragment} from 'react';
import CartIcon from "../cart/CartIcon";
import classes from './HeaderCartButton.module.css'

const HeaderCartButton = (props) => {

    return (
        <Fragment>
           <button className={classes.button} onClick={props.onCLick}>
               <span className={classes.icon}>
                   <CartIcon></CartIcon>

               </span>
               <span > Your Cart</span>
               <span className={classes.badge}> 3 </span>
           </button>
        </Fragment>

    );
}

export default HeaderCartButton;
