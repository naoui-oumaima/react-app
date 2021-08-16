import React, {useState, useContext}  from 'react'
import {Form} from 'react-bootstrap'
import {Link,Redirect} from 'react-router-dom'
import {ThemeContext} from '../context/themeContext'


const Authentication = (props) => {

    const {toggleTheme} = useContext(ThemeContext);

    const isLogin = props.match.path === '/login'
    const pageTitle = isLogin ? 'Sign In' : 'Sign Up'
    const descriptionLink = isLogin ? '/register' : '/login'
    const descriptionText = isLogin ? 'Need an account?': 'Have an account?'
    const [email,setEmail]= useState('')
    const [password,setPassword] = useState('')
    const [username, setUsername] = useState('')
    const [isSubmitting, setIsSubmitting]= useState(false)


    const handleSubmit= () =>{
        setIsSubmitting(true);
    }
        

    if (isSubmitting && isLogin) {
        return <Redirect to="/"/>
    }

    return(
        <div className="auth-page">
            <nav className="navbar py-0">
                <div className="container-fluid">     
                    <div className="logo">
                        <a class="navbar-brand " href="">
                            <img src="img/logo.png" className="dark"alt='logo'/>
                            <img src="img/tlogo.png" className="light" alt='logo'/>
                        </a>
                    </div>
                    <ul className="navbar-nav navliste">
                        <li className="nav-item me-3 mt-2 changeTheme navliste" onClick={toggleTheme}>
                                <img src="img/sun.png" className="navimg dark" alt=''/>
                                <img src="img/moon.png" className="navimg light" alt=''/>
                        </li>
                        <li className="nav-item me-3 mt-2 navliste">
                                <img src="img/language.png" className="navimg dark"alt=''/>
                                <img src="img/llanguage.png" className="navimg light"alt=''/>

                        </li>                
                    </ul>
                </div>      
            </nav>
            <div className="auth-block col-6 mx-auto">
                <div className="row">
                    <div className="col-8 offset-2">
                        <h1 className="text-centre">{pageTitle}</h1>
                        <p className="text-centre">
                            <Link to={descriptionLink}>{descriptionText}</Link>
                        </p>

                        <form onSubmit={handleSubmit} >
                            { !isLogin && (<fieldset className="form-group my-3">
                                    <input type="text" className="form-control " 
                                    placeholder="UserName" 
                                    value={username} onChange={e=> setUsername(e.target.value)} 
                                    />
                            </fieldset>)}

                            <fieldset className="form-group my-3">
                                <input type="email" className="form-control" 
                                placeholder="Email" 
                                value={email} onChange={e=> setEmail(e.target.value)} 
                                />
                            </fieldset>
                            
                            <fieldset className="form-group my-3">
                                <input type="password" className="form-control" 
                                placeholder="Password" value={password} onChange={e=> setPassword(e.target.value)}/>
                            </fieldset>

                            { !isLogin && (<Form.Group controlId="formFile" className="my-3">
                                    <Form.Label>put your photo</Form.Label><br/>
                                    <Form.Control type="file" />
                            </Form.Group>)}

                            <fieldset className="form-group my-3">
                                <button 
                                className="btn btn-lg btn-success pull-xs-right" 
                                type="submit" >
                                    {/* {isSubmitting && <Link to='/'> */}
                                {pageTitle} 
                                {/* </Link> } */}
                                </button>
                            </fieldset>

                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Authentication ;