import DUMMY_MEALS from "./DummyMeals";
import classes from './AvailableMeals.module.css'


const AvailableMeals = () => {
    const mealList = DUMMY_MEALS.map( meal => <li>{meal.name}</li> );
    return (
        <section className={classes.meals}>
            <ul>
                {mealList}
            </ul>
        </section>

    );
}

export default AvailableMeals;

