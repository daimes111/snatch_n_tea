import { useState, useEffect } from 'react'
import PostsList from '../../components/PostsList/PostsList'
import PostsHeader from '../../components/PostsHeader/PostsHeader'
import NavBar from '../../components/NavBar/NavBar'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import styles from './PostsPage.module.scss'

export default function PostsPage ({ user, setUser }) {
  const [posts, setPosts] = useState([])
  const [foundPost, setFoundPost] = useState(null)
  const [newPost, setNewPost] = useState({
    username: '',
    post: ''
  })

  const createPost = async () => {
    try {
      const response = await fetch('/api/posts', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...newPost, username: user.name })
      })
      const createdPost = await response.json()
      const postsCopy = [createdPost, ...posts]
      setFoundPost(postsCopy)
      setNewPost({
        username: '',
        post: ''
      })
    } catch (err) {
      console.error(err)
    }
  }

  const deletePost = async (id) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json'
        }
      })
      const data = await response.json()
      setFoundPost(data)
    } catch (err) {
      console.error(err)
    }
  }

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ ...foundPost, post: updatedPost })
      })
      const data = await response.json()
      setFoundPost(data)
    } catch (err) {
      console.error(err)
    }
  }

  const getPosts = async () => {
    try {
      const response = await fetch('/api/posts')
      const data = await response.json()
      setPosts(data.reverse())
    } catch (err) {
      console.error(err)
    }
  }

  useEffect(() => {
    getPosts()
  }, [foundPost])

  return (
    <main className={styles.PostsPage}>
      {/* <aside className={styles.aside}>
      <NavBar user={user} setUser={setUser} />
      </aside> */}
      <div className={styles.PostsPageHeader}>
        <h2>Home</h2>
      </div>
      <PostsHeader
        newPost={newPost}
        setNewPost={setNewPost}
        createPost={createPost}
        user={user}
      />
      <PostsList
        posts={posts}
        deletePost={deletePost}
        updatePost={updatePost}
        user={user}
      />
    </main>
  )
}
