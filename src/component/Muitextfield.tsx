import React,{useState} from 'react'
import { InputAdornment, Stack,TextField } from '@mui/material'

export const Muitextfield = () => {
    const [value,setValue]=useState('')
  return (
    <Stack spacing={4}>
        <Stack direction='row' spacing={4}>
          <TextField label='Name' variant='outlined'></TextField>
          <TextField label='Name' variant='filled'></TextField>
          <TextField label='Name' variant='standard'></TextField>
        </Stack>

        <Stack spacing={2}>
            <TextField label='Secondary Name' color='secondary'></TextField>
        </Stack>

        <Stack spacing={4} direction='row'>
            <TextField label='Form input' required value={value} error={!value} onChange={e=> setValue(e.target.value)} helperText={!value? 'Required':'Dont share your password'}></TextField>
            <TextField label='password' type='password' helperText='dont show your password'></TextField>
        </Stack>

        <Stack direction='row' spacing={2}>
            <TextField label='amount' InputProps={{startAdornment:<InputAdornment position='start'>$</InputAdornment>}}></TextField>
            <TextField label='weight'  InputProps={{endAdornment:<InputAdornment position='end'>Kg</InputAdornment>}}></TextField>
        </Stack>
    </Stack>
  )
}
