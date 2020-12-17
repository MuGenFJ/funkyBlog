import React from 'react'  

// class SignUp extends React.Component {
//     render() {
//         return (
//             JSX
//         ) 
//     }
// }

function SignUp() {
    return (
        <div className="formContainer">
            <div className="formInfo">
                <span>Sign Up</span><span>&</span><span>Be instantly notify as soon as new posts are available to read</span>
                <h1>Thank you for your subscription !</h1>
            </div>
            <form className="registerForm">
                <input
                    type="text"
                    className="formField"
                    placeholder="First Name"
                    name="firstName"
                />
                <input
                    type="text"
                    className="formField"
                    placeholder="Last Name"
                    name="lastName"
                />
                <input
                    type="text"
                    className="formField"
                    placeholder="Email Address"
                    name="email"
                />
                <button className="formField" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
