import React from 'react';
import {Link} from 'react-router-dom'
import {Button,Stack,Typography} from '@mui/material';

function ExerciseCard({exercise}) {
   
  return (
    <Link className='exercise-card' to={`/exercise/${exercise.id}`}>
        <img src={exercise.gifUrl} alt={exercise.name}  /> 
        <Stack direction="row">
            <Button sx={{ml:'21px',color:'white',background:'#ffa9a9',fontsize:'14px', borderRadius:"20px",texttransform:'capitalize' }}>
                {exercise.bodyPart}
            </Button>
            <Button sx={{ml:'21px',color:'white',background:'#fcc757',fontsize:'14px', borderRadius:"20px",texttransform:'capitalize' }}>
                {exercise.target}
            </Button>

        </Stack>
        <Typography marginLeft="21px" color="black" fontweight="bold" mt='11px' pb='10px' textTransform="capitalize" fontsize='22px' > 
            {exercise.name}
        </Typography>

    </Link>
  )
}

export default ExerciseCard