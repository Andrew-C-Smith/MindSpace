import React, {useState} from "react";
import { Link } from "react-router-dom";

const NewProfile = ({addNewUser, onUserSelected}) => {

    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [buttonTextProfile, setButtonTextProfile] = useState("Save")
    const [componentToShow, setComponentToShow] = useState(false)

    const handleNameChange = (event) => {
        setName(event.target.value)
    }

    const handleEmailChange = (event) => {
        setEmail(event.target.value)
    }

    const handlePasswordChange = (event) => {
        setPassword(event.target.value)
    }
    
    const handleSubmit = (event) => {
        event.preventDefault()
        const newUser = {
            "name" : name,
            "email" : email,
            "password" : password
        }
        addNewUser(newUser)
        setName("")
        setEmail("")
        setPassword("")
        event.target.reset()
        onUserSelected(newUser)
        setButtonTextProfile("Profile Created!")
        setComponentToShow(true)
    }


    return (

        <>
        <div className="new-profile">
        <div className="sub-new-profile">

        <h1 > Enter Details </h1>

            
                <form className="form-flex" onSubmit={handleSubmit} > 
                    <input className="label-size" type="text" placeholder="Enter username" onChange={handleNameChange} required />
                    <br></br>
                
                    <input className="label-size" type="text" placeholder="Enter email" onChange={handleEmailChange} required />
                    <br></br>

                    <input className="label-size" type="text" placeholder="Create password" onChange={handlePasswordChange} required />
                    <br></br><br></br>

                    <input className="save-new-button" type="submit" value={buttonTextProfile}/>
                </form>
            

                {componentToShow ? <button className="save-new-button" > <Link className="link" to="/journal"> Return to log in</Link> </button> : null}
        </div>
        </div>

        </>
    )
}

export default NewProfile