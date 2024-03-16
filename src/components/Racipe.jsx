import { CiClock2 } from "react-icons/ci";
import { MdOutlineLocalFireDepartment } from "react-icons/md";
import PropTypes from 'prop-types';

const Racipe = ({ recipe, handleRecipeItems }) => {
    const { recipe_image, recipe_name, short_description, ingredients, preparing_time, calories } = recipe
    return (
        <div>
            <div className=" bg-base-100 rounded-xl p-4 border border-gray-200 space-y-4">
                <div>
                    <img className="rounded-xl" src={recipe_image} alt={recipe_name} />
                </div>
                <div className="space-y-2">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p>{short_description}</p>

                </div>
                <hr />
                <div>
                    <h2 className="font-bold text-xl">Ingredients: {ingredients.length}</h2>
                    <ul className="list-disc pl-8">
                        {ingredients.map((item, idx) => {
                            return <li key={idx}>{item}</li>
                        })}
                    </ul>
                </div>
                <hr />
                <div className="flex justify-between">
                    <div className="flex gap-2 items-center">
                        <CiClock2 />
                        <p>{preparing_time}</p>
                    </div>
                    <div className="flex gap-2 items-center">
                        <MdOutlineLocalFireDepartment />
                        <p>{calories}</p>
                    </div>
                </div>
                <button onClick={() => handleRecipeItems(recipe)} className="btn rounded-full bg-[#0BE58A]">Want to Cook</button>
            </div>
        </div>
    );
};

Racipe.propTypes ={
    recipe: PropTypes.object,
    handleRecipeItems: PropTypes.func
}

export default Racipe;