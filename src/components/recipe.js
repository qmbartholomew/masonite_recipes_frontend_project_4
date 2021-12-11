import { Link } from "react-router-dom"


const Recipe = ({recipe}) => {
    const instructions = recipe.instructions.split(',')
    const ingredients = recipe.ingredients.split(',')
    return (
        <div className='recipeCard'>
            <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.name}</h3>
            </Link>
            <img src={`${recipe.image}`} />
            {recipe.url == 'Original Recipe' ?
            <p className='reference'>Original Recipe</p> :
            <a className='reference' href={recipe.url} target='_blank'><p>{recipe.url}</p></a>}
        </div>
    )
}

export default Recipe