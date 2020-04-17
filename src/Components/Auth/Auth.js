import React, { Component } from 'react'
import {Link} from 'react-router-dom'
import axios from 'axios'
import {connect} from 'react-redux'
import {updateReduxState} from '../../ducks/reducer'

class Auth extends Component {
    constructor(){
        super()

        this.state = {
            username: '',
            password: ''
        }
    }

    handleUpdateState = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleRegisterUser = () => {
        const {username, password} = this.state
        axios.post('/api/auth/register', {username, password})
        .then(res => {
            const {id, username, profile_pic} = res.data
            this.props.updateReduxState(id, username, profile_pic)
            this.props.history.push('/dashboard')
        })
        .catch(err => console.log(err))
    }

    handleGetUser = () => {
        const {username, password} = this.state
        axios.post('/api/auth/login', {username, password})
        .then(res => {
            const {id, username, profile_pic} = res.data
            this.props.updateReduxState(id, username, profile_pic)
            this.props.history.push('/dashboard')
        })
        .cath(err => console.log(err))
    }

    render() {
        return (
            <div>
                <input
                placeholder='Username'
                name='username'
                onChange={e => this.handleUpdateState(e)} />
                <input
                placeholder='Password'
                name='password'
                onChange={e => this.handleUpdateState(e)} />

                <button onClick={() => this.handleGetUser()}>Login</button>
                <button onClick={() => this.handleRegisterUser()}>Register</button>
            </div>
        )
    }
}

const mapDispatchToProps = {
    updateReduxState
}

export default connect(null, mapDispatchToProps)(Auth)