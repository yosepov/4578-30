import { setDoc, doc } from 'firebase/firestore';
import { database } from '../firebase';
import { toast } from 'react-toastify';
import { VideoType } from '../../Types/VideoType';

export const uploadVideoToFirebase = async (video: VideoType) => {
    try {
        await setDoc(doc(database, 'videos', video.id), {
            id: video.id || "",
            title: video.title || "",
            description: video.description || "",
            dislikes: 0,
            likes: 0,
            isForKids: video.isForKids || "",
            monitize: false,
            thumbnail: "",
            tags: [],
            uid: video.uid || "",
            uploadDate: new Date().toLocaleDateString(),
            url: video.url || "",
            views: 0,
            comments: [],
        }).then(() => toast.success('Video ' + video.id + " added succefully!")
        ).catch(e => toast.error('Error: failed to upload new video ' + e))
    } catch (error) {
        toast.error('Error: failed to upload new video ' + error)
    }
}