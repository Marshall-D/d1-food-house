import DUMMY_MEALS from "./DummyMeals";
import classes from './AvailableMeals.module.css'
import Card from "../ui/Card";
import MealItem from "./MealItem/MealItem";
import {useEffect,useState} from 'react';

const AvailableMeals = () => {
    const [meals,setMeals] = useState([])
    useEffect(() => {
        const fetchMeals = async () => {
            const response = await fetch('https://react-my-burger-90039-default-rtdb.firebaseio.com/meals.json');
            const responseData = await response.json();

            const loadedMeals = [];

            for (const key in responseData) {
                loadedMeals.push({
                    id:key,
                    name: responseData[key].name,
                    description:responseData[key].description,
                    price:responseData[key].price
                });
            };
            setMeals(loadedMeals);


        };
        fetchMeals();


    },[]);

    const mealList = meals.map( meal =>
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

