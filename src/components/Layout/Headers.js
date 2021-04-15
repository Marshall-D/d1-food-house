import React, {Fragment} from 'react';
import classes from './Headers.module.css'
import mealsImg from '../../assets/meals.jpg';
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {

    return(
        <Fragment>

        <header className={classes.header}>
            <h1>D1 FOOD HOUSE</h1>
            <HeaderCartButton/>
        </header>
        <div className={classes['main-image']}>
            <img src={mealsImg} alt=" A Table of Delicious Meals"   />
        </div>

    </Fragment>
    );
};

export default Header;
