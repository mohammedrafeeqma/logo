import { Add, Delete, Edit, MapsHomeWork, Remove } from '@mui/icons-material'
import { Box, Button, Dialog, DialogActions, DialogTitle, Typography } from '@mui/material'
import { Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router'

function StoreList() {

    const[logo, setLogo] = useState([])
    const[open, setOpen] = useState(false)
    const[id, setId] = useState(null)
    const[refresh, setRefresh] = useState(false)
    const navigate = useNavigate()
    useEffect(()=>{
        const fetchLogo = async()=>{
            const res = await axios.get('/admin/')
            setLogo(res.data)
        }
        fetchLogo()
    },[refresh])
    const deleteHandler = async(id)=>{
        await axios.delete('/admin/'+id)
        setOpen(false)
        navigate('/admin/')
        setRefresh(!refresh)
    }
    const DeleteHandle = (id)=>{
        
        setOpen(true)
        setId(id)
        
    }
    
  return (
    <>
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',bgcolor:'#EBEBEB',p:2}}>
        <Box sx={{display:'flex',gap:1}}>
        <MapsHomeWork sx={{fontSize:{xs:'18px',sm:'28px'}}}/> 
            <Typography sx={{fontSize:{xs:'14px',sm:'18px'},fontWeight:600}}> Store List <Typography sx={{fontWeight:300}} variant="span">({logo.length})</Typography></Typography>
        </Box>
        <Button size='small' variant='contained' onClick={()=>navigate('/admin/addstore/')}>Add <Add sx={{fontSize:'18px'}}/> </Button>
    </Box>
    <Box sx={{p:2}}>
        <Box sx={{display:'flex',justifyContent:'space-between',fontSize:{xs:'18px',sm:'28px'},fontWeight:500}}>
            <Typography sx={{fontSize:{xs:'11px',sm:'22px'}}}>Code</Typography>
            <Typography sx={{fontSize:{xs:'11px',sm:'22px'}}}>Store Name</Typography>
            <Typography sx={{color:'white'}}>options</Typography>
            <Typography sx={{color:'white',display:{sm:'none'}}}>options</Typography>
        </Box>
        {logo?.map((data)=>{
            return <Box key={data._id} sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mb:1}}>
            <Typography sx={{fontSize:{xs:'11px',sm:'22px'}, fontWeight:600,color:'#5459EE'}}>{data._id.slice(20)}</Typography>
            <Typography sx={{fontSize:{xs:'11px',sm:'22px'},fontWeight:300}}>{data.name}</Typography>
            <Box>
               <Button onClick={()=>{navigate('/admin/editstore/'+data._id)}} size='small' variant='outlined' sx={{border:'2px solid #FF5208', color:'#FF5208',p:1,height:25,fontSize:'12px',fontWeight:500}} endIcon={<Edit sx={{fontWeight:500,fontSize:'12px'}}/>}>Edit </Button>
            <Button onClick={()=>DeleteHandle(data._id)}><Delete/></Button> 
            </Box>

            
            
            </Box>
        })}
        <Dialog open={open} onClose={()=>{setOpen(false)}} sx={{bgcolor:'transparent'}}>
                <DialogTitle>Are you sure want to delete?</DialogTitle>
                <DialogActions>
                    <Button onClick={()=>setOpen(false)}>Cancel</Button>
                    <Button onClick={()=>{deleteHandler(id)}}>Confirm</Button>
                </DialogActions>
            </Dialog>
        






    </Box>
    </>
  )
}

export default StoreList