import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const steps = ['Details', 'Video elements', 'Checks','Visibility'];

function CustomStepIcon(props: any) {
  const { active, completed } = props;
  return (
    <div style={{ display: 'flex', alignItems: 'center' }}>
      {completed ? <CheckCircleIcon color="primary" /> : <div style={{ height: 24, width: 24, borderRadius: '50%', backgroundColor: active ? '#1976d2' : '#eaeaf0' }} />}
    </div>
  );
}

export default function HorizontalLinearStepper() {
  const [activeStep] = React.useState(0);
  const [skipped] = React.useState(new Set<number>());

  const isStepSkipped = (step: number) => {
    return skipped.has(step);
  };

  return (
    <Box sx={{ width: '80%' , margin:`0`,padding:`0`}}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          const stepProps: { completed?: boolean } = {};
          const labelProps: {
            optional?: React.ReactNode;
            StepIconComponent?: React.ElementType;
          } = {};

          if (isStepSkipped(index)) {
            stepProps.completed = false;
          }
          labelProps.StepIconComponent = CustomStepIcon;
          
          return (
            <Step key={label} {...stepProps}>
              <StepLabel {...labelProps}>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
    </Box>
  );
}
