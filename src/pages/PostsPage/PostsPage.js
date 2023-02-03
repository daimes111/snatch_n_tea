import { useState, useEffect } from 'react'
import PostsList from '../../components/PostsList/PostsList'
import PostsHeader from '../../components/PostsHeader/PostsHeader'
import NavBar from '../../components/NavBar/NavBar'
import UserLogOut from '../../components/UserLogOut/UserLogOut'
import styles from './PostsPage.module.scss'
import * as postsAPI from "../../utilities/posts-api"


export default function PostsPage ({ user, setUser }) {
  const [posts, setPosts] = useState([])
  const [foundPost, setFoundPost] = useState(null)
  const [newPost, setNewPost] = useState({
    username: `${user.name}`,
    post: '', 
    url: "",
    anon: false
  })

  // const createPost = async (evt) => {
  //   evt.preventDefault()
  //   try {
  //     const response = await fetch('/api/posts', {
  //       method: 'POST',
  //       headers: {
  //         'Content-Type': 'application/json'
          
  //       },
  //       body: JSON.stringify({ ...newPost, username: user.name })
  //     })
  //     const createdPost = await response.json()
  //     const postsCopy = [createdPost, ...posts]
  //     setFoundPost(postsCopy)
  //     setNewPost({
  //       username: `${user.name}`,
  //       post: '',
  //       url: "",
  //       anon: false
  //     })
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }

  const createPost = async (evt, createdPost) => {
    evt.preventDefault()
    try {
      const response = await postsAPI.create({ ...createdPost, username: user.name})
      console.log(createdPost)
      // const postsCopy = [response, ...posts]
      setFoundPost(response)
    } catch(err){
      console.error({msg: err.message})
    } finally {
      setNewPost({
        username: `${user.name}`,
        post: '', 
        url: "",
        anon: false
      })
    }
  }

  const deletePost = async (id, deletedPost) => {
    try {
      const response = await postsAPI.deleteById(id, {post: deletedPost})
      setFoundPost(response)
    } catch (err) {
      console.error(err)
    }
  }

  const updatePost = async (id, updatedPost) => {
    try {
      const response = await postsAPI.updateById(id, {post: updatedPost}) 
      // {
      //   method: 'PUT',
      //   headers: {
      //     'Content-Type': 'application/json'
      //   },
      //   body: JSON.stringify({ ...foundPost, post: updatedPost })
      // })
      // const data = await response.json()
      setFoundPost(response)
    } catch (err) {
      console.error(err)
    }
  }
 

  // const deletePost = async (id) => {
  //   try {
  //     const response = await fetch(`/api/posts/${id}`, {
  //       method: 'DELETE',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       }
  //     })
  //     const data = await response.json()
  //     setFoundPost(data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  // const updatePost = async (id, updatedPost) => {
  //   try {
  //     const response = await fetch(`/api/posts/${id}`, {
  //       method: 'PUT',
  //       headers: {
  //         'Content-Type': 'application/json'
  //       },
  //       body: JSON.stringify({ ...foundPost, post: updatedPost })
  //     })
  //     const data = await response.json()
  //     setFoundPost(data)
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  // const getPosts = async () => {
  //   try {
  //     const response = await fetch('/api/posts')
  //     const data = await response.json()
  //     setPosts(data.reverse())
  //   } catch (err) {
  //     console.error(err)
  //   }
  // }
  const getPosts = async () => {
    try {
        const response = await postsAPI.getAll()
        setPosts(response.reverse())
    } catch (error) {
        console.error(error)
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
        <h2>{user.name}'s Page</h2>
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
