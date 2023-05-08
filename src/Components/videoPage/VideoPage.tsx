import { useEffect, useState } from 'react';
import { Avatar, Button, ButtonGroup, IconButton, Typography } from '@mui/material'
import { Box } from '@mui/system'


import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import ShareIcon from '@mui/icons-material/Share';
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';

import { Comments } from './Comments';
import { ModalSubscribe } from './ModalSubscribe';
import { MoreOption } from './MoreOption';
import { AllVideo } from './AllVideo';
import { getDoc, doc, DocumentData, } from "firebase/firestore";
import { database } from '../../Services/firebase';
import { useParams } from 'react-router-dom';




export const VideoPage = () => {
    const { id } = useParams();

    const [like, setLike] = useState(false)
    const [disLike, setDisLike] = useState(false)

    const [details, setDetails] = useState<DocumentData>([])

    const [showMore, setShowMore] = useState(false)

    
    const handleLikeDisLike = () => {
        if(like) {
            setDisLike(false)
        } 
        if(disLike) {
            setLike(false) 
        }
    }

    const handleLike = () => {
        setLike(!like)
        handleLikeDisLike()

    }

    const handleDisLike = () => {
        setDisLike(!disLike)
        handleLikeDisLike()
    }


    const handleShowMor = () => {
        setShowMore(!showMore)
    }

    useEffect(() => {

        const getDataOfIdVideoFromFirebase = async () => {
            const docRef = doc(database, "videos", `${id}`);
            const docSnap = await getDoc(docRef);

            if (docSnap.exists()) {

                setDetails([docSnap.data()])
                
            }
        }
        getDataOfIdVideoFromFirebase()
    }, [id])



return <>
    {details.map((video: DocumentData) => {
        return<>
<Box sx={{
    flexDirection: 'row',
    display: 'flex',
    justifyContent: 'space-between',
    padding: '5%',
    marginLeft: '24px'
}}>
    <Box>
        <video src={video.url} width="640" height="360" controls ></video>
        <Typography sx={{
            fontSize: '18px',
            fontWeight: '600'
        }}>
            {video.title}
        </Typography>
        <Box sx={{
            display: 'flex',
            alignItems: 'center',
            flexDirection: 'row',
            marginTop: '20px',
        }}>
            <IconButton><Avatar src='https://newprofilepic2.photo-cdn.net//assets/images/article/profile.jpg' /></IconButton>
            <Box sx={{
                width: '100px',
                flexDirection: 'colmun',
            }}>
                <Typography sx={{
                    fontSize: '14px',
                    fontWeight: '600',
                    whiteSpace: 'nowrap',
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                }}>Web Dev Simplified</Typography>
                <Typography sx={{
                    fontSize: '14px',
                    fontWeight: '600'
                }}>1.27M</Typography>
            </Box>
            <ModalSubscribe />
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
            }}>
                <ButtonGroup sx={{
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    marginLeft: '40px',
                    borderRadius: '50px',
                }} variant="text" aria-label="text button group" >
                    <Button onClick={handleLike} sx={{ borderRadius: '50px'}}>
                        {like ? <ThumbUpIcon fontSize='small' /> : <ThumbUpOutlinedIcon fontSize='small' />}
                        <Typography sx={{ paddingLeft: '5px' }}>{video.likes}</Typography>
                    </Button>
                    <Button onClick={handleDisLike} sx={{ borderRadius: '50px'}}>
                        {disLike ?  <ThumbDownIcon fontSize='small' /> : <ThumbDownOutlinedIcon fontSize='small' />}
                    </Button>
                </ButtonGroup>
            </Box>
            <Box sx={{
                display: 'flex',
                alignItems: 'flex-start',
            }}>
                <Button sx={{
                    borderRadius: '50px',
                    backgroundColor: 'rgba(0,0,0,0.05)',
                    width: '60px',
                    height: '35px',
                    padding: '0px 50px',
                    marginLeft: '15px'
                }}>
                    <ShareIcon fontSize='small' />
                    <Typography sx={{
                        textTransform: 'capitalize',
                        padding: '10px',
                        fontSize: '14px',
                        fontWeight: '600'
                    }}>Share</Typography>
                </Button>
            </Box>
            <Box sx={{
                marginLeft: '15px'
            }}>
            </Box>
            <MoreOption />
        </Box>
        <Box
            onClick={handleShowMor}
            sx={{
                backgroundColor: 'rgba(0,0,0,0.05)',
                borderRadius: '12px',
                marginTop: '20px',
                width: '100%',
                cursor: 'pointer',
                padding: '10px'
            }}>
            <Box sx={{
                display: 'flex'
            }}>
                <Typography sx={{
                    fontWeight: '550'
                }}>{video.views} views {video.uploadDate} &nbsp; </Typography>
                <Typography sx={{
                    fontSize: '16px'
                }}> #Jest #UnitTest #WDS</Typography>
            </Box>
            <Box sx={{ width: '640px' }}>
                <Typography sx={{
                        fontSize: '14px'
                    }}>
                    {video.description}
                <Typography

         sx={{
            display: 'inline',
            color: 'black',
            fontSize: '14px',
            fontWeight: '600',
            padding: '5px',
            backgroundColor: '#FFFFFF66',
            borderRadius: '20px'
        }}>{showMore ? 'Show less' : 'Show more'}</Typography>
    </Typography>
    
        </Box>
     </Box>
        <Box sx={{ marginTop: '50px', }}>
            <Comments />
        </Box>
    </Box>
    <Box>
        <AllVideo />
    </Box>
</Box>
</>
    })}
</>
}

