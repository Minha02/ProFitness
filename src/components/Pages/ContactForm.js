import React,{useState, useEffect} from 'react'
import './ContactForm.css'

const ContactForm = () => {
    const [formData, setFormData] = useState({name: '',email:'',message: ''});
    const [errors,setErrors] = useState({});
    const [submitted,setSubmitted]= useState(false);

    useEffect(() => {
        if(submitted){
            console.log('Form submitted', formData);
            setSubmitted(false);
        }
    },[submitted, formData]);

    const validate = () => {
        const newErrors = {};
        if(!formData.name ) newErrors.name = 'Name is required';
        if(!formData.email){
            newErrors.email = 'Email is required';
        } else if (!/\S+@\S+\.\S+/.test(formData.email)){
            newErrors.email = 'Email address is invalid';
        }
        if(!formData.message) newErrors.message = 'Message is required';
        return newErrors;
    };

    const handleChange = (event) => {
        const {name,value} = event.target;
        setFormData((prevData) => ({ ...prevData, [name]: value}));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        const newErrors = validate();
        if(Object.keys(newErrors).length === 0){
            setSubmitted(true);
        } else{
            setErrors(newErrors);
        }
    };

    return (
        <div className='container'>
        <form onSubmit={handleSubmit} className='contactform'>
            <br></br>
            <div className='name'>
                <label className='lab'>Name  :</label>
                <input type='text' name='name' value={formData.name} onChange={handleChange} />
                {errors.name && <span className='error'>{errors.name}</span>}
            </div>
            <br></br><br/>
            <div className='email'>
                <label className='lab'>Email  :</label>
                <input type='text' name='email' value={formData.email} onChange={handleChange} />
                {errors.email && <span className='error'>{errors.email}</span>}
            </div>
            <br></br><br/>
            <div className='message'>
                <label className='lab'>Message  :</label>
                <textarea name='message' value={formData.message} onChange={handleChange}></textarea>
                {errors.message && <span className='error'>{errors.message}</span>} 
            </div>
            <br></br><br/>
            <div className='submit'>
            <button type='submit'className='submit-button'>Submit</button>
            {submitted && <span className='success'>Form submitted successfully!</span>}
            </div>
            <br></br>
        </form>
        </div>
    )
    }

export default ContactForm
