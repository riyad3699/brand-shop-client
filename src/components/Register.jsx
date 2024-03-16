import { useContext, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider";
import { updateProfile } from "firebase/auth";
import swal from 'sweetalert';
import auth from "../firebase/firebase.config";

const Register = () => {
    const { createUser } = useContext(AuthContext);
    const navigate = useNavigate();
    const [registerError, setRegisterError] = useState(null);

    const handleRegister= e => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const password = e.target.password.value;

        setRegisterError('');
        if (password.length<6) {
            setRegisterError('Password should be at least 6 characters')
            return;
        }
        if (!/(?=.*[A-Z])(?=.*[@#$%^&*!=])/.test(password)) {
            setRegisterError('Password should include uppercase and special character')
            return;
        }

        createUser(email, password)
            .then(() => {
                updateProfile(auth.currentUser,{
                    displayName:name,
                    photoURL: "/user.png"
                })
                .then()
                .catch()
                e.target.reset();
                swal("Success!", "You have successfully registered!", "success");
                navigate('/');
            })

            .catch(error => console.log(error))
    }

    return (
        <div className="w-3/4 lg:w-1/3 mx-auto border shadow-lg p-6 rounded-lg my-24">
            <form onSubmit={handleRegister} className="flex flex-col justify-center gap-4 p-2">
                <h2 className="text-3xl text-center mb-8 font-bold text-green-600">Register Here</h2>
                <input className="p-2 rounded-lg border" type="text" name="name" placeholder="Your Name" required />
                <input className="p-2 rounded-lg border" type="email" name="email" placeholder="Your Email" required />
                <input className="p-2 rounded-lg border" type="password" name="password" placeholder="Password" required />
                <button className="p-2 mt-8 rounded-lg border font-semibold border-green-600 hover:bg-green-600 hover:text-white">Sign Up</button>
                <p className="text-center">Already have an account? <Link className="text-green-600 hover:underline" to='/login'>Login</Link> here</p>
                {registerError && <p className="text-center text-red-600">{registerError}</p>}
                
            </form>
        </div>
    );
};

export default Register;