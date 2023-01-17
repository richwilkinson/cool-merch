import { signInWithGooglePopup, createUserDocumentFromAuth } from '../../utils/firebase/firebase.utils'
const Signin = () => {
    const logGoogleUser = async () => {
        const { user } = await signInWithGooglePopup();
        const userDocRef = await createUserDocumentFromAuth(user)
    }
    return (
        <div>
            <h1>
                Sign In Here
            </h1>
            <button onClick={logGoogleUser}>
                Sign-in with Google
            </button>
        </div>
    );
};


export default Signin;