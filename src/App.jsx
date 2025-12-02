import { useState } from 'react'
import { Routes, Route } from 'react-router-dom'
import Home from './pages/Home'
import Categories from './pages/Categories'
import CategoryRecipe from './pages/CategoryRecipe'
import Favourites from './pages/Favourites'
import RecipeDetails from './pages/RecipeDetails'
import NotFound from './pages/NotFound'
import Navbar from './components/Navbar'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar />
      <Routes>
        <Route path='/' element={<Home />}/>
        <Route path='/categories' element={<Categories />}/>
        <Route path='/category/:name' element={<CategoryRecipe />}/>
        <Route path='/fav' element={<Favourites />}/>
        <Route path='/recipe/:id' element={<RecipeDetails />}/>
        <Route path='*' element={<NotFound />}/>
      </Routes>
    </>
  )
}

export default App
