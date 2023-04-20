import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { database } from '../firebase';

export const addNewVideo = async (name: string, type: string, size: number) => {
    try {
        await setDoc(doc(database, 'Videos', name), {
            name: name,
            type: type,
            size: size,
        }).then(() => toast.success('Video ' + name + " added succefully!")
        ).catch(e => toast.error('Error: failed to upload new user ' + e));
    } catch (error) {
        toast.error('Error: failed to upload new user ' + error)
    }
}