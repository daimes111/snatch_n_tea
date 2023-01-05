import { logOut } from '../../utilities/users-service'
import styles from './UserLogOut.module.scss'


export default function UserLogOut ({ user, setUser }) {
  function handleLogOut () {
    logOut()
    setUser(null)
  }

  return (
    <div className={styles.UserLogOut}>
      
      <div>{user.name}</div>
      <div>{user.email}</div>
      <button onClick={handleLogOut}>LOG OUT</button>
    </div>
  )
}
