import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { database } from '../firebase';

export const addNewUserURLToDB = async (uid: string, videos:any) => {
    try {
        await setDoc(doc(database, 'users', uid), {
            uid: uid,
            videos: [videos],
            avatarURL: "",
        }).then(() => toast.success('User ' + uid + " added succefully!")
        ).catch(e => toast.error('Error: failed to upload new user ' + e));
    } catch (error) {
        toast.error('Error: failed to upload new user ' + error)
    }
}