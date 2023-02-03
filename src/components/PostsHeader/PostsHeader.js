import styles from './PostsHeader.module.scss'

export default function PostsListHeader({ newPost, setNewPost, createPost, user }) {

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
          className={styles.Comment}
        />

        <img ></img>
        <div className={styles.HeadersExtra}>
          <input
          type="text"
          name='url'
          value={newPost.url}
          onChange={handleChange}
          placeholder="Optional URL"
                  />
          
          </div>
          <div className={styles.PostsFooter}>
          Send it to Gossip Girl<input type="checkbox" name="anon" value={newPost.anon} onChange={handleChange} />
          <button onClick={(e) => {
            createPost(e, newPost)
          }} type='submit'>Spill It</button>
          </div>
        
        
      </form>
    </div>
  )
}
