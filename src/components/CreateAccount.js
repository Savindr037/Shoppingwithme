import React from 'react';
import './CreateAccount.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { useState } from 'react';
import axios from 'axios';


const CreateAccount = () => {

    let history = useNavigate();    // use for navigate on Previous

    const [users, setUsers] = useState([{ name: "", number: "", email: "", password: "", cpassword: "" }]);

    let Name, Value;

    const inputHandler = (e) => {
        Name = e.target.name;
        Value = e.target.value;

        if (users.name === "" && users.number === "") {
            alert("all fields are required")
        }
        setUsers({ ...users, [Name]: Value })
    }

    const submitForm = (e) => {
        
        e.preventDefault();

        // send data to PHP file //
        const sendDataTophpFile = {
            Name: users.name,
            Number: users.number,
            Email: users.email,
            Password: users.password,
            CPassword: users.cpassword
        }

        console.log(sendDataTophpFile);

        axios.post('http://localhost/shopping_with_me/insert.php', sendDataTophpFile).then(
            (result) => {
                if (result.users.status === 'vailid') {
                    history('/CreateAccount');
                }else {
                    alert('Invailid User')
                }
            }
        )
    }

    const [showPass, setShowPass] = useState(false);
    const show_password = () => {
        setShowPass(!showPass)
    }


    return (
        <>
            <div className="createAccount-pageCntnr">
                <div className="createAccount-page_headerCntnr">
                    <NavLink to="/" className='createAccount-page_logoCntnr'>
                        <span className='logo'>Shopping</span>
                        <span className='logo-withme'>with me</span>
                    </NavLink>
                </div>
                <div className="createAccount_formCntnr">

                    <form method='post' onSubmit={submitForm} className='form'>
                        <h3>Create Account</h3>

                        <label htmlFor="name">Your name</label><br />
                        <input type="text" name='name' onChange={inputHandler}
                            value={users.name} autoComplete="off" placeholder="First and last name" /><br />

                        <label htmlFor="number">Mobile number</label><br />
                        <input type="number" name='number' onChange={inputHandler}
                            value={users.number} autoComplete="off" placeholder='Mobile number' /><br />

                        <label htmlFor="email">Email</label><br />
                        <input type="email" name='email' onChange={inputHandler} className='email'
                            value={users.email} autoComplete="off" placeholder='Email' /><br />

                        <label htmlFor="password">Password</label><br />
                        <input type={showPass? "text": "password"} name='password' onChange={inputHandler}
                            value={users.password} autoComplete="off" placeholder='Password' />
                        <div className="show-password" onClick={() => show_password()}>Show</div>
                        <br />

                        <input type="password"  name='cpassword' onChange={inputHandler}
                            value={users.cpassword} autoComplete="off" placeholder='Confirm Password' /><br />

                        <input type="submit" className='submit' value="Submit" />


                        <div className='alreay-haveanAccountCntnr'>
                            <span className="alreay-haveanAccount">Already have an account? <NavLink to="/SignIn" className="signIn_link">Sign In</NavLink> </span>
                        </div>
                    </form>
                </div>
            </div>
        </>)
}

export default CreateAccount