import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { database } from '../firebase';

export const addNewUserToDB = async (uid: string, email: string | null, imageUrl: string | null) => {
    try {
        await setDoc(doc(database, 'users', uid), {
            uid: uid,
            email: email,
            videos: [],
            avatarURL:imageUrl ||  "",
        }).then(() => toast.success('User ' + uid + " added succefully!")
        ).catch(e => toast.error('Error: failed to upload new user ' + e));
    } catch (error) {
        toast.error('Error: failed to upload new user ' + error)
    }
}