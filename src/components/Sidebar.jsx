
const Sidebar = ({ recipeItems, handleCookPreparing, cookingItems }) => {

    return (
        <div className="lg:w-2/5 p-4 border border-gray-200 rounded-xl">
            <div>
                <h2 className="text-xl font-bold text-center mb-2">Want to cook: {recipeItems.length}</h2>
                <hr />
                <table className="w-full mt-2">
                    <thead>
                        <tr>
                            <td className="font-bold"></td>
                            <td className="font-bold">Name</td>
                            <td className="font-bold">Time</td>
                            <td className="font-bold">Calories</td>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100 my-2">

                        {
                            recipeItems.map((recipeItem, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td><p className="p-2">{idx + 1}</p></td>
                                        <td className="p-2">{recipeItem.recipe_name}</td>
                                        <td className="p-2">{recipeItem.preparing_time}</td>
                                        <td className="p-2">{recipeItem.calories}</td>
                                        <td><button onClick={() => handleCookPreparing(recipeItem)} className="btn rounded-full bg-[#0BE58A]">Preparing</button></td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
            <div className="mt-8">
                <h2 className="text-xl font-bold text-center mb-2">Currently cooking: {recipeItems.length}</h2>
                <table className="w-full mt-2">
                    <thead>
                        <tr>
                            <td className="font-bold"></td>
                            <td className="font-bold">Name</td>
                            <td className="font-bold">Time</td>
                            <td className="font-bold">Calories</td>
                        </tr>
                    </thead>
                    <tbody className="bg-gray-100 my-2">

                        {
                            cookingItems.map((cookingItem, idx) => {
                                return (
                                    <tr key={idx}>
                                        <td><p className="p-2">{idx + 1}</p></td>
                                        <td className="p-2">{cookingItem.recipe_name}</td>
                                        <td className="p-2">{cookingItem.preparing_time}</td>
                                        <td className="p-2">{cookingItem.calories}</td>
                                    </tr>
                                )
                            })
                        }


                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default Sidebar;