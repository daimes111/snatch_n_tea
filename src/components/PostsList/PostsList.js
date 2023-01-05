import Post from "../Post/Post"

export default function PostsList({ posts, newPost, setNewPost, createPost, deletePost, updatePost, user }){
    const handleSubmit = (evt) => {
        evt.preventDefault()
        createPost()
    }

    const handleChange = (evt) => {
        setNewPost({...newPost, [evt.target.name]: evt.target.value})
    }
    return (
        <div className="postsContainer">
            <form onSubmit={handleSubmit}>
                <h2>Add Post:</h2>
                {"Username: "}<input
                    type="text"
                    // defaultValue={user.username}-lets add this once we have that connected
                    // value={user.name} 
                    // defaultValue={user.name}
                    disabled={true}
                    name="username"
                    placeholder={user.name}
                    // onChange={handleChange}
                    
                />
                {"Post: "}<input
                    type="comment"
                    name="post"
                    value={newPost.post}
                    onChange={handleChange}
                />
                <input type="submit" value="Add post"/>
            </form>
            <h3>Posts</h3>
            {/* <Post /> */}
            {posts.map(post => (
                <Post
                    key={post._id}
                    post={post}
                    deletePost={deletePost}
                    updatePost={updatePost}
                    
                />
            ))}
        </div>
    )
}