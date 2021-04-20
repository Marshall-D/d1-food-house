import DUMMY_MEALS from "./DummyMeals";
import classes from './AvailableMeals.module.css'
import Card from "../ui/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect} from 'react';

const AvailableMeals = () => {
    useEffect(() => {
        fetch('https://react-my-burger-90039-default-rtdb.firebaseio.com/meals.json');
    },[]);

    const mealList = DUMMY_MEALS.map( meal =>
        <MealItem
            key={meal.id}
            id={meal.id}
            name={meal.name}
            description={meal.description}
            price={meal.price}
        /> );


    return (
        <section className={classes.meals}>
            <Card>
                <ul>
                    {mealList}
                </ul>
            </Card>

        </section>

    );
}

export default AvailableMeals;

