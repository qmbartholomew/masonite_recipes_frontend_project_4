import { Link, useParams } from "react-router-dom"

const SingleRecipe = ({recipes, edit, deleteRecipe, modalShow, modalHide}) => {
    const params = useParams()
    const id = parseInt(params.id)
    const recipe = recipes.find((r) => r.id === id)
    const instructions = recipe?.instructions.split('\\')
    const ingredients = recipe?.ingredients.split('\\')

    return <div className='sDisplay'>
        <div className='modal-bg' onClick={modalHide}>
            <div className='modalBox'>
                <h2>Are you sure want you delete this recipe?</h2>
                <h3>{recipe?.name}</h3>
                <img src={`${recipe?.image}`} alt={recipe.name}/>
                <div className='modalButtons'>
                    <button onClick={modalHide}>Cancel</button>
                    <button onClick={() => deleteRecipe(recipe)}>Delete</button>
                </div>
            </div>
        </div>
        <div className='singleRecipe'>
            <div className='cardLeft'>
                <div className='cardLeftTitle'>{recipe?.name}</div>
                <img src={`${recipe?.image}`} alt={recipe.name}/>
            </div>
            <div className='vr' />
            <div className='cardRight'>
                <div className='rInfo'>
                    <div className='rInstructions'>
                        <div className='rInstructionsTitle'>Recipe Instructions</div>
                        <ol>
                            {instructions?.map((i) => {
                                return <li>{i}</li>
                            })}
                        </ol>
                    </div>
                    <div className='rIngredients'>
                        <div className='rIngredientsTitle'>Recipe Ingredients</div>
                        <ul>
                            {ingredients?.map((i) => {
                                return <li>{i}</li>
                            })}
                        </ul>
                    </div>
                </div>
                {recipe?.url === "" ?
                <p className='reference'>Original Recipe</p> :
                <p>Recipe By: <a className='reference' href={recipe?.url} target='_blank' rel="noreferrer">{recipe?.author}</a></p>}
                <div className='rButtons'>
                    <button onClick={() => edit(recipe)}>Edit</button>
                    <button onClick={modalShow}>Delete</button>
                </div>
            </div>
        </div>     
    </div>
}

export default SingleRecipe