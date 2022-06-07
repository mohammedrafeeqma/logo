import { Card, Typography } from '@mui/material'
import { Box, Container } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'

function Trending() {
    const[logo,setLogo]=useState([])
    useEffect(()=>{
        const fetchLogo = async()=>{
            const res = await axios.get('/admin/')
            setLogo(res.data)
        }
        fetchLogo()
    },[])
  return (
    <>
     <Container sx={{marginTop:{xs:'20%',sm:'10%'},p:1}}>
        <Box sx={{display:'flex',justifyContent:'space-between',gap:10}}>
            <Typography sx={{fontSize:{xs:'14px',sm:'24px'},fontWeight:600}}>Trending Stores</Typography>
            <Typography sx={{fontSize:{xs:'10px',sm:'20px'}, fontWeight:600, color:'#FF5208'}}>See More</Typography>
        </Box>

        <Box sx={{mt:3}}>
        <Box sx={{display:'flex',flexWrap:'wrap',justifyContent:'flex-start',gap:{xs:4,sm:3},marginLeft:{xs:2,sm:4}}}>
            {logo.map((data)=>{
              return <Box key={data._id}>
            <Card sx={{width:{sm:'200px',xs:'70px'},height:{xs:'50px',sm:'200px'},bgcolor:'',objectFit:'contain',position:'relative',p:1}}>
                <img style={{position:'absolute',top:10,right:0,left:0,width:'100%'}} src={data.logo}/>
            </Card>
            <Typography sx={{textAlign:'center',fontSize:{xs:'11px',sm:'18px'},fontWeight:300,mt:2}}>{data.name}</Typography>
            </Box> 
            })}
            
            



            
        </Box>
        






        </Box>




    </Container>
    </>
  )
}

export default Trending