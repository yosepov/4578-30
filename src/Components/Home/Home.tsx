import { Link, useNavigate, useParams } from "react-router-dom"



export const Home = () => {


    const HandelContact = () => {
        const nav = useNavigate()


        const { id } = useParams();
        // nav('/Contacts')
    }


    return <>
        <h1>Home</h1>
        <button onClick={() => { HandelContact }}>Take me about </button>
        <Link to={'/Contact'}>Take Me To Contact</Link>
    </>
}
