import * as petService from '../../services/PetService'
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react';
import AuthContext from '../../contexts/AuthContext';

const CreatePage = () => {  
    const navigate = useNavigate()
    const { userInfo} = useContext(AuthContext)

    const onPetCreate = (e) => {
        e.preventDefault();
            const formData = new FormData(e.currentTarget);

            let name =  formData.get('name');
            let description = formData.get('description');
            let imageUrl = formData.get('imageUrl');
            let type = formData.get('type');

            petService.create({
                name,
                description,
                type,
                imageUrl,
            }, userInfo.accessToken)
            .then(result => {
                navigate('/dashboard')
            })
        }
    
    return ( 
    <section id="create-page" className="create">
    <form id="create-form" onSubmit={onPetCreate} action="" method="POST">
        <fieldset>
            <legend>Add new Pet</legend>
            <p className="field">
                <label htmlFor="name">Name</label>
                <span className="input">
                    <input type="text" name="name" id="name" placeholder="Name"/>
                </span>
            </p>
            <p className="field">
                <label htmlFor="description">Description</label>
                <span className="input">
                    <textarea name="description" id="description" placeholder="Description"></textarea>
                </span>
            </p>
            <p className="field">
                <label htmlFor="image">Image</label>
                <span className="input">
                    <input type="text" name="imageUrl" id="image" placeholder="Image" />
                </span>
            </p>

            <p className="field">
                <label htmlFor="type">Type</label>
                <span className="input">
                    <select id="type" name="type" >
                       <option value="cats">cats</option>
                       <option value="dogs">dogs</option>
                       <option value="rats">rats</option>

                    </select>
                </span>
            </p>
            <input className="button submit" type="submit" value="Add Pet" />
        </fieldset>
        </form>
    </section>
    )
    }

export default CreatePage