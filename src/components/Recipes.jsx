import { useEffect, useState } from "react";
import Racipe from "./Racipe";
import Sidebar from "./Sidebar";

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
            <div className="flex gap-8 my-8">
                <div className="lg:w-3/5 grid grid-cols-1 lg:grid-cols-2 gap-6">
                    {recipes.map((recipe, idx) => {
                        return <Racipe key={idx} recipe={recipe} />
                    })}
                </div>
                <Sidebar />
            </div>
        </div>
    );
};

export default Recipes;