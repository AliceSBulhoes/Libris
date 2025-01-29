import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Erros from './routes/error/Erros.jsx'
import Home from './routes/Home.jsx'
import Books from './routes/Books.jsx'
import Login from './routes/Login.jsx'

const router = createBrowserRouter([{
  element: <App/>,
  path: '/',
  errorElement: <Erros/>,
  children:[
    {element: <Home/>, path: '/' },
    {element: <Books/>, path: '/books'},
    {element: <Login/>, path: '/login'}
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
