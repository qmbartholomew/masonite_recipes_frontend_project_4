import Recipe from "../components/recipe"


const AllRecipes = (props) => {
    return props.recipes.map((r) => {
        return <Recipe key={r.id} recipe={r} />
    })
}

export default AllRecipes