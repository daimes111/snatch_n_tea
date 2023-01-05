import { Link } from "react-router-dom"

export default function NavBar() {
    return (
        <nav>
            <Link to="/api/posts">Posts</Link>
            &nbsp; 
            {/* | &nbsp; */}
            {/* <Link to="/posts/new">New Posts</Link> */}
        </nav>
    )
}