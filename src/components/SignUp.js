import React, {useState} from 'react'  
import addToMailchimp from 'gatsby-plugin-mailchimp'

// class SignUp extends React.Component {
//     render() {
//         return (
//             JSX
//         ) 
//     }
// }



function SignUp() {

const [state, setState] = useState({
    email: '',
    message: ''
})

const changeEmailHandler = (event) => {
    setState({ email: event.target.value })
 
}

const handleSubmit = e => {
    e.preventDefault();
    addToMailchimp(state.email) // listFields are optional if you are only capturing the email address.
    .then(data => {
      // I recommend setting data to React state
      // but you can do whatever you want (including ignoring this `then()` altogether)
      console.log(data)
    })
    .catch(() => {
      // unnecessary because Mailchimp only ever
      // returns a 200 status code
      // see below for how to handle errors
    })
    setState({ email: '', message: "Thank you for your subscription !" })

  }
    return (
        <div className="formContainer">
            <div className="formInfo">
                <span>Sign Up</span><span>&</span><span>Be instantly notify as soon as new posts are available to read</span>
                <h1>{state.message}</h1> 
            </div>
            <form className="registerForm" onSubmit={handleSubmit}>
                <input
                    type="text"
                    className="formField"
                    placeholder="First Name"
                    name="firstName"
                    required
                />
                <input
                    type="text"
                    className="formField"
                    placeholder="Last Name"
                    name="lastName"
                    required
                />
                <input
                    type="text"
                    className="formField"
                    placeholder="Your Email"
                    name="email"
                    value={state.email}
                    onChange={changeEmailHandler}
                    required
                />
                <button className="formFieldBtn" type="submit">Sign Up</button>
            </form>
        </div>
    )
}

export default SignUp
