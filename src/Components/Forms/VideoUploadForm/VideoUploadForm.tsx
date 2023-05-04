import { useState,useRef } from 'react';
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
import CheckOutlinedIcon from '@mui/icons-material/CheckOutlined';
import FormHelperText from '@mui/joy/FormHelperText';
import TimezoneSelect from 'react-timezone-select'


import './VideoUploadForm.css'
import { VideoType } from '../../../Types/VideoType';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { selectVideoId, setVideoDescription, setVideoIsForKids, setVideoTitle } from '../../../features/uploadVideo/uploadVideoSlice';
import { useNavigate } from 'react-router-dom';

export default function VideoUploadForm() {
    const { register, handleSubmit } = useForm<VideoType>();
    const [visibilityOption, setVisibilityOption] = useState('');
    const [activeElement, setActiveElement] = useState(1);
    const [selectedTimezone, setSelectedTimezone] =useState(Intl.DateTimeFormat().resolvedOptions().timeZone)
    const [, setDate] = useState('');
    const dateInputRef = useRef(null)

      const handleTimezoneChange = (timezone:any) => {
        setSelectedTimezone(timezone.value);
      };
    
    let counter = 1;
    const handleElementChange = (index: number) => {
    setActiveElement(index);}

    
    const handleChange = (e:any) => {
    setDate(e.target.value);}
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const onSubmit: SubmitHandler<VideoType> = data => {
        dispatch(setVideoTitle(data.title));
        dispatch(setVideoDescription(data.description));
        dispatch(setVideoIsForKids(data.isForKids));
        handleElementChange(counter++)
        setActiveElement(2)
    }

    const goToSaveNewVideo = () => {
        navigate('/saveNewVideo');
        window.location.reload();
        
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
                                <p className='subPar'>Use cards and an end screen to show viewers related videos, websites, and calls to action. Learn more</p>
                            </Box>

                            <Box sx={{padding:'5px 16px 0px 24px;',marginTop:'12%',display:'inline-flex',alignItems:'center'}}>
                                <SubtitlesOutlinedIcon/>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Add subtitles</h5>
                                <p>Reach a broader audience by adding subtitles to your video</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(110px)`,backgroundColor:'transparent',fontSize:'medium'}}>ADD</IconButton>
                            </Box>
                            <Box sx={{padding:'5px 16px 0px 24px;',marginTop:'2%',display:'inline-flex',alignItems:'center'}}>
                                <PictureInPictureSharpIcon/>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Add an end screen</h5>
                                <p>Promote related content at the end of your video</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(182px)`,backgroundColor:'transparent',fontSize:'medium'}}>ADD</IconButton>

                            </Box>
                            <Box sx={{padding:'5px 16px 0px 24px;',marginBottom:'10%',marginTop:'2%',display:'inline-flex',alignItems:'center'}}>
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

                            <Box sx={{borderBottom:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'12%',display:'inline-flex',alignItems:'center'}}>
                                <Box sx={{marginLeft:'3%'}}>
                                <h5>Copyright</h5>
                                <p>No issues found</p>
                                </Box>
                                <IconButton sx={{transform:`translateX(510px)`,backgroundColor:'transparent',fontSize:'medium'}}><CheckOutlinedIcon/></IconButton>
                            </Box>
                                <p>Remember: These check results aren’t final. Issues may come up in the future that impact your video. Learn more</p>
                            
                            
                        </Box>}
                        {activeElement === 4 && <Box sx={{ width: `100%`, height: `60vh`, display: 'flex', marginLeft: `10%`, flexDirection: `column`, overflowY: 'scroll', overflowX: 'hidden',paddingRight:'10%' }}>
                            <Box sx={{height: `8vh`, display: 'flex', flexDirection: `column`, alignItems: `flex-start`,padding:'0' }}>
                                <h3>Visibility</h3>
                                <p className='visPar'>Choose when to publish and who can see your video</p>
                            </Box>

                         <Box sx={{border:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'12%',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                            <RadioGroup>
                                <Radio label={'Save or publish'} id="radioOne"/>
                                <FormHelperText>
                                Make your video public, unlisted, or private.
                                </FormHelperText>
                            </RadioGroup>
                                <Box sx={{marginLeft:'5%',marginTop:'3%'}}>                                   
                                <RadioGroup value={visibilityOption} onChange={(e) => setVisibilityOption(e.target.value)}>
                                    <Radio value={'private'} label={'Private'} />
                                    <FormHelperText>
                                        Only you and people you choose can watch your video
                                    </FormHelperText>
                                    <Radio value={'unlisted'} label={'Unlisted'} />
                                    <FormHelperText>
                                        Anyone with the video link can watch your video
                                    </FormHelperText>
                                    <Radio value={'public'} label={'Public'} />
                                    <FormHelperText>
                                        Everyone can watch your video
                                    </FormHelperText>
                                </RadioGroup>
                                </Box>

                         </Box>
                         <Box sx={{border:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'4%',marginBottom:'4%',display:'flex',flexDirection:'column',alignItems:'flex-start'}}>
                            <RadioGroup>
                                <Radio label={'Schedule'} id="radioTwo"/>
                                <FormHelperText>
                                Select a date to make your video public.
                                </FormHelperText>
                            </RadioGroup>
                                <Box sx={{marginLeft:'5%',marginTop:'3%', display:'inline-flex'}}>
                                <div>
                                <input
                                type="date"
                                onChange={handleChange}
                                ref={dateInputRef}/>
                                </div>
                                <input type='time'/><br/>
                                </Box>
                                <Box sx={{marginLeft:'5%',marginTop:'3%', display:'inline-flex'}}>
                                    <TimezoneSelect
                                    value={selectedTimezone}
                                    onChange={handleTimezoneChange}
                                    />
                                </Box>

                         </Box>
                            <Box sx={{borderTop:'1px solid grey',padding:'5px 16px 0px 24px;',marginTop:'1%',marginBottom:'4%',display:'flex',flexDirection:'column',alignItems:'flex-start',gap:'0'}}>
                                <h4>Before you publish, check the following:</h4>
                                <h5>Do kids appear in this video?</h5>
                                <p>Make sure you follow our policies to protect minors from harm, exploitation, bullying, and violations of labor law. Learn more</p>
                                <h5>Looking for overall content guidance?</h5>
                                <p>Our Community Guidelines can help you avoid trouble and ensure that YouTube remains a safe and vibrant community. Learn more</p>
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
                    {activeElement === 1 && <Button type='submit' sx={{ marginRight: `2%`, backgroundColor: '#065fd4', borderRadius: '2px' }}>Next</Button>}
                    {activeElement === 2 && (<Box  display={'flex'} gap={'2%'} flexDirection={'revert'} sx={{transform: `translateX(-2.1rem)`,flexDirection:'row-reverse'}}><Button onClick={() => setActiveElement(3)} sx={{backgroundColor: '#065fd4', borderRadius: '2px' }}>Next</Button><Button sx={{color: '#606060', borderRadius: '2px',backgroundColor:'transparent' }} onClick={() => setActiveElement(1)} id='navButtons'>Back</Button></Box>)}
                    {activeElement === 3 && (<Box  display={'flex'} gap={'2%'} flexDirection={'revert'} sx={{transform: `translateX(-2.1rem)`,flexDirection:'row-reverse'}}><Button onClick={() => setActiveElement(4)} sx={{backgroundColor: '#065fd4', borderRadius: '2px' }}>Next</Button><Button sx={{color: '#606060', borderRadius: '2px',backgroundColor:'transparent' }} onClick={() => setActiveElement(2)} id='navButtons'>Back</Button></Box>)}
                    {activeElement === 4 &&  (<Box  display={'flex'} gap={'2%'} flexDirection={'revert'} sx={{transform: `translateX(-2.1rem)`,flexDirection:'row-reverse'}}><Button onClick={() => goToSaveNewVideo()} sx={{backgroundColor: '#065fd4', borderRadius: '2px' }}>Finish</Button><Button sx={{color: '#606060', borderRadius: '2px',backgroundColor:'transparent' }} onClick={() => setActiveElement(3)} id='navButtons'>Back</Button></Box>)}
                </Box>
            </form>
        </>
    );
}
