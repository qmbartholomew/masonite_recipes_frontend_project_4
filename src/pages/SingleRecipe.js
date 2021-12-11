import { Link, useParams } from "react-router-dom"

const SingleRecipe = ({recipes, edit, deleteRecipe}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const recipe = recipes.find((r) => r.id === id)
    const instructions = recipe?.instructions.split(',')
    const ingredients = recipe?.ingredients.split(',')

    return <div>
        <h1>{recipe?.name}</h1>
        <img src={`${recipe?.image}`} />
        <div className='recipeInfo'>
            <h3>Recipe Instructions</h3>
            <ol>
                {instructions?.map((i) => {
                    return <li>{i}</li>
                })}
            </ol>
            <h3>Recipe Ingredients</h3>
            <ul>
                {ingredients?.map((i) => {
                    return <li>{i}</li>
                })}
            </ul>
            {recipe?.url == "Original Recipe" ?
            <p className='reference'>Original Recipe</p> :
            <a className='reference'><p>{recipe?.url}</p></a>}
            <button onClick={() => deleteRecipe(recipe)}>Delete</button>
            <button onClick={() => edit(recipe)}>Edit</button>
            <Link to='/'>
                <button>CookBook Home</button>
            </Link>
    </div>
</div>
}

export default SingleRecipe