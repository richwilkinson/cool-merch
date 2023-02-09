import { useState } from 'react'
import FormInput from '../form-input/form-input.component'
import { signInAuthUserWithEmailAndPassword, signInWithGooglePopup } from '../../utils/firebase/firebase.utils';
import './sign-in-form.styles.scss'
import Button from '../button/button.component'


const defaultFormFields = {
    email: '',
    password: '',
}

const SignInForm = () => {
    const [formFields, setFormFields] = useState(defaultFormFields);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormFields)
    }

    const signInWithGoogle = async () => {
        await signInWithGooglePopup();

    }

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const { user } = await signInAuthUserWithEmailAndPassword(email, password)
            
            resetFormFields();
        } catch(error) {
            switch(error.code) {
                case 'auth/user-not-found':
                    alert('Email is not in use.');
                    break
                case 'auth/wrong-password':
                    alert('Incorrect password.')
                    break;
                default:
                    console.log(error)
            }
            // if(error.code === 'auth/wrong-password') {
            //     alert('Incorrect Password')
            // } else if(error.code === 'auth/user-not-found') {
            //     alert('Email not found')
            // }
            // console.log(error)
        }
    }

    const handleChange = (event) => {
        const { name, value } = event.target;
        setFormFields({...formFields, [name]: value})
    }
    return (
        <div className='sign-up-container'>
            <h2>Already Have An Account?</h2>
         <span>Sign in with your email</span>
         <form onSubmit={handleSubmit}>
        
               
           
            <FormInput label='Email' type={'email'} required name='email' value={email} onChange={handleChange} />
           
               
           
            <FormInput label='Password' type={'password'} required name='password' value={password} onChange={handleChange} />
           
           <div className='buttons-container'>
            
            <Button type="submit">Sign In</Button>
            <Button type='button' buttonType='google' onClick={signInWithGoogle}>
                Google sign in
            </Button>
           
           </div>     


          </form>
         </div>

    )

}

export default SignInForm;