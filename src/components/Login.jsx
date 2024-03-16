import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import swal from 'sweetalert';
import { AuthContext } from "../providers/AuthProvider";

const Login = () => {
    const [logInError, setLogInError] = useState(null);
    const {signInUser, signInWithGoogle} = useContext(AuthContext);
    const navigate = useNavigate();

    const handleSignInWithGoogle = () => {
        signInWithGoogle()
            .then(()=>{
                navigate('/');
                swal("Success!", "You have successfully logged in!", "success");
            })
            .catch()
    }

    const handleLogin = e => {
        e.preventDefault();
        const email = e.target.email.value;
        const password  = e.target.password.value;
        console.log(email, password);
        setLogInError('');

        signInUser(email, password)
            .then(result=> {
                console.log(result.user);
                e.target.reset();
                swal("Success!", "You have successfully logged in!", "success");
                navigate('/');
            })
            .catch(()=> setLogInError("Email or Password doesn't match"))
    }

    return (
        <div className="w-3/4 lg:w-1/3 mx-auto border shadow-lg p-6 rounded-lg my-24">
            <form onSubmit={handleLogin} className="flex flex-col justify-center gap-4 p-2">
                <h2 className="text-3xl text-center mb-8 font-bold text-green-600">Login Here</h2>
                <input className="p-2 rounded-lg border" type="email" name="email" placeholder="Your Email"  required/>
                <input className="p-2 rounded-lg border" type="password" name="password" placeholder="Password" required/>
                <button className="p-2 mt-8 rounded-lg border font-semibold border-green-600 hover:bg-green-600 hover:text-white">Login</button>
                {logInError && <p className="text-center text-red-600">{logInError}</p>}
                <p className="text-center">Already have an account? <Link className="text-green-600 hover:underline" to='/register'>Sign Up</Link> here</p>
                <button onClick={handleSignInWithGoogle} className="p-2 mt-8 rounded-lg border font-semibold border-green-600 hover:bg-green-600 hover:text-white">SIGN IN WITH GOOGLE</button>
            </form>
        </div>
    );
};

export default Login;