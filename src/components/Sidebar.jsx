
const Sidebar = ({ recipeItems }) => {
    return (
        <div className="lg:w-2/5 p-4 border border-gray-200 rounded-xl">
            <h2 className="text-xl font-bold text-center mb-2">Want to cook: {recipeItems.length}</h2>
            <hr />
            <div>
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
                                        <td className="p-2"></td>
                                        <td className="p-2"></td>
                                        <td><button className="btn rounded-full bg-[#0BE58A]">Preparing</button></td>
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