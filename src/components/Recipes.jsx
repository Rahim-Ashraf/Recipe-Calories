import { useEffect, useState } from "react";
import Racipe from "./Racipe";
import Sidebar from "./Sidebar";
import PropTypes from 'prop-types';

const Recipes = ({ notify }) => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    const [recipeItems, setRecipeItems] = useState([])
    let [itemsIncluded, setItemsIncluded] = useState([])
    const handleRecipeItems = item => {
        if (itemsIncluded.includes(item)) {
            notify()
        } else {
            setItemsIncluded([...itemsIncluded, item])
        }
        if (!itemsIncluded.includes(item)) {
            setRecipeItems([...recipeItems, item])
        }

    }
    const [cookingItems, setCookingItems] = useState([])
    const [totalTime, setTotalTime] = useState(0)
    const [totalCalories, setTotalCalories] = useState(0)

    const handleCookPreparing = (recipeItem) => {
        const newRecipeItem = recipeItems.filter(item => recipeItem !== item)
        setRecipeItems(newRecipeItem)
        setCookingItems([...cookingItems, recipeItem])
        const time = parseFloat(recipeItem.preparing_time)
        const calories = parseFloat(recipeItem.calories)
        setTotalTime(totalTime + time)
        setTotalCalories(totalCalories + calories)
    }


    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mb-4">Our Recipes</h1>
                <p className="text-center">Indulge in culinary adventures with our handcrafted recipes, meticulously curated to<br />
                    tantalize your taste buds and inspire your inner chef.
                </p>
            </div>
            <div className="lg:flex gap-8 my-8">
                <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recipes.map((recipe, idx) => {
                        return <Racipe key={idx} recipe={recipe} handleRecipeItems={handleRecipeItems} />
                    })}
                </div>
                <Sidebar recipeItems={recipeItems}
                    handleCookPreparing={handleCookPreparing}
                    cookingItems={cookingItems}
                    totalTime={totalTime}
                    totalCalories={totalCalories}
                />
            </div>
        </div>
    );
};

Recipes.propTypes ={
    notify: PropTypes.func.isRequired
}

export default Recipes;