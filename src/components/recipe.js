import { Link } from "react-router-dom"


const Recipe = ({recipe}) => {
    return (
        <div className='recipeCard'>
            <Link to={`/recipes/${recipe.id}`}>
                <h3>{recipe.name}</h3>
                <img src={`${recipe.image}`} />
                <p>{recipe.description}</p>
            </Link>
        </div>
    )
}

export default Recipe