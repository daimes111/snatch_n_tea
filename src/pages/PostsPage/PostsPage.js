import { useState, useEffect } from "react"
import PostsList from "../../components/PostsList/PostsList"
import UserLogOut from "../../components/UserLogOut/UserLogOut"

export default function PostsPage({ user, setUser }) {
    const [posts, setPosts] = useState([])
    const [foundPost, setFoundPost] = useState(null)
    const [newPost, setNewPost] = useState({
        username: "",
        post: "",
    })

    const createPost = async () => {
        try {
            const response = await fetch("/api/posts", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...newPost, username: user.name })
            })
            const createdPost = await response.json()
            const postsCopy = [createdPost, ...posts]
            setFoundPost(postsCopy)
            setNewPost({
                username: "",
                post: "",
            })
        } catch (err) {
            console.error(err)
        }

    }

    const deletePost = async (id) => {
        try {
            const response = await fetch(`/api/posts/${id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
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
                method: "PUT",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({...foundPost, post: updatedPost})
            })
            const data = await response.json()
            setFoundPost(data)
        } catch (err) {
            console.error(err)
        }

    }

    const getPosts = async () => {
        try {
            const response = await fetch("/api/posts")
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
        <>
        <UserLogOut user={user} setUser={setUser} />
        <PostsList 
            posts={posts}
            newPost= {newPost}
            setNewPost={setNewPost}
            createPost={createPost}
            deletePost={deletePost}
            updatePost={updatePost}
            user={user}
        />
        </>
    )
}