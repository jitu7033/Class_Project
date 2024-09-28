
import './App.css'
import Header from './Compontents/Header'
import ProductList from './Compontents/home/ProductList'
import {createBrowserRouter, RouterProvider} from "react-router-dom"
import Signup from './Compontents/signup/Signup'


function App() {

    const router = createBrowserRouter([
        {
        path : "/",
        element: <ProductList></ProductList>
    },
    {
        path:"/signup",
        element : <Signup></Signup>
    }
])
 return (
 <>

<header>
    <Header/>
</header>

<RouterProvider router = {router}>
    <main>
        <ProductList/>
    </main>
</RouterProvider>


 
 </>
 );
}
export default App
