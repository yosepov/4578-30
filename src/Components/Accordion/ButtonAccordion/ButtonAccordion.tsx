import * as React from 'react';
import { styled } from '@mui/material/styles';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/joy/Radio';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/joy/Checkbox';




const Accordion = styled((props: AccordionProps) => (
  <MuiAccordion disableGutters elevation={0} square {...props} />
))(({ theme }) => ({
  border: `1px solid ${theme.palette.divider}`,
  '&:not(:last-child)': {
    borderBottom: 0,
  },
  '&:before': {
    display: 'none',
  },
}));



export default function ButtonAccordion() {

  const [expanded, setExpanded] = React.useState<string | false>('false');
  const [selectedValue, setSelectedValue] = React.useState<boolean>(false);


  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleRadioChange = (event:any) => {
    setSelectedValue(event.target.value);
  };


  const showMoreLess = expanded === 'panel1' ? 'SHOW LESS' : 'SHOW MORE';

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{border:'none', margin:'0',padding:'0'}}>
        <MuiAccordionSummary sx={{padding:'0'}} aria-controls="panel1d-content" id="panel1d-header">
          <Typography sx={{color:'#065fd4',fontSize: '0.83em',fontWeight: 'bold'}}>{showMoreLess}</Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={{color:'black',fontSize: '0.83em',fontWeight: 'bold', margin:'0',padding:'0'}}>
        <h4>Paid promotion</h4>
        <p className='thumbPar' style={{color:'#606060'}}>If you accepted anything of value from a third party to make your video, you must let us know. We’ll show viewers a message that tells them your video contains paid promotion.</p>
        
        <Radio
        color='neutral'
        value="outlined"
        checked={ selectedValue ? true : false}
        onChange={handleRadioChange}
        sx={{fontWeight: `400`, color:'#0d0d0d',fontFamily:'sans-serif'}}
        label="My video contains paid promotion like a product placement, sponsorship, or endorsement"
      />        
        <p className='thumbPar' style={{color:'#606060'}}>By selecting this box, you confirm that the paid promotion follows our ad policies and any applicable laws and regulations. Learn more.</p>
        </MuiAccordionDetails>
        <MuiAccordionDetails sx={{color:'black',fontSize: '0.83em',fontWeight: 'bold', margin:'0',padding:'0'}}>
        <h4>Automatic chapters</h4>
        <p className='thumbPar' style={{color:'#606060'}}>Chapters and key moments make your video easier to watch. You can overwrite automatic suggestions by creating your own chapters in the video description. Learn more</p>
        <Checkbox color="neutral" checked variant="solid" aria-selected value="outlined" sx={{fontWeight: `400`, color:'#0d0d0d',fontFamily:'sans-serif'}} label="Allow automatic chapters and key moments"/>
        </MuiAccordionDetails>
        <MuiAccordionDetails sx={{color:'black',fontSize: '0.83em',fontWeight: 'bold', margin:'0',padding:'0'}}>
        <h4>Featured Places</h4>
        <p className='thumbPar' style={{color:'#606060'}}>Help viewers explore key places in your video. These are public places like restaurants and shops – we don’t display your current location or other private info. Learn more</p>
        <Checkbox color="neutral" checked aria-selected value="outlined" sx={{fontWeight: `400`, color:'#0d0d0d',fontFamily:'sans-serif'}} label="Allow automatic places"/>
        </MuiAccordionDetails>
        <MuiAccordionDetails sx={{color:'black',fontSize: '0.83em',fontWeight: 'bold', margin:'0',padding:'0'}}>
        <h4>Tags</h4>
        <p className='thumbPar' style={{color:'#606060'}}>Tags can be useful if content in your video is commonly misspelled. Otherwise, tags play a minimal role in helping viewers find your video. Learn more</p>
        <TextField placeholder='Add tag' helperText="Enter a comma after each tag" fullWidth id="fullWidth" />
        </MuiAccordionDetails>
      </Accordion>
    </div>
  );
}
