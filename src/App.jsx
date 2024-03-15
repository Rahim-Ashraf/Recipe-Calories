import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Recipes from "./components/Recipes"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  const notify = () => toast.warn("You can't cook twice");
  return (
    <>
      <Navbar />
      <Banner />
      <Recipes notify={notify} />
      <ToastContainer />

    </>
  )
}

export default App
