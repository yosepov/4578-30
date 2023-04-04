
import { Link, useParams } from 'react-router-dom';
import { getAuth } from 'firebase/auth';

export const Home = () => {
    const { id } = useParams();
    const handleContact = () => {
        alert(id);
    }

    return <>
        <h1>Home</h1>
        <button onClick={handleContact}>Take me to contact</button>
        <Link to="/about" >Click</Link>
    </>
}

export const Profile = () => {

    const { id } = useParams();
    const user = getAuth().currentUser;
    const handleContact = () => {
        console.log(id, user?.uid);
    }

    return <>
        {user && <h1>{user.uid === id ? user?.email : 'Not found'} </h1>}
        <button onClick={handleContact}>Take me to contact</button>
        <Link to="/about" >Click</Link>
    </>
}