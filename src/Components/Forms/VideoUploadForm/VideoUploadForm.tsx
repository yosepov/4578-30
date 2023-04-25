import { useState, useEffect,useRef } from 'react';
import HorizontalLinearStepper from '../../Stepper/Stepper';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import { Button } from '@mui/joy';
import UploadIcon from '@mui/icons-material/Upload';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CustomizedAccordions from '../../Accordion/Accordion';
import ButtonAccordion from '../../Accordion/ButtonAccordion/ButtonAccordion';
import { ShowVideoFromFirebase } from '../../ShowVideoFromFirebase/ShowVideoFromFirebase';
import { SubmitHandler, useForm } from 'react-hook-form';
import SubtitlesOutlinedIcon from '@mui/icons-material/SubtitlesOutlined';
import PictureInPictureSharpIcon from '@mui/icons-material/PictureInPictureSharp';
import InfoOutlinedIcon from '@mui/icons-material/InfoOutlined';

import './VideoUploadForm.css'
import { VideoType } from '../../../Types/VideoType';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectVideoId, setVideoDescription, setVideoIsForKids, setVideoTitle } from '../../../features/uploadVideo/uploadVideoSlice';
import { uploadVideoToFirebase } from '../../../Services/videos/videosDB';
import { useNavigate } from 'react-router-dom';

