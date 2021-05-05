import {React, Component} from 'react';

import FormInput from '../form-input/form-input.component';
import CustomButton from '../custom-button/custom-button.component';

import { auth, signInWithGoogle } from '../../firebase/firebase.utils';

import './sign-in.styles.scss';

class SignIn extends Component {
        constructor(props) {
                super(props)
                this.state={
                        email: '',
                        password:''
                }
        }
        handleSubmit = async event =>{
                //stops the default action of an element from happening. 
                //For example: Prevent a submit button from submitting a form. 
                //Prevent a link from following the URL.
                //huỷ bỏ event nếu nó có thể huỷ mà không dừng sự lan rộng(propagation) 
                //của event tới phần khác.
                event.preventDefault()
                 const {email, password} = this.state
                 try{
                         await auth.signInWithEmailAndPassword(email, password)
                          this.setState({
                                        email: '',
                                        password: ''
                                })
                 }
                 catch (error)
                 {
                         console.error(error)
                 }
               
        }
        handleChange = (event) =>{
                //look at the "value", "name" of FormInput
                const {value, name} = event.target

                this.setState({
                        [name] : value // this one is how to set the value of object for the key
                })
        }
        render() {
        
                return(
                                <div className="sign-in">
                                        <h2>I already have an account</h2>
                                        <span>Sign in with your email and password</span>
                                        <form onSubmit={this.handleSubmit}>

                                                <FormInput      handleChange={this.handleChange} 
                                                                name="email" type='email' 
                                                                value={this.state.email} 
                                                                label="Email" 
                                                                required />

                                                <FormInput      handleChange={this.handleChange} 
                                                                name="password" 
                                                                type='password' 
                                                                value={this.state.password} 
                                                                label='Password' required />
                                                <div className='buttons'>
                                                        <CustomButton type="button"> Sign In </CustomButton>
                                                        <CustomButton onClick={ signInWithGoogle } isGoogleSignIn>
                                                                {' '}
                                                                Sign In With Google 
                                                                {' '}
                                                        </CustomButton>
                                                </div>
                                              

                                        </form>
                                </div>
                        )
        }
}
        

export default SignIn