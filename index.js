import React, {lazy, Suspense, useEffect, useState} from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import About from './src/components/About'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Contact from './src/components/Contact'
import Error from './src/components/Error'
import RestrauntMenu from './src/components/RestrauntMenu'
import Shimmer from './src/components/Shimmer'
// import Grocery from './src/components/Grocery'
import UserContext from './src/utils/UserContext'

const Grocery = lazy(() => import("./src/components/Grocery"));

const AppLayout = () =>{   
    const [userName, setUserName] = useState(null)
    
    useEffect(() =>{
        //Make an API call get the authentication done
        const data = {
            name: "Anuj"
        }
        setUserName(data.name)
    },[])

    return(
        // Here we will have default value as Context value.
        <UserContext.Provider value={{loggedInUser : userName, setUserName}}>
             <div className='app'>
                <Header/>
                <Outlet/>
            </div>
        </UserContext.Provider>
    )
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [{
                path: "/",
                element: <Body/>
            },{
                path: "/about",
                element: <About/>
            },{
                path: "/contact",
                element: <Contact/>
            },{
                path: "/grocery",
                element: <Suspense fallback={<Shimmer/>}><Grocery/></Suspense>
            },{
                path: "/restraunts/:resId",
                element: <RestrauntMenu/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)