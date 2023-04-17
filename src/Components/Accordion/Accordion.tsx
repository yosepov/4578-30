import * as React from 'react';
import { styled } from '@mui/material/styles';
import ExpandLessOutlinedIcon from '@mui/icons-material/ExpandLessOutlined';import ArrowDropUpSharpIcon from '@mui/icons-material/ArrowDropUpSharp';
import ExpandMoreOutlinedIcon from '@mui/icons-material/ExpandMoreOutlined';
import MuiAccordion, { AccordionProps } from '@mui/material/Accordion';
import MuiAccordionSummary, { AccordionSummaryProps } from '@mui/material/AccordionSummary';
import MuiAccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Radio from '@mui/joy/Radio';
import RadioGroup from '@mui/joy/RadioGroup';
import FormControl from '@mui/joy/FormControl';

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

export default function CustomizedAccordions() {
  const [expanded, setExpanded] = React.useState<string | false>('panel1');

  const handleChange = (panel: string) => (event: React.SyntheticEvent, newExpanded: boolean) => {
    setExpanded(newExpanded ? panel : false);
  };

  return (
    <div>
      <Accordion expanded={expanded === 'panel1'} onChange={handleChange('panel1')} sx={{border:'none', margin:'0',padding:'0'}}>
        <MuiAccordionSummary sx={{padding:'0'}} aria-controls="panel1d-content" id="panel1d-header" expandIcon={expanded === 'panel1' ? <ExpandMoreOutlinedIcon /> : <ExpandLessOutlinedIcon/>}>
          <Typography sx={{color:'black',fontSize: '0.83em',fontWeight: 'bold'}}>Age restriction (advanced)</Typography>
        </MuiAccordionSummary>
        <MuiAccordionDetails sx={{color:'black',fontSize: '0.83em',fontWeight: 'bold', margin:'0',padding:'0'}}>
        <h4>Do you want to restrict your video to an adult audience?</h4>
        <p className='thumbPar' style={{color:'#606060'}}>Age-restricted videos are not shown in certain areas of YouTube. These videos may have limited or no ads monetization. Learn more</p>
        </MuiAccordionDetails>
                        <FormControl>
                                <RadioGroup  id="radioGroupID" name="over18">
                                    <Radio color='neutral' value="yes" label="Yes, restrict my video to viewers over 18" />
                                    <Radio color='neutral' value="no" label="No, don't restrict my video to viewers over 18 only" />
                                </RadioGroup>
                          </FormControl>
      </Accordion>
    </div>
  );
}
