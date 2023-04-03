import { Link, useNavigate, useParams } from "react-router-dom"




export const Profile = () => {
    const handelContact = () => {
        // const nav = useNavigate()
    
        const { id } = useParams();
        alert(id)
    
    }

    return <>
        <h1>Home</h1>
        <button onClick={() => { handelContact }}>Take me about </button>
        <Link to={'/Contact'}>Take Me To Contact</Link>
    </>
}
