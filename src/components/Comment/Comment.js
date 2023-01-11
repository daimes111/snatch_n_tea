import { useState, useEffect } from 'react'
import styles from './Comment.module.scss'
// import NewCommentPopUp from '../NewCommentPopUp/NewCommentPopUp'


export default function Comment({
    comment,
    deleteComment,
    updateComment,
    user }) 
    {
    const [showInput, setShowInput] = useState(false)
    const [showButton, setShowButton] = useState(false)

    const [isOpen, setIsOpen] = useState(false)

    const checkUser = async () => {
        if (user.name !== comment.username) {
            setShowButton(false)
        } else {
            setShowButton(true)
        }
    }

    useEffect(() => {
        checkUser()
    }, [])


    // const triggerText = 'Add a comment'
    // const onSubmit = (event) => {
    //     event.preventDefault(event);
    // }

    return (

        <li className={styles.Comment}>
            <h3>{comment.username}</h3>
            <p
                onClick={(e) => {
                    setShowInput(!showInput)
                }}
            >
                {comment.text}
            </p>
            <input
                style={{ display: showInput && user.name === comment.username ? 'block' : 'none' }}
                type='text'
                defaultValue={comment.text}
                onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                        updateComment(comment._id, comment.text = e.target.value)
                        setShowInput(!showInput)
                    }
                }}
            /* <button onClick={(() => deletePost(post._id))}>Aƒdd Comment</button> */
            />


            {/* <NewCommentPopUp
                triggerText={triggerText}
                onSubmit={onSubmit}
                user={user}
                createComment={createComment}
                newComment={newComment}
                setNewComment={setNewComment}
            /> */}

            <form style={{ display: "none" }}>hello</form>
            {user.name === comment.username ?
                <button style={{ display: showButton ? 'block' : 'none' }}
                    onClick={(() => deleteComment(comment._id))}
                >Delete</button>
                : ""
            }


        </li>

    )
}
