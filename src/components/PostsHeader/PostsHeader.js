import styles from './PostsHeader.module.scss'

export default function PostsListHeader ({ newPost, setNewPost, createPost, user }) {
  // const handleSubmit = (evt) => {
  //     evt.preventDefault()
  //     createPost()
  // }

  const handleChange = (evt) => {
    setNewPost({ ...newPost, [evt.target.name]: evt.target.value })
  }
  return (
    <div className={styles.PostsHeader}>
      <form>
        {/* {"Username: "}<input
                    type="text"
                    // defaultValue={user.username}-lets add this once we have that connected
                    // value={user.name}
                    // defaultValue={user.name}
                    disabled={true}
                    name="username"
                    placeholder={user.name}
                    // onChange={handleChange}

                /> */}
        {'Post: '}<input
          type='comment'
          name='post'
          value={newPost.post}
          onChange={handleChange}
          placeholder="What's the Tea Sis'?"
                  />
        <button onClick={createPost} type='submit'>Spill It</button>
        {/* <input type="submit" value="Add post"/> */}
      </form>
    </div>
  )
}
