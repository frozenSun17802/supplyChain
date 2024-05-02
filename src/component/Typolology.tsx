import React from 'react'
import {Typography} from '@mui/material'

export const Typolology = () => 
{
  return (
    <div>
        typolology
        <Typography variant='h1'>Heading</Typography>
        <Typography variant='h2'>Heading</Typography>
        <Typography variant='h3'>Heading</Typography>
        <Typography variant='h4'>Heading</Typography>
        <Typography variant='h5'>Heading</Typography>
        <Typography variant='h6'>Heading</Typography>

        <Typography variant='h4' component='h1' gutterBottom>Heading</Typography>

        <Typography variant='subtitle1'>Substitle 1</Typography>
        <Typography variant='subtitle2'>Substitle 2</Typography>

        <Typography variant='body1'>lamo</Typography>
        <Typography variant='body2'>laksdjfldjsflskdfjlaksdfjalsdfkjalsdf</Typography>
    </div>
  )
}
