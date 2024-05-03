import { Stack,Rating} from '@mui/material'
import React,{useState} from 'react'


export const Muirating = () => {
    const [val,setVal]=useState<number | null>(null)
    console.log({val})
    const handlevent=(event:React.ChangeEvent<{}>,newValue:number | null)=>{
        setVal(newValue)
    }
  return (
    <Stack>
           <Rating value={val} onChange={handlevent}></Rating>
    </Stack>
  )
}
