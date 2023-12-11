import { useParams, Link } from "react-router-dom"

const SinglePost = ({posts}) => {
const params = useParams()
console.log('This is params:', params)
const id = params.id*1

const post = posts.find((singlePost) => {
    return singlePost.id === id

})

if(!post) {
    return null
}

    return (
        <div>
            <h1>{post.title}</h1>
            <p> {post.body} </p>
            <Link to='/posts'>
                Back to all Posts
            </Link>
        </div>
    )
}

export default SinglePost