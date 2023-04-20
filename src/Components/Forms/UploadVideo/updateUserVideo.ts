import {doc, updateDoc} from 'firebase/firestore'
import { database } from '../../../Services/firebase'



export const updateUserVideo = (uid: string, videoUrl: string) => {
    const user = uid
    const db = database
    const docRef = doc(db, 'users', uid)
    const data = {videoUrl: videoUrl}
    updateDoc(docRef, data)
}

  
