import React, { Component } from 'react'
import {fetchPost} from '../action/postAction'
import {connect} from 'react-redux'

class Posts extends Component {

    componentDidMount() {
        this.props.fetchPost();
    }
    
    componentWillReceiveProps(nextProps) {
      if (nextProps.newPost) {
        this.props.posts.unshift(nextProps.newPost) // this.prpps.posts 的 posts 对应 mapStateToProps 中的 对象 key
      }
    }
    render() {
    
    const posts = this.props.posts.map(item => (
      <div key={item.id}>
        <h2>{item.title}</h2>
        <p>{item.body}</p>
      </div>
    ))
    return (
      <div>
        {posts}
      </div>
    )
  }
}

const mapStateToProps = state => ({
  posts:state.poster.postList, // state.poster 的 poster 对应 combineReducers 中参数对象的 key
  newPost: state.poster.newPost
})

export default connect(mapStateToProps, {fetchPost})(Posts)