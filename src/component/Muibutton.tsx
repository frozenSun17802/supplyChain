import React,{useState} from 'react'
import { Stack,Button,IconButton, ButtonGroup, ToggleButton, ToggleButtonGroup } from '@mui/material'
import SendIcon from '@mui/icons-material/Send';
import FormatBoldIcon from '@mui/icons-material/FormatBold';
import FormatItalicIcon from '@mui/icons-material/FormatItalic';
import FormatUnderlinedIcon from '@mui/icons-material/FormatUnderlined';


export const Muibutton = () => {
    const [formats,setFormats]= useState<string|null>(null)
    console.log({formats})
        
 const handleFormat=(_event:React.MouseEvent<HTMLElement>,updatedFormats:string|null )=>{
    setFormats(updatedFormats)
 }

  return (
    <Stack spacing={4}>
       
       <Stack spacing={2} direction='row'>
        <Button variant='text'>Text</Button>
        <Button variant='contained'>contained</Button>
        <Button variant='outlined'>outlined</Button>
       </Stack>

        <Stack spacing={4} direction='row'>
         <Button variant='contained' color='primary'>contained</Button>
         <Button variant='contained' color='secondary'>contained</Button>
         <Button variant='contained' color='error'>contained</Button>
         <Button variant='contained' color='warning'>contained</Button>
         <Button variant='contained' color='info'>contained</Button>
         <Button variant='contained' color='success'>contained</Button>
        </Stack>

        <Stack display='block' spacing={4} direction='row'>
        <Button variant='contained' color='primary' size='small'>contained small</Button>
        <Button variant='contained' color='primary' size='medium'>contained medium</Button>
        <Button variant='contained' color='primary' size='large'>contained large</Button>
        </Stack>

        <Stack spacing={3} direction='row'>
         <Button variant='contained' color='secondary' size='medium' startIcon = <SendIcon/> disableRipple>send</Button>
         <Button variant='contained' color='secondary' size='medium' endIcon = <SendIcon/> disableElevation >send</Button>
         <IconButton aria-label='sendbutton' color='primary' size='medium'><SendIcon/></IconButton>
        </Stack>

        <Stack spacing={4} direction='row' >
          <ButtonGroup color='secondary' variant='outlined' orientation='vertical' >
            <Button onClick={()=>alert('clicked left')}>left</Button>
            <Button onClick={()=>alert('clicked center')}>center</Button>
            <Button onClick={()=>alert('clicked right')}>right</Button>
          </ButtonGroup>
        </Stack>

        <Stack direction='row' spacing={4}>
            <ToggleButtonGroup aria-label='format' size='medium' color='primary' value={formats} onChange={handleFormat}>
                <ToggleButton value='bold'aria-label='blod'><FormatBoldIcon/></ToggleButton>
                <ToggleButton value='italic' aria-label='italic'><FormatItalicIcon/></ToggleButton>
                <ToggleButton value='underlined' aria-label='underlined'><FormatUnderlinedIcon/></ToggleButton>
            </ToggleButtonGroup>
        </Stack>
       
    </Stack>
  )
}
