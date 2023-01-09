import { useState, useEffect } from 'react'
import styles from './Post.module.scss'
import NewCommentPopUp from '../NewCommentPopUp/NewCommentPopUp'
import CommentsList from '../CommentsList/CommentsList'

export default function Post({ post, deletePost, updatePost, user }) {
    const [showInput, setShowInput] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [comments, setComments] = useState([])
    const [foundComments, setFoundComment] = useState(null)
    const [newComment, setNewComment] = useState({
        username: '',
        text: ''
    })
    const [isOpen, setIsOpen] = useState(false)

    const checkUser = async () => {
        if (user.name !== post.username) {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    }

    const getComments = async () => {
        try {
            const response = await fetch('/api/comments')
            const data = await response.json()
            setComments(data.reverse())
        } catch (err) {
            console.error(err)
        }
    }

    useEffect(() => {
        checkUser()
        getComments()
    }, [foundComments])


    const createComment = async () => {
        try {
            const response = await fetch('/api/comments', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ ...newComment, username: user.name })
            })
            const createdComment = await response.json()
            const commentsCopy = [createdComment, ...comments]
            setFoundComment(commentsCopy)
            setNewComment({
                username: '',
                text: ''
            })
        } catch (err) {
            console.error(err)
        }
    }

    const triggerText = 'Add a comment'
    const onSubmit = (event) => {
        event.preventDefault();
        console.log(event.target.username);
        console.log(event.target.text);
    }

    return (

        <li className={styles.Post}>
            {post.anon ? <h3>XOXO Gossip Girl</h3> :
                <h3>{post.username}</h3>}
            <p
                onClick={(e) => {
                    setShowInput(!showInput)
                }}
            >
                {post.post}
            </p>
            <input
                style={{ display: showInput && user.name === post.username ? 'block' : 'none' }}
                type='text'
                defaultValue={post.post}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        updatePost(post._id, post.post = e.target.value)
                        setShowInput(!showInput)
                    }
                }}
                /* <button onClick={(() => deletePost(post._id))}>Aƒdd Comment</button> */
            />


            <NewCommentPopUp
                triggerText={triggerText}
                onSubmit={onSubmit}
                user={user}
                createComment={createComment}
                newComment={newComment}
                setNewComment={setNewComment}
            />

            <form style={{ display: "none" }}>hello</form>
            {user.name === post.username ?
                <button style={{ display: showButton ? 'block' : 'none' }} onClick={(() => deletePost(post._id))}>Delete</button>
                : ""
            }
            <CommentsList
                comments={comments}
                // deleteComment={deleteComment}
                // updateComment={updateComment}
                user={user}
            />
        </li>

    )
}
