import { logOut } from '../../utilities/users-service';
import styles from "./UserLogOut.module.scss"


export default function UserLogOut({ user, setUser }) {
function handleLogOut() {
  logOut();
  setUser(null);
}

return (
  <div className={styles.UserLogOut}>
    <div>{user.name}</div>
    <div className="email">{user.email}</div>
    <button className="btn-sm" onClick={handleLogOut}>LOG OUT</button>
  </div>
);
}