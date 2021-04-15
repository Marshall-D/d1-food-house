import React from "react";
import classes from './MealsSummary.module.css'

const MealsSummary = () => {

    return (
        <section className={classes.summary}>
                <h2>Delicious Food Delivered To You</h2>
                <p>
                    Choose Your Favorite Meal From Our Broad Selection of Available Meals &
                    Enjoy a Delicious Meal At Home.
                </p>
                <p>
                    All Our Meals Are Cooked With High Quality Ingredients, Just In Time & of Course
                    by Experienced Chefs!
                </p>
        </section>
    );
}

export default MealsSummary;
