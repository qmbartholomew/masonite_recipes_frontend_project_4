import Recipe from "../components/recipe"


const AllRecipes = (props) => {
    return <div className='iDisplay'>
        {props.recipes.map((r) => {
        return <Recipe key={r.id} recipe={r} />
        })}
    </div>
}

export default AllRecipes