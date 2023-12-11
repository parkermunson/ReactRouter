import { Link } from "react-router-dom"

const Posts = (props) => {
  return(
    <div>
      <h1>Posts</h1>
      <ul>
        {
          props.posts.map((post) => {
            return(
              <li key={post.title}>
                <Link to={`/posts/${post.id}`}>
                    {post.title}
                </Link>
                
            </li>
            )
          })
        }
      </ul>
    </div>
  )
}

export default Posts