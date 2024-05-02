import { FormControlLabel,Box,Switch } from '@mui/material'
import React, { useState } from 'react'

export const Muiswitch = () => {
    const[val,setVal]=useState(false)
    console.log({val})
    const handlerevemt=(event:React.ChangeEvent<HTMLInputElement>)=>{
        setVal(event.target.checked)
    }
  return (
    <Box>
        <FormControlLabel label='Dark Mode' control={<Switch checked={val} onChange={handlerevemt}/>}/>
    </Box>
  )
}
