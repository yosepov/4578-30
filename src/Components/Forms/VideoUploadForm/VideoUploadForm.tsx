import { useState, useEffect } from 'react';
import HorizontalLinearStepper from '../../Stepper/Stepper';
import { Box } from '@mui/material';
import { IconButton } from '@mui/material';
import Textarea from '@mui/joy/Textarea';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControl from '@mui/joy/FormControl';
import { Button } from '@mui/joy';
import UploadIcon from '@mui/icons-material/Upload';
import HdOutlinedIcon from '@mui/icons-material/HdOutlined';
import CheckCircleOutlineOutlinedIcon from '@mui/icons-material/CheckCircleOutlineOutlined';
import CustomizedAccordions from '../../Accordion/Accordion';
import ButtonAccordion from '../../Accordion/ButtonAccordion/ButtonAccordion';
import { ShowVideoFromFirebase } from '../../ShowVideoFromFirebase/ShowVideoFromFirebase';

import './VideoUploadForm.css'



export default function VideoUploadForm() {

    const [hasScrolled, setHasScrolled] = useState(false);

    useEffect(() => {
        function handleScroll() {
          if (window.pageYOffset > 0) {
            setHasScrolled(true);
          } else {
            setHasScrolled(false);
          }
        }
    
        window.addEventListener('scroll', handleScroll);
    
        return () => {
          window.removeEventListener('scroll', handleScroll);
        };
      }, []);


    



  return (
    <>
      <Box sx={{width:`100%`,height:'100%',display:'flex', justifyContent:'center',flexDirection:'column',padding:'0',margin:'0'}}>
            <Box sx={{width:`100%`,padding:'1%',display:'flex', justifyContent:'center',borderBottom: hasScrolled ? 'solid 1px grey' : 'none'}}>
                <HorizontalLinearStepper />
            </Box>
            <Box sx={{width:`90%`,height:`90%`,display:'flex', justifyContent:'center',gap:`1%`}}>

                <Box id="formID" sx={{width:`75%`,height:`60vh`,display:'flex',marginLeft:`10%`,flexDirection:`column`, overflowY:'scroll',overflowX:'hidden'}}>
                    <Box sx={{width:`100%`,height:`8vh`,display:'flex',justifyContent:'space-between',alignItems:`center`}}>
                        <h2>Details</h2> <IconButton sx={{color:'#065fd4', fontSize:'16px',letterSpacing: `0.01em`,fontWeight:`400`}}><p>Reuse details</p></IconButton>    
                    </Box>
                    <Box>  
                        <Textarea minRows={3} placeholder='Add a title that describes your video (type @ to mention a channel)'/>
                        <br/>
                        <Textarea minRows={7} placeholder='Tell viewers about your video (type @ to mention a channel))'/>
                    </Box>

                    <Box sx={{display:'flex',flexDirection:'column', padding:'0'}}>
                        <h4>Thumbnail</h4>
                        <p className='thumbPar'>Select or upload a picture that shows what's in your video. A good thumbnail stands out and draws viewers' attention. Learn more</p>
                    </Box>


                    <Box sx={{display:'flex',flexDirection:'column', padding:'0'}}>
                        <h4>Playlists</h4>
                        <p className='thumbPar'>Add your video to one or more playlists. Playlists can help viewers discover your content faster. Learn more</p>
                        <Select placeholder={`Select`} sx={{width:'15rem',height:'2rem'}}>
                            <Option>Playlist 1</Option>
                            <Option>Playlist 2</Option>
                        </Select>
                    </Box>

                    <Box sx={{display:'flex',flexDirection:'column', padding:'0'}}>
                        <h4>Audience</h4>
                        <h5>Is this video made for kids? (required)</h5>
                        <p className='thumbPar'>Regardless of your location, you're legally required to comply with the Children's Online Privacy Protection Act (COPPA) and/or other laws. You're required to tell us whether your videos are made for kids. What's content made for kids?</p>
                            <FormControl>
                                <RadioGroup id="radioGroupID" name="madeForKids">
                                    <Radio color='neutral' value="yes" label="Yes, it's made for kids" />
                                    <Radio color='neutral' value="no" label="No, it's not made for kids" />
                                </RadioGroup>
                            </FormControl>
                        <Box>
                        <CustomizedAccordions/>
                        </Box>
                        <Box>
                        <ButtonAccordion/>
                        </Box>
                    </Box>
                </Box>


                <Box id="iframeID">
                <ShowVideoFromFirebase/>
                </Box>

            </Box>

      </Box>
      <Box id="bottomBar">
              <Box id="barIndicators">
              <UploadIcon/>
              <HdOutlinedIcon/>
              <CheckCircleOutlineOutlinedIcon/>
              <p>Checks complete. No issues found.</p>
              </Box>
              <Button sx={{marginRight:`2%`,backgroundColor:'#065fd4',borderRadius:'2px'}}>Next</Button>
      </Box>
    </>
  );
}
