import { Link, useParams } from "react-router-dom"

const SingleRecipe = ({recipes, edit, deleteRecipe}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const recipe = recipes.find((r) => r.id === id)
    const instructions = recipe?.instructions.split(',')
    const ingredients = recipe?.ingredients.split(',')

    return <div className='sDisplay'>
        <div className='modal-bg'>
            <div className='modalBox'>
                <h1>Are you sure want you delete this recipe?</h1>
                <h3>{recipe?.name}</h3>
                <img src={`${recipe?.image}`} />
                <div className='modalButtons'>
                    <button id='modalHide'>Cancel</button>
                    <button onClick={() => deleteRecipe(recipe)}>Delete</button>
                </div>
            </div>
        </div>
        <div className='singleRecipe'>
            <div className='cardLeft'>
                <h1>{recipe?.name}</h1>
                <img src={`${recipe?.image}`} />
            </div>
            <div className='vr' />
            <div className='cardRight'>
                <div className='rInfo'>
                    <div className='rInstructions'>
                        <h3>Recipe Instructions</h3>
                        <ol>
                            {instructions?.map((i) => {
                                return <li>{i}</li>
                            })}
                        </ol>
                    </div>
                    <div className='rIngredients'>
                        <h3>Recipe Ingredients</h3>
                        <ul>
                            {ingredients?.map((i) => {
                                return <li>{i}</li>
                            })}
                        </ul>
                    </div>
                </div>
                {recipe?.url == "Original Recipe" ?
                <p className='reference'>Original Recipe</p> :
                <p><a className='reference' href={recipe?.url}>{recipe?.url}</a></p>}
                <div className='rButtons'>
                    <button onClick={() => edit(recipe)}>Edit</button>
                    <button id='modalShow'>Delete</button>
                </div>
            </div>
        </div>     
    </div>
}

export default SingleRecipe