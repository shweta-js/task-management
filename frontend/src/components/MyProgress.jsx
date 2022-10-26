import { withStepProgress, useStepProgress, Step, StepProgressBar } from 'react-stepz';
import 'react-stepz/dist/index.css';
import { useState } from 'react';

const MyProgress = () => {
  const [isValid, setIsValid] = useState(false);
    const validate=()=>{
        setIsValid(true);
    }
    const reject=()=>{
        setIsValid(false);
    }
  const steps = [
    {
      label: 'assigned',
      name: 'assigned'
    },
    {
      label: 'underprogress',
      name: 'underprogress'
    },
    {
      label: 'validate',
      name: 'validate',validator: () => isValid
    },
    {
      label: 'completed',
      name: 'completed'
    }
  ];

  const { stepForward, stepBackwards, currentIndex } = useStepProgress({
    steps,
    startingStep: 0
  });

  return (
    <div>
      <StepProgressBar steps={steps} />
      <Step step={0}>
        <h1>First step</h1>
      </Step>
      <Step step={1}>
        <h1>Second step</h1>
      </Step>
      <Step step={2}>
        <h1>Third Step</h1>
      </Step>
      <button onClick={stepForward}>Next</button>
      <button onClick={stepBackwards}>Back</button>
      <button onClick={validate}>Validate</button>
      <button onClick={reject}>Reject</button>
    </div>
  );
};

export default withStepProgress(MyProgress);