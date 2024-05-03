import React, { useState } from 'react'
import {Box, MenuItem, TextField} from '@mui/material'

export const Muiselect = () => {
    const [state,setState]=useState('')
    console.log({state})
    const handlerevent=(event:React.ChangeEvent<HTMLInputElement>)=>{
           setState(event.target.value)
    }
  return (
    <Box width='260px'>
      <TextField onChange={handlerevent} value={state} select label='select state' fullWidth color='primary' size='small' helperText='Please select a state listed' error={!state}>
        <MenuItem value='telangana'>Telangana</MenuItem>
        <MenuItem value='assam'>Assam</MenuItem>
        <MenuItem value='delhi'>Delhi</MenuItem>
        <MenuItem value='punjab'>Punjab</MenuItem>
      </TextField>
    </Box>
  )
}
