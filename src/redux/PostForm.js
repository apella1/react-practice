import React, { Component } from 'react'

class PostForm extends Component {
  constructor(props) {
    super(props)

    this.state = {
        title: '',
        body: ''
    }

    this.onChange = this.onChange.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
  }

  onChange(e) {
    this.setState( {[e.target.name]: e.target.value} )
  }

  onSubmit(e) {
    e.preventDefault();

    const post = {
        title: this.state.title, 
        body: this.state.body
    }

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST', 
        headers: {
            'content-type' : 'application/json'
        }, 
        body: JSON.stringify(post)
    })
    .then(res => res.json())
    .then( data => console.log(data))
  }

  render() {
    return (
      <div>
        <h2>Add Post</h2>
        <form action="">
            <div>
            <label htmlFor="title">Title: </label> <br />
            <input type="text" id='title' name='title' value={this.state.title} onChange={this.onChange} />
            </div>
            <br />

            <div>
            <label htmlFor="body">Body: </label> <br />
            <textarea type="text" id='body' name='body' value={this.state.body} onChange={this.onChange} />
            </div>
            <br />

            <button type="submit" onSubmit={this.onSubmit}>Submit</button>
        </form>
      </div>
    )
  }
}

export default PostForm;
