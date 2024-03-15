import { useEffect, useState } from "react";

const Recipes = () => {
    const [recipes, setRecipes] = useState([])
    useEffect(() => {
        fetch("data.json")
            .then(res => res.json())
            .then(data => setRecipes(data))
    }, [])
    return (
        <div>
            <div>
                <h1 className="text-4xl font-bold text-center mb-4">Our Recipes</h1>
                <p className="text-center">Indulge in culinary adventures with our handcrafted recipes, meticulously curated to<br />
                    tantalize your taste buds and inspire your inner chef.
                </p>
            </div>
            {recipes.map(recipe => {
                console.log(recipe)
                return <h1 key={recipe.recipe_id}>hello</h1>
            })}
        </div>
    );
};

export default Recipes;