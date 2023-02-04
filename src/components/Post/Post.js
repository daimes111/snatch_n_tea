import { useState, useEffect } from 'react'
import styles from './Post.module.scss'
import NewCommentPopUp from '../NewCommentPopUp/NewCommentPopUp'
import CommentsList from '../CommentsList/CommentsList'
import ChatBubbleOutlineIcon from "@mui/icons-material/ChatBubbleOutline";
import RepeatIcon from "@mui/icons-material/Repeat";
import FavoriteBorderIcon from "@mui/icons-material/FavoriteBorder";
import PublishIcon from "@mui/icons-material/Publish";
import sendRequest from '../../utilities/send-request';
import * as commentsAPI from "../../utilities/comments-api"

export default function Post({ post, deletePost, updatePost, user }) {
    const [showInput, setShowInput] = useState(false)
    const [showButton, setShowButton] = useState(false)
    const [comments, setComments] = useState([])
    const [foundComment, setFoundComment] = useState(null)
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
            const response = await sendRequest(`/api/comments/${post._id}`)
            setComments(response)
        } catch (err) {
            console.error(err)
        }
    }
    

    const createComment = async (  createdComment) => {
        console.log(createdComment)
        try {
          const response = await commentsAPI.create(post._id, { ...createdComment, username: user.name})
          setFoundComment(response)
        } catch(err){
          console.error({msg: err.message})
        } finally {
          setNewComment({
            username: `${user.name}`,
            text: ''
          })
        }
      }


    const deleteComment = async (id) => {
        try {
          const response = await commentsAPI.deleteById(post._id, id)

          setFoundComment(response)
        } catch (err) {
          console.error(err)
        }
      }

    const updateComment = async (id, updatedComment) => {
        try {
          const response = await commentsAPI.updateById(post._id, id, {text: updatedComment}) 
          setFoundComment(response)
        } catch (err) {
          console.error(err)
        }
      }

    // const triggerText = 'Add a comment'
    const onSubmit = (event) => {
        event.preventDefault();
    }

    useEffect(() => {
        checkUser()
        getComments()
    }, [foundComment])

    return (
        <div>
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
                />
                {post.url ? <img src={post.url} alt="" />
                    : ""}

                <div className={styles.Buttons}>
                    {/* <NewCommentPopUp
                    triggerText={triggerText}
                    user={user}
                    createComment={createComment}
                    newComment={newComment}
                    setNewComment={setNewComment}
                    onSubmit={onSubmit}
                /> */}

                    {user.name === post.username ?
                        <button className={styles.DeleteButton} style={{ display: showButton ? 'block' : 'none' }} onClick={(() => deletePost(post._id))}>Delete</button>
                        : ""
                    }
                </div>
                <CommentsList
                    comments={comments}

                    updateComment={updateComment}
                    post={post}
                    user={user}
                    checkUser={checkUser}
                    showButton={showButton}
                    setShowButton={setShowButton}
                    deleteComment={deleteComment}
                />
                <div className={styles.PostFooter}>
                    <ChatBubbleOutlineIcon fontSize="small"/>
                    <NewCommentPopUp
                        // triggerText={triggerText}
                        user={user}
                        createComment={createComment}
                        newComment={newComment}
                        setNewComment={setNewComment}
                        onSubmit={onSubmit}
                        fontSize="small"
                    />
                    <RepeatIcon fontSize="small" />
                    <FavoriteBorderIcon fontSize="small" />
                    <PublishIcon fontSize="small" />
                </div>
            </li>

        </div>
    )
}
