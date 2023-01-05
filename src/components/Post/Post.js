import { useState } from "react"
import styles from "./Post.module.scss"

export default function Post({ post, deletePost, updatePost, user }) {
    const [showInput, setShowInput] = useState(false)
    const [showButton, setShowButton] = useState(false)

    return (
        <li className={styles.Post}>
            <h3>{post.username}</h3>
            <p
                onClick={(e) => {
                    { }
                    setShowInput(!showInput)
                }}>
                {post.post}
            </p>
            <input
                style={{ display: showInput ? "block" : "none" }}
                type="text"
                defaultValue={post.post}
                onKeyDown={(e) => {
                    if (e.key === "Enter") {
                        updatePost(post._id, post.post = e.target.value)
                        setShowInput(!showInput)
                    }
                }}
            />
            {user.name === post.usermame ?
                <button onClick={(() => deletePost(post._id))}>Delete</button>
                : ""
            }
        </li>
    )
}