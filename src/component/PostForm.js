import React, { Component } from 'react'
import {connect} from 'react-redux'
import {newPost} from '../action/postAction'

class PostForm extends Component {

    state = {
        title:'',
        body:''
    }

    onChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value,
        })
    }

    onSubmit = (e) => {
        e.preventDefault()
        console.log('onsubmit ..')
        console.log(this.state.title)
        console.log(this.state.body)

        const newPost = {
            title:this.state.title,
            body:this.state.body
        }
        this.props.newPost(newPost)
    }
  render() {
    return (
      <div>
        <form onSubmit={this.onSubmit}>
            <div>
                <label>Title</label><br />
                <input type="text" name='title' onChange={this.onChange} />
            </div>
            <div>
                <label>Body</label><br />
                <textarea name='body' onChange={this.onChange} />
            </div>
            <input type="submit" />
        </form>
      </div>
    )
  }
}


export default connect(null,{newPost})(PostForm)