export default function VideoUploadForm() {
    const { register, handleSubmit } = useForm<VideoType>();
    let counter = 1;
    const [activeElement, setActiveElement] = useState(counter);
    
    const handleElementChange = (counter:number) => {
        setActiveElement(counter++);
      };


    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<VideoType> = data => {
        dispatch(setVideoTitle(data.title));
        dispatch(setVideoDescription(data.description));
        dispatch(setVideoIsForKids(data.isForKids));
        handleElementChange(counter++)
        console.log(counter)
        // navigate('/saveNewVideo');
    }

    



    return (
        <>
            <form onSubmit={handleSubmit(onSubmit)}>
                <Box sx={{ width: `100%`, height: '100%', display: 'flex', justifyContent: 'center', flexDirection: 'column', padding: '0', margin: '0' }}>
                    <Box sx={{ width: `100%`, padding: '1%', display: 'flex', justifyContent: 'center'}}>
                        <HorizontalLinearStepper />
                    </Box>

                    <Box sx={{ width: `90%`, height: `90%`, display: 'flex', justifyContent: 'center', gap: `2%` }}>
                        {activeElement === 1 &&<Box  sx={{ width: `75%`, height: `60vh`, display: 'flex', marginLeft: `10%`, flexDirection: `column`, overflowY: 'scroll', overflowX: 'hidden' }}>
                            <Box sx={{ width: `100%`, height: `8vh`, display: 'flex', justifyContent: 'space-between', alignItems: `center` }}>
                                <h2>Details</h2> <IconButton sx={{ color: '#065fd4', fontSize: '16px', letterSpacing: `0.01em`, fontWeight: `400` }}><p>Reuse details</p></IconButton>
                            </Box>
                            <Box>
                                <Textarea minRows={3} placeholder='Add a title that describes your video (type @ to mention a channel)'
                                    {...register('title', { required: true, minLength: 6, maxLength: 100 })} />
                                <br />
                                <Textarea minRows={7} placeholder='Tell viewers about your video (type @ to mention a channel))'
                                    {...register('description', { required: true, minLength: 6, maxLength: 5000 })} />
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
                                <h4>Thumbnail</h4>
                                <p className='thumbPar'>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more</p>
                            </Box>
                            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
                                <h4>Playlists</h4>
                                <p className='thumbPar'>Add your video to one or more playlists. Playlists can help viewers discover your content faster. Learn more</p>
                                <Select placeholder={`Select`} sx={{ width: '15rem', height: '2rem' }} >
                                    <Option>Playlist 1</Option>
                                    <Option>Playlist 2</Option>
                                </Select>
                            </Box>

                            <Box sx={{ display: 'flex', flexDirection: 'column', padding: '0' }}>
                                <h4>Audience</h4>
                                <h5>Is this video made for kids? (required)</h5>
                                <p className='thumbPar'>Regardless of your location, you're legally required to comply with the Children's Online Privacy Protection Act (COPPA) and/or other laws. You're required to tell us whether your videos are made for kids. What's content made for kids?</p>

                                <RadioGroup id="radioGroupID" name="madeForKids">
                                    <Radio color='neutral' value={true} label="Yes, it's made for kids"
                                        {...register('isForKids', { required: true })} />
                                    <Radio color='neutral' value={false} label="No, it's not made for kids"
                                        {...register('isForKids', { required: true })} />
                                </RadioGroup>

                                <Box>
                                    <CustomizedAccordions/>
                                </Box>
                                <Box>
                                    <ButtonAccordion/>
                                </Box>
                            </Box>
                        </Box>}
                        {activeElement === 1 && <Box id="iframeID" > 
                            <ShowVideoFromFirebase/>
                        </Box>}
                        {activeElement === 2 && <Box sx={{ width: `100%`, height: `60vh`, display: 'flex', marginLeft: `10%`, flexDirection: `column`, overflowY: 'scroll', overflowX: 'hidden',paddingRight:'10%' }}>
                            <Box sx={{height: `8vh`, display: 'flex', flexDirection: `column`, alignItems: `flex-start`,padding:'0' }}>
                                <h2>Video elements</h2>
                                <p>Use cards and an end screen to show viewers related videos, websites, and calls to action. Learn more</p>
                            </Box>

                            <Box sx={{border:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'12%',backgroundColor:'grey',display:'inline-flex',alignItems:'center'}}>
                                <SubtitlesOutlinedIcon/>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Add subtitles</h5>
                                <p>Reach a broader audience by adding subtitles to your video</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(110px)`,backgroundColor:'transparent',fontSize:'medium'}}>ADD</IconButton>
                            </Box>
                            <Box sx={{border:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'2%',backgroundColor:'grey',display:'inline-flex',alignItems:'center'}}>
                                <PictureInPictureSharpIcon/>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Add an end screen</h5>
                                <p>Promote related content at the end of your video</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(182px)`,backgroundColor:'transparent',fontSize:'medium'}}>ADD</IconButton>

                            </Box>
                            <Box sx={{border:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'2%',backgroundColor:'grey',display:'inline-flex',alignItems:'center'}}>
                                <InfoOutlinedIcon/>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Add cards</h5>
                                <p>Promote related content during your video</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(225px)`,backgroundColor:'transparent',fontSize:'medium'}}>ADD</IconButton>

                            </Box>
                            
                        </Box>}
                        {activeElement === 3 && <Box sx={{ width: `100%`, height: `60vh`, display: 'flex', marginLeft: `10%`, flexDirection: `column`, overflowY: 'scroll', overflowX: 'hidden',paddingRight:'10%' }}>
                            <Box sx={{height: `8vh`, display: 'flex', flexDirection: `column`, alignItems: `flex-start`,padding:'0' }}>
                                <h2>Checks</h2>
                                <p>We’ll check your video for issues that may restrict its visibility and then you will have the opportunity to fix issues before publishing your video. Learn more</p>
                            </Box>

                            <Box sx={{border:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'12%',backgroundColor:'grey',display:'inline-flex',alignItems:'center'}}>
                                <SubtitlesOutlinedIcon/>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Copyright</h5>
                                <p>No issues found</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(110px)`,backgroundColor:'transparent',fontSize:'medium'}}>ADD</IconButton>
                            </Box>
                            
                            
                        </Box>}

                        
                        
                    </Box>
                </Box>
                <Box id="bottomBar">
                    <Box id="barIndicators">
                        <UploadIcon />
                        <HdOutlinedIcon />
                        <CheckCircleOutlineOutlinedIcon />
                        <p>Checks complete. No issues found.</p>
                    </Box>
                    <Button type='submit' sx={{ marginRight: `2%`, backgroundColor: '#065fd4', borderRadius: '2px' }}>Next</Button>
                </Box>
            </form>
        </>
    );
}
