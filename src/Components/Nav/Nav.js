import React, { Component } from 'react'
import {Link, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {logoutUser} from '../../ducks/reducer'
import axios from 'axios'

class Nav extends Component {
    constructor(){
        super()

        this.state = {
            show: true
        }
    }

    componentDidMount = () => {
        if (this.props.location.pathname === '/' && this.state.show === true) {
            this.setState({
                show: false
            })
        }
    }

    componentDidUpdate = (prevProps, prevState) => {
        if(this.props.location.pathname === '/' && prevState.show === true) {
            this.setState({
                show: false
            })
        } else if (this.props.location.pathname !== '/' && prevState.show === false){
            this.setState({
                show: true
            })
        }
    }

    handleLogout = () => {
        axios.post('/api/auth/logout').then(res => {
            this.props.logoutUser(0, '', '')
            this.props.history.push('/')
        })
        console.log(this.props)
    }

    render() {
        return (
            <div>
                {this.state.show ? (
                    <div>
                        <img id='profile-pic' src={this.props.profilePic} alt='Profile' />
                        <div>{this.props.username}</div>
                        <Link to='/dashboard'><button>Home</button></Link>
                        <Link to='new'><button>New Post</button></Link>
                        <button onClick={() => this.handleLogout()}>Logout</button>
                    </div>
                ) : (
                    <div></div>
                )}
            </div>
        )
    }
}

const mapStateToProps = reduxState => {
    const {username, profilePic} = reduxState
    return {
        username,
        profilePic
    }
}

export default connect(mapStateToProps, {logoutUser})(withRouter(Nav))