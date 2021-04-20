import classes from './Checkout.module.css';
import {useRef,useState} from 'react';


const isEmpty = (value) => value.trim() === "" ;
const isNotFiveChar = value => value.trim().length !== 5;


const Checkout = (props) => {
    const [formInputsValidity, setFormInputsValidity] = useState({
        name: true,
        street:true,
        city:true,
        postalCode:true
    });

    const nameInputRef = useRef()
    const streetInputRef = useRef()
    const postalInputRef = useRef()
    const cityInputRef = useRef()

    const confirmHandler = (event) => {
        event.preventDefault();

        const enteredName = nameInputRef.current.value;
        const enteredStreet = streetInputRef.current.value;
        const enteredPostal = postalInputRef.current.value;
        const enteredCity = cityInputRef.current.value;

        const enteredNameIsValid = !isEmpty(enteredName);
        const enteredStreetIsValid = !isEmpty(enteredStreet);
        const enteredPostalIsValid = !isNotFiveChar(enteredPostal);
        const enteredCityIsValid = !isEmpty(enteredCity);

        setFormInputsValidity({
            name: enteredNameIsValid,
            street:enteredStreetIsValid,
            city:enteredCityIsValid,
            postalCode:enteredPostalIsValid

        });

        const formIsValid = enteredNameIsValid && enteredCityIsValid && enteredPostalIsValid && enteredStreetIsValid;

        if (!formIsValid) {
            return;

        }
    };

    return (
        <form className={classes.form} onSubmit={confirmHandler}>
            <div className={`${classes.control} ${formInputsValidity.name ? '' : classes.invalid}`}>
                <label htmlFor="name"> Your name</label>
                <input type="text" id="name" ref={nameInputRef}/>
                {!formInputsValidity.name && <p>please enter a valid name</p>}
            </div>

            <div className={`${classes.control} ${formInputsValidity.street ? '' : classes.invalid}`}>
                <label htmlFor="street"> Your Address</label>
                <input type="text" id="street" ref={streetInputRef}/>
                {!formInputsValidity.street && <p>please enter a valid street</p>}
            </div>

            <div className={`${classes.control} ${formInputsValidity.postalCode ? '' : classes.invalid}`}>
                <label htmlFor="postalCode"> Postal Code</label>
                <input type="text" id="postalCode" ref={postalInputRef}/>
                 {!formInputsValidity.postalCode && <p>please enter a valid postal code (5 characters long)</p>}
             </div>

            <div className={`${classes.control} ${formInputsValidity.city ? '' : classes.invalid}`}>
                <label htmlFor="city"> City</label>
                <input type="text" id="city" ref={cityInputRef}/>
                {!formInputsValidity.city && <p>please enter a valid city</p>}
            </div>

            <div className={classes.actions}>
                <button type={"button"} onClick={props.onCancel}>Cancel</button>
                <button className={classes.submit}>Confirm</button>
            </div>

        </form>

    );
}

export default Checkout;
