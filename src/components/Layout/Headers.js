import React, {Fragment} from 'react';
import classes from './Headers.module.css'
import mealsImg from '../../assets/meals.jpg';

const Header = (props) => {

    return(
        <Fragment>

        <header className={classes.header}>
            <h1>D1 FOOD HOUSE</h1>
            <button>Cart</button>

        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt=" A Table of Delicious Meals"   />
        </div>

    </Fragment>
    );
};

export default Header;
