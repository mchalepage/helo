import React, { Component } from 'react'
import Post from '../Post/Post'
import { connect } from 'react-redux'
import { getUser } from '../../ducks/reducer'
import axios from 'axios'

class Dashboard extends Component {
    constructor(){
        super()
        this.state = {
            posts: [],
            userInput: '',
        }
    }

    componentDidMount(){
        this.props
        .getUser()
        .then(() => {
          axios.get('/api/posts').then((res) => {
            this.setState({
              posts: res.data,
            })
          })
        })
        .catch(() => {
          this.props.history.push('/')
        })
    }
    handleChange = (e) => {
        this.setState({
          userInput: e.target.value,
        })
    }

    handleClick = () => {
        const body = {
          users_id: this.props.user.users_id,
          content: this.state.userInput,
        }
    
        if (body.content) {
          axios.post('/api/posts', body).then((res) => {
            this.setState({
              posts: res.data,
              userInput: '',
            })
          })
        }
    }

    handleEdit = (post_id, content) => {
        axios.put(`/api/posts/${post_id}`, { content }).then((res) => {
          this.setState({
            posts: res.data,
          })
        })
    }

    handleDelete = (post_id) => {
        axios.delete(`/api/posts/${post_id}`).then((res) => {
          this.setState({
            posts: res.data,
          })
        })
    }

    render() {
        // const mappedPosts = this.state.posts.map((post, index) => {
        //   return (
        //     <Post
        //       handleEdit={this.handleEdit}
        //       handleDelete={this.handleDelete}
        //       data={post}
        //       key={post.post_id}
        //     />
        //   )
        // })
        return (
        //   <>
        //     <div className="input-container">
        //       <textarea
        //         id="new-post"
        //         cols="60"
        //         rows="2"
        //         placeholder="New post..."
        //         value={this.state.userInput}
        //         onChange={(e) => {
        //           this.handleChange(e)
        //         }}
        //       />
        //       <button
        //         onClick={() => {
        //           this.handleClick()
        //         }}
        //       >
        //         Post
        //       </button>
        //     </div>
    
        //     <section>
        //       <div />
        //       <ul>{mappedPosts}</ul>
        //     </section>
        //   </>
            <Post />
        )
      }
    }
    
    const mapStateToProps = (reduxState) => reduxState
    
    export default connect(mapStateToProps, { getUser })(Dashboard)