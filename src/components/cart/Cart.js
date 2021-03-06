import classes from './Cart.module.css'
import Modal from "../ui/Modal";
import {Fragment, useContext,useState} from 'react';
import CartContext from "../../store/cart-context";
import CartItem from "./CartItem";
import Checkout from "./Checkout";

const Cart = (props) => {
    const [isCheckout, setIsCheckoOut] = useState(false);
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [didSubmit, setDidSubmit] = useState(false);

    const cartCtx = useContext(CartContext);
    const totalAmount = `$${cartCtx.totalAmount.toFixed(2)}`;
    const hasItems = cartCtx.items.length > 0;

    const addItemToCartHandler = (item) => {
        cartCtx.addItem({...item,amount:1})
    };

    const removeItemFromCartHandler = (id) => {
        cartCtx.removeItem(id);

    };

    const orderHandler = () => {
        setIsCheckoOut(true);

    };

    const submitOrderHandler = async (userData) => {
        setIsSubmitting(true);
        await fetch('https://react-my-burger-90039-default-rtdb.firebaseio.com/orders.json', {
            method:'POST',
            body:JSON.stringify({
                user:userData,
                orderedItems:cartCtx.items
            })
        });
        setIsSubmitting(false);
        setDidSubmit(true);
        cartCtx.clearCart();

    };

    const cartItems = <ul className={classes['cart-items']}>{
       cartCtx.items.map(item =>
           <CartItem
           key={item.id}
           name={item.name}
           amount={item.amount}
           price={item.price}
           onRemove={removeItemFromCartHandler.bind(null,item.id)}
           onAdd={addItemToCartHandler.bind(null,item)}


           />)
    }</ul>;

    const modalActions =  (
        <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        { hasItems && <button className={classes.button} onClick={orderHandler}>Order</button>}

    </div>);
    const cartModalContent =  (<Fragment>
        {cartItems}
        <div className={classes.total}>
            <span>Total Amount</span>
            <span>{totalAmount}</span>
        </div>
        {isCheckout && <Checkout onConfirm={submitOrderHandler} onCancel={props.onClose}/>}
        {!isCheckout && modalActions}
    </Fragment>);

    const isSubmittingModalContent = <p>Sending order data</p>

    const didSubmitModalContent = <Fragment>
        <p>Succesfully submitted order data</p>
        <div className={classes.actions}>
            <button className={classes.button} onClick={props.onClose}>Close</button>
        </div>
    </Fragment>

    return (
        <Modal onClose={props.onClose}>
            {!isSubmitting && !didSubmit && cartModalContent}
            {isSubmitting && isSubmittingModalContent}
            {didSubmit && didSubmitModalContent}
        </Modal>

    );
}

export default Cart;
