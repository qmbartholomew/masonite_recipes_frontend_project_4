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

    return <div className='fDisplay'>
        <img src='https://cdn.discordapp.com/attachments/668856899503915047/919395465341063218/Screen_Shot_2021-12-11_at_5.09.12_PM.png' alt=''/>
        <form onSubmit={handleSubmission}>
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
                value={formData.description}
                name='description'
                placeholder='A Brief Description About Your Recipe'
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
                placeholder='Recipe Instructions (Separated by forward slashes "\")'
            />
            <input
                type='text'
                onChange={handleChange}
                value={formData.ingredients}
                name='ingredients'
                placeholder='Recipe Ingredients (Separated by forward slashes "\")'
            />
            <input
                type='text'
                onChange={handleChange}
                value={formData.author}
                name='author'
                placeholder='Recipe Author - Leave blank for Original Recipes'
            />
            <input
                type='text'
                onChange={handleChange}
                value={formData.url}
                name='url'
                placeholder='Recipe Reference URL - Leave Blank for Original Recipes'
            />
            <input id='submit' type='submit' value={buttonLabel} />
        </form>
     </div>
}

export default Form