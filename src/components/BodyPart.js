import React from 'react';
import { Stack, Typography } from '@mui/material';

import Icon from '../assets/icons/gym.png';



function BodyPart({ item, setBodyPart, bodyPart }) {
    // console.log(item,bodyPart);
    return (
        <Stack
            type="button"
            alignItems="center"
            justifyContent="center"
            className="bodyPart-card"
            sx={{
                borderTop : bodyPart === item ? '4px solid #ff2625' : '',
                backgroundColor: 'white',
                borderBottomLeftRadius: '20px',
                width: '270px',
                height: '280px',
                cursor: 'pointer',
                gap: '47px'
            }}
            onClick={()=>{
                setBodyPart(item);
                window.scrollTo({top:1800,left:100,behavior:"smooth"})
            }}
           
            
        >
    <img src={Icon} alt="Icon" style={{ width: '40px', height: '40px' }} />
    <Typography fontSize="24px" fontWeight="bold" color="#3a1212" texttransform="capitalize">{item}</Typography>
        </Stack >
    )

}

export default BodyPart