import { CiSearch } from "react-icons/ci";
import { CgProfile } from "react-icons/cg";

const Navbar = () => {
    return (
        <div className="md:flex justify-between items-center my-4">
            <div>
                <h1 className="font-bold text-3xl">Recipe Calories</h1>
            </div>
            <div>
                <ul className="flex gap-4">
                    <li>Home</li>
                    <li>Recipes</li>
                    <li>About</li>
                    <li>Search</li>
                </ul>
            </div>
            <div className="flex gap-4">
                <div className="flex bg-gray-200 px-4 py-2 rounded-full items-center">
                    <CiSearch style={{
                        fontSize: "20px"
                    }} />
                    <input className="bg-gray-200 w-full" type="text" name="" id="" placeholder="Search" />
                </div>
                <CgProfile style={{
                    fontSize: "40px",
                    backgroundColor: "#0BE58A",
                    padding: "5px",
                    borderRadius: "50%"

                }} />
            </div>
        </div>
    );
};

export default Navbar;