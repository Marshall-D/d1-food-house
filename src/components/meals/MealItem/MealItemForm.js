import classes from './MealItemForm.module.css'
import Input from "../../ui/Input";
import {useRef, useState} from 'react';

const MealItemForm = (props) => {
    const amountInputRef = useRef()
    const [amountIsValid, setAmountIsValid] = useState(true)

    function onSubmitHandler(event) {
        event.preventDefault();

        const enteredAmount = amountInputRef.current.value;
        const enteredAmountNumber = +enteredAmount;

        if (enteredAmount.trim().length === 0 || enteredAmountNumber < 1 || enteredAmountNumber > 5){
            setAmountIsValid(false)

            return ;

        };
        props.onAddToCart(enteredAmountNumber);


    };


    return (
        <form className={classes.form} onSubmit={onSubmitHandler}>
            <Input
                label="Amount"
                ref={amountInputRef}

                   input={{
                       id: 'amount',
                       type: 'number',
                       min: '1',
                       max: '5',
                       step: '1',
                       defaultValue: '1'

}} />
            <button>+ Add</button>
            { !amountIsValid && <p>error!! Enter Valid Number (1-5)</p>}
        </form>

    );
}

export default MealItemForm;
