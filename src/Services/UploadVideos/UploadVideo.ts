import { setDoc, doc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { database } from '../firebase';

export const uploadNewVideoToBucket = async (name: string, type: string, size: number) => {
    try {
        await setDoc(doc(database, 'Videos', name),
            {
            name: name,
            type: type,
            size: size,
        }).then(() => toast.success('Video ' + name + " Was Uplodaed successfully!"))
        
    } catch (error) {
        toast.error('Sorry: an error occurred while uploading please try again ' + error)
    }
}