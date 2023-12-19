import { Link } from "react-router-dom"


const Recipe = ({recipe}) => {
    return (
        <div className='recipeCard'>
            <Link to={`/recipes/${recipe.id}`}>
                <div className='recipeCardTitle'>{recipe.name}</div>
                <img src={`${recipe.image}`} alt={recipe.name}/>
                <p>{recipe.description}</p>
            </Link>
        </div>
    )
}

export default Recipe