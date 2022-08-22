import React, { useState } from 'react'
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import {Link} from 'react-router-dom'
import GoogleSignIn from '../components/GoogleSignIn'
import auth from '../firebase.init';

function Register() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    console.log(email, password)
    console.log(email)
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useCreateUserWithEmailAndPassword(auth);
    return (
        <section className="h-full">
            <h1 className='text-3xl font-bold mt-10 mb-10'>Register</h1>
        <div className="px-6 h-full text-gray-800">
            <div
            className="flex xl:justify-center lg:justify-between justify-center items-center flex-wrap h-full g-6"
            >
            <div
                className="grow-0 shrink-1 md:shrink-0 basis-auto xl:w-6/12 lg:w-6/12 md:w-9/12 mb-12 md:mb-0"
            >
                <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                className="w-full"
                alt="Sample"
                />
            </div>
            <div className="xl:ml-20 xl:w-5/12 lg:w-5/12 md:w-8/12 mb-12 md:mb-0">
                <form>
                

                {/* Email input */}
                <div className="mb-6">
                    <input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Email address"
                    />
                </div>

                {/* <!-- Password input --> */}
                <div className="mb-6">
                    <input
                    onChange={(e) => setPassword(e.target.value)}
                    type="password"
                    className="form-control block w-full px-4 py-2 text-xl font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none"
                    id="exampleFormControlInput2"
                    placeholder="Password"
                    />
                </div>

                

                <div className="text-center lg:text-left">
                    <button
                    onClick={() => createUserWithEmailAndPassword(email, password)}
                    type="button"
                    className="inline-block px-7 py-3 bg-blue-600 text-white font-medium text-sm leading-snug uppercase rounded shadow-md hover:bg-blue-700 hover:shadow-lg focus:bg-blue-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-blue-800 active:shadow-lg transition duration-150 ease-in-out"
                    >
                    Register
                    </button>
                    
                    <div
                    className="flex items-center my-4 before:flex-1 before:border-t before:border-gray-300 before:mt-0.5 after:flex-1 after:border-t after:border-gray-300 after:mt-0.5"
                >
                    <p className="text-center font-semibold mx-4 mb-0">Or</p>
                                </div>
                                <GoogleSignIn></GoogleSignIn>
                                <p className="text-sm font-semibold mt-2 pt-1 mb-0">
                    Already have an account?
                    <a className="text-red-600 hover:text-red-700 focus:text-red-700 transition duration-200 ease-in-out"><Link to='/login'>login</Link></a>
                    </p>
                                
                </div>
                </form>
            </div>
            </div>
        </div>
</section>
  )
}

export default Register