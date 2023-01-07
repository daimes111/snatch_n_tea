import styles from './PostsHeader.module.scss'

export default function PostsListHeader ({ newPost, setNewPost, createPost, user }) {
  // const handleSubmit = (evt) => {
  //     evt.preventDefault()
  //     createPost()
  // }

  const handleChange = (evt) => {
    if (evt.target.type === "checkbox") {
        evt.target.value = evt.target.checked
    }
    setNewPost({ ...newPost, [evt.target.name]: evt.target.value })
  }
  return (
    <div className={styles.PostsHeader}>
      <form>
        <input
          type='comment'
          name='post'
          value={newPost.post}
          onChange={handleChange}
          placeholder="What's the Tea Sis'?"

        />

        <img ></img>

        {/* <input
          type="text"
          name='url'
          value={newPost.url}
          onChange={handleChange}
          placeholder="Optional URL"
                  /> */}
        For Gossip Girl?<input type="checkbox" name="anon" value={newPost.anon} onChange={handleChange}/>        
        <button onClick={createPost} type='submit'>Spill It</button>
      </form>
    </div>
  )
}
