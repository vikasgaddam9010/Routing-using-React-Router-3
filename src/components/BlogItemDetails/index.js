import {Component} from 'react'

import './index.css'

class BlogItemDetails extends Component {
  state = {blogData: {}}
  componentDidMount () {
    this.getBlogItemDetails()
  }
  getBlogItemDetails = async () => {
    const {id} = this.props.match.params
    const blogDetalsData = await fetch(`https://apis.ccbp.in/blogs/${id}`)
    const data = await blogDetalsData.json()
    const updatedBlogData = {
      id: data.id,
      title: data.title,
      imageUrl: data.image_url,
      avatarUrl: data.avatar_url,
      author: data.author,
      content: data.content,
      topic: data.topic
    }
    this.setState({blogData: updatedBlogData})
  }
  renderBlogItemDetails = () => {
    const {title, imageUrl, content, avatarUrl, author} = this.state.blogData
    return (
      <div className="blog-info">
        <h2 className="blog-details-title">{title}</h2>

        <div className="author-details">
          <img className="author-pic" src={avatarUrl} alt={author} />
          <p className="details-author-name">{author}</p>
        </div>

        <img className="blog-image" src={imageUrl} alt={title} />
        <p className="blog-content">{content}</p>
      </div>
    )
  }

  render() {
    return <div className="blog-container">{this.renderBlogItemDetails()}</div>
  }
}

export default BlogItemDetails
