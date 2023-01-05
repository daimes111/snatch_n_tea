import { useState } from "react"

export default function Post({ post, deletePost, updatePost }) {
    const [showInput, setShowInput] = useState(false)

    return (
        <>
            <h3>{post.username}</h3>
            <p
                onClick={(e) => {
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
            <button onClick={(() => deletePost(post._id))}>Delete</button>
        </>
    )
}