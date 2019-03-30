import { FETCH_POST, NEW_POST} from "./types";

export function fetchPost() {
    return function(dispatch) {
        fetch('http://jsonplaceholder.typicode.com/posts')
        .then(res => res.json())
        .then(posts => dispatch({
            type:FETCH_POST,
            payload:posts
        }))
        .catch(err => console.error(err))
    }
}

export function newPost(post) {
    return function(dispatch) {
        fetch('http://jsonplaceholder.typicode.com/posts', 
        {
            method:'POST', 
            headers:{'content-type':'application/json'},
            body:JSON.stringify(post)
        })
        .then(res => res.json())
        .then(newPost => dispatch({
            type:NEW_POST,
            payload: newPost,
        }))
    }
}