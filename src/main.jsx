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
import MainPage from './routes/MainPage.jsx'
import Sobre from './routes/Sobre.jsx'
// Componentes do MainPage
import Bookshelf from './routes/mainpage/Bookshelf.jsx'
import Bookmarks from './routes/mainpage/Bookmarks.jsx'
import Login from './routes/mainpage/Login.jsx'
import Profile from './routes/mainpage/Profile.jsx'
import SignUp from './routes/mainpage/SignUp.jsx'

// Criando a variável router
const router = createBrowserRouter([{
  element: <App/>,
  path: '/',
  errorElement: <Erros/>,
  children:[
    {element: <Home/>, path: '/' },
    {element: <Sobre/>, path: '/sobre'},
    {element: <MainPage/>, 
      path: '/libris',
      children: [
        {element: <Bookshelf/>, path: '/libris'},
        {element: <Bookmarks/>, path: '/libris/bookmarks'},
        {element: <Profile/>, path: '/libris/profile'},
        {element: <Login/>, path: '/libris/login'},
        {element: <SignUp/>, path: '/libris/signup'}
      ]
    }
  ]
}])

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <RouterProvider router={router}/>
  </StrictMode>,
)
