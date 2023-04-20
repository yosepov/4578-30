import { setDoc, doc, getDoc } from 'firebase/firestore';
import { toast } from 'react-toastify';
import { database } from '../firebase';

export const addNewVideoToDB = async (uid: string | undefined, vid: string | null) => {
    try {

        if (uid != undefined && vid != null) {
            const docRef = doc(database, 'users', uid)
            const vDocRef = doc(database, 'videos', vid)

            await getDoc(docRef)
                .then((snap) => {
                    const data = snap.exists() ? snap.data() : null
                    if (data === null || data === undefined) return null

                    if (!data.videos.includes(vid))
                        data.videos.push(vid)
                    return data
                })
                .then(data => {
                    let newUser = {
                        uid: uid,
                        email: data?.email,
                        videos: data?.videos,
                        avatarURL: "",
                    }

                    let newVid = {
                        vid: vid,
                        path: `/videos/${vid}`,
                    }
                    let p1 = setDoc(docRef, newUser)
                    let p2 = setDoc(vDocRef, newVid)

                    Promise.all([p1, p2]).then(() =>
                        toast.success(`Video ${vid} added succefully to user ${uid}`))
                })


        }

    }
    catch (error) {
        toast.error('Error: failed to upload new video to user ' + error)
    }
}