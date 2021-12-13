import './styles.css';
import {useState, useEffect} from 'react'
import {Route, Routes, Link, useNavigate} from 'react-router-dom'
import $ from 'jquery'


/*      COMPONENTES     */
import AllRecipes from './pages/AllRecipes';
import SingleRecipe from './pages/SingleRecipe';
import Form from './pages/Form';

function App() {
  /*      STATE AND VARIABLES     */
  const URL = 'https://qb-cookbook-playground.herokuapp.com/recipes/'
  const navigate = useNavigate()
  const [recipes, setRecipes] = useState([])
  const nullRecipe = {
    name: '',
    description: '',
    image: '',
    instructions: '',
    ingredients: '',
    author: '',
    url: ''
  }
  const [targetRecipe, setTargetRecipe] = useState(nullRecipe)


  /*      FUNCTIONS     */
  const getRecipes = async () => {
    const response = await fetch(URL)
    const data = await response.json()
    setRecipes(data)
  }

  const addRecipes = async (newRecipe) => {
    await fetch(URL, {
      method: 'post',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newRecipe)
    })
    console.log(newRecipe)
    getRecipes()
  }

  const getTargetRecipe = (recipe) => {
    setTargetRecipe(recipe)
    navigate('/edit')
  }

  const updateRecipe = async (recipe) => {
    await fetch(URL + recipe.id, {
      method: 'put',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(recipe)
    })
    getRecipes()
  }

  const deleteRecipe = async (recipe) => {
    await fetch(URL + recipe.id, {
      method: 'delete'
    })
    getRecipes()
    navigate('/')
  }

  const modalShow = () => {
      $('.modal-bg').css('display', 'block')
  }
  const modalHide = () => {
    $('.modal-bg').css('display', 'none')
}

  /*      USEEFFECT     */
  useEffect(() => {
    getRecipes()
  }, [])

  

  return (
    <div className="App">
      <div className='navbar'>
        <div className='navTitle'>Masonite Cookbook</div>
        <div className='navLinks'>
          <Link to="/new"><button>Add New Recipe</button></Link>
          <Link to="/"><button>Cookbook Home</button></Link>
        </div>
      </div>
      <div className='display'>
        <Routes>
          <Route path='/' element={<AllRecipes recipes={recipes} />} />
          <Route path='/recipes/:id' element={<SingleRecipe
          recipes={recipes}
          edit={getTargetRecipe}
          deleteRecipe={deleteRecipe}
          modalShow={modalShow}
          modalHide={modalHide}
            />} />
          <Route path='/new' element={<Form
            initialRecipe={nullRecipe}
            handleSubmit={addRecipes}
            buttonLabel='Create Recipe'
            />} />
          <Route path='/edit' element={<Form
          initialRecipe={targetRecipe}
          handleSubmit={updateRecipe}
          buttonLabel='Update Recipe'
          />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
