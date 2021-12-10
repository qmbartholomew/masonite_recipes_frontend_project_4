import { useState } from "react"
import { useNavigate } from "react-router"

const Form = ({initialRecipe, handleSubmit, buttonLabel}) => {
    const navigate = useNavigate()

    /*          FORM STATE          */
    const [formData, setFormData] = useState(initialRecipe)

    /*          FUNCTIONS           */
    const handleChange = (e) => {
        setFormData({...formData, [e.target.name]: e.target.value })
    }

    const handleSubmission = (e) => {
        e.preventDefault()
        handleSubmit(formData)
        navigate('/')
    }

    return <form onSubmit={handleSubmission}>
        <input
            type='text'
            onChange={handleChange}
            value={formData.name}
            name='name'
            placeholder='Recipe Name'
        />
        <input
            type='text'
            onChange={handleChange}
            value={formData.image}
            name='image'
            placeholder='Link to Recipe Image'
        />
        <input
            type='text'
            onChange={handleChange}
            value={formData.instructions}
            name='instructions'
            placeholder='Recipe Instructions (Separated by commas)'
        />
        <input
            type='text'
            onChange={handleChange}
            value={formData.ingredients}
            name='ingredients'
            placeholder='Recipe Ingredients (Separated by commas)'
        />
        <input
            type='text'
            onChange={handleChange}
            value={formData.url}
            name='url'
            placeholder='Recipe Reference URL - Leave Blank for Original Recipes'
        />
        <input type='submit' value={buttonLabel} />
    </form>
}

export default Form