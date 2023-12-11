import './App.css'
import { useState, useEffect } from 'react'
import axios from 'axios'
import { Link, useLocation, Routes, Route } from 'react-router-dom'
import Homepage from './Homepage'
import Users from './Users'
import Posts from './Posts'
import SingleUser from './SingleUser'
import SinglePost from './SinglePost'




function App() {
  const [users, setUsers] = useState([])
  const [posts, setPosts] = useState([])

  const location = useLocation()
  const { pathname } = location

  useEffect(() => {
    const fetchUsers = async () => {
      const { data } = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/api/2310/users')
      setUsers(data)
      console.log('Fetched Users:', data)
    }
    fetchUsers()
  }, [])

  useEffect(() => {
    const fetchPosts = async () => {
      const { data } = await axios.get('https://fsa-jsonplaceholder-69b5c48f1259.herokuapp.com/api/2310/posts')
      setPosts(data)
      console.log('Fetched Posts:', data)
    }
    fetchPosts()
  }, [])

  return (
    <div>
      <nav>
        <Link to='/' className={pathname === "/" ? "selected" : "selectedVisited"}>Home</Link>
        <Link to='/users' className={pathname === "/users" ? "selected" : "selectedVisited"}>Users</Link>
        <Link to='/posts' className={pathname === "/posts" ? "selected" : "selectedVisited"}>Posts</Link>
      </nav>

      <Routes>
        <Route path='/' element={<Homepage />} />
        <Route path='/users' element={<Users users={users}/>} />
        <Route path ='/users/:id' element={<SingleUser users={users}/>}/>
        <Route path='/posts' element={<Posts posts={posts}/>}/>
        <Route path ='posts/:id' element={<SinglePost posts={posts}/>}/>
      </Routes>
    </div>
  )
}

export default App
