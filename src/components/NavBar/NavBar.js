import { Link } from "react-router-dom"
import UserLogOut from "../UserLogOut/UserLogOut"
import styles from "./NavBar.module.scss"

export default function NavBar({ user, setUser }) {
    return (
        <nav className={styles.NavBar}>
            <Link to="/api/posts">Home</Link>
            &nbsp; 
            <UserLogOut className={styles.UserLogOut} user={user} setUser={setUser} />
            {/* | &nbsp; */}
            {/* <Link to="/posts/new">New Posts</Link> */}
        </nav>
    )
}