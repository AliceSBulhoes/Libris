// Importando dependencias
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// Importando CSS
import './index.css'
// Importando componentes
import App from './App.jsx'
import Erros from './routes/error/Erros.jsx'
import Home from './routes/Home.jsx'
import Books from './routes/Books.jsx'
import Login from './routes/Login.jsx'

// Criando a variável router
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
