import React, { Component } from 'react'
import axios from 'axios'
import {connect} from 'react-redux'
import {loginUser} from '../../ducks/reducer'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleInput = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegister = () => {
    const body = {
      username: this.state.username,
      password: this.state.password,
    }

    axios
      .post('/auth/register', body)
      .then((res) => {
        this.props.loginUser(res.data)
        this.props.history.push('/dashboard')
      })
      .catch((err) => {
          console.log(err)
          alert('Could not register')
        })
     }

    handleLogin = () => {
        const body = {
          username: this.state.username,
          password: this.state.password,
        }
    
        axios
          .post('/auth/login', body)
          .then((res) => {
            this.props.loginUser(res.data)
            this.props.history.push('/dashboard')
          })
          .catch((err) => {
            console.log(err)
            alert('Could not log in')
          })
      }

    render() {
        return (
            <div>
                <input
                placeholder='Username'
                name='username'
                onChange={e => this.handleInput(e)} />
                <input
                placeholder='Password'
                name='password'
                onChange={e => this.handleInput(e)} />

                <button onClick={() => this.handleLogin()}>Login</button>
                <button onClick={() => this.handleRegister()}>Register</button>
            </div>
        )
    }
}

const mapStateToProps = (reduxState) => reduxState
export default connect(mapStateToProps, { loginUser })(Auth)