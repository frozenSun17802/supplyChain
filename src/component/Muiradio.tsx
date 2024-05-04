import { FormControlLabel, FormLabel, RadioGroup,Box,Radio,FormControl } from '@mui/material'
import React,{useState} from 'react'


export const Muiradio = () => {
    const [val,setValue]=useState('')
    console.log({val})
    const handlerevent=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setValue(event.target.value)
    }
  return (
    <Box>
        <FormControl>
       <FormLabel id='job-experience=group-label'>
          Years-of-experience
       </FormLabel>
       <RadioGroup name='job-experience-group' value={val} aria-labelledby='job-experience=group-label' onChange={handlerevent}>
         <FormControlLabel control={<Radio size='medium' color='primary' />} value='o-2' label='0-2'/>
         <FormControlLabel control={<Radio size='medium' color='secondary' />} value='3-5' label='3-5'/>
         <FormControlLabel control={<Radio size='medium' color='secondary' />} value='6-9' label='6-9'/>
       </RadioGroup>
       </FormControl>
    </Box>
  )
}
