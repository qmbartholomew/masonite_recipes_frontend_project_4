import { Link } from "react-router-dom"


const Recipe = ({recipe}) => {
    const instructions = recipe.instructions.split(',')
    const ingredients = recipe.ingredients.split(',')
    return (
        <div className='recipeCard'>
            <Link to={`/recipes/${recipe.id}`}>
                <h1>{recipe.name}</h1>
            </Link>
            <img src={`${recipe.image}`} />
            <div className='recipeInfo'>
                <h3>Recipe Instructions</h3>
                <ol>
                    {instructions.map((i) => {
                        return <li>{i}</li>
                    })}
                </ol>
                <h3>Recipe Ingredients</h3>
                <ul>
                    {ingredients.map((i) => {
                        return <li>{i}</li>
                    })}
                </ul>
                {recipe.url == 'Original Recipe' ?
                <p className='reference'>Original Recipe</p> :
                <a className='reference'><p>{recipe.url}</p></a>}
            </div>
        </div>
    )
}

export default Recipe