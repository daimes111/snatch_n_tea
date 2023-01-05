import { useState, useEffect } from "react"
import NavBar from "../../components/NavBar/NavBar"
import AuthPage from "../AuthPage/AuthPage"
import NewPostPage from "../NewPostPage/NewPostPage"
import PostsPage from "../PostsPage/PostsPage"
import { Routes, Route } from "react-router-dom"
import { getUser } from "../../utilities/users-service"

function App(){
    const [ state, setState ] = useState(null)
    const [ user, setUser ] = useState(getUser())

    const fetchState = async () => {
        try {
          const response = await fetch('/api/test')
          const data = await response.json()
          setState(data)
        } catch (error) {
          console.error(error)
        }
      }
    
      useEffect(() => {
        fetchState()
      }, [])

    return (
        <main className="App">
            {
                user ?
                <>
                    <NavBar />
                    <Routes>
                        {/* <Route path="/posts/new" element={<NewPostPage />} user={user}/> */}
                        <Route 
                        path="/posts" 
                        element={<PostsPage user={user} setUser={setUser}/>} 
                        />
                    </Routes>
                </> :
                <AuthPage setUser={setUser} />
            }
        </main>
    )
}

export default App