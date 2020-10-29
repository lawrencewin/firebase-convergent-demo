import React, { Component } from "react"
import { getPosts } from "./Firebase"

class App extends Component {

	constructor () {
		super()
		this.state = {
			posts: []
		}
	}

	async componentDidMount () {
		const data = await getPosts()
		console.log(data)
		this.setState({ posts: data })
	}

	render () {
		return (
			<div>
				<h1>Posts</h1>
				{
					this.state.posts.map(post => {
						return (
							<div>
								<h5>{post.title}</h5>
								<div>{post.user}</div>
								<p>{post.content}</p>
							</div>
						)
					})
				}
			</div>
		)
	}

}

export default App