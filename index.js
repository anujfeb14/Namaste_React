import React from 'react'
import ReactDOM from 'react-dom/client'
import Header from './src/components/Header'
import Body from './src/components/Body'
import About from './src/components/About'
import { createBrowserRouter, Outlet, RouterProvider } from 'react-router-dom'
import Contact from './src/components/Contact'
import Error from './src/components/Error'
import RestrauntMenu from './src/components/RestrauntMenu'

const AppLayout = () =>{
    return(
        <div className='app'>
            <Header/>
            <Outlet/>
        </div>
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
                path: "/restraunts/:resId",
                element: <RestrauntMenu/>
            }
        ],
        errorElement: <Error/>
    }
])

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>)