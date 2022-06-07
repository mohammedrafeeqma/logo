import { Add } from '@mui/icons-material'
import { Button, InputBase, Typography } from '@mui/material'
import { Box, Container, styled } from '@mui/system'
import React, { useEffect, useRef, useState } from 'react'
import axios from 'axios'
import { useNavigate } from 'react-router'

const StyledBox = styled(Box)({
    display:'flex',
    justifyContent:'space-around',
    margin:2

})

function IconForm({logo}) {

    const fileInput = useRef();
    const selectFile = () => {
        fileInput.current.click();
    }
    const navigate = useNavigate()
    const[name,setName] = useState('')
    const[file, setFile] = useState('')
    const[formError,setFormError] = useState('')
    const[image,setImage] = useState('')
    useEffect(()=>{
        logo && setName(logo.name) 
    },[logo])
    const submitHandler = ()=>{
        if(file)
        {
    let reader = new FileReader
    reader.readAsDataURL(file);
    reader.onloadend = async()=>{
      setImage(reader.result)
      
      if(file.size<100000)
      {
        imageSubmit(reader.result)
      }
      else{
        setFormError('*image size is larger')
    
      }
        }
    }
}


const updateHandler = async()=>{
    if(file)
    {
let reader = new FileReader
reader.readAsDataURL(file);
reader.onloadend = async()=>{
  setImage(reader.result)
  
  if(file.size<100000)
  {
    imageUpdate(reader.result)
  }
  else{
    setFormError('*image size is larger')

  }
    }
}
else{
    await axios.put('/admin/'+logo._id,{name:name})
    navigate('/admin/')

}
}



const imageSubmit= async(base64image)=>{
    try {
     
      let suc = await axios.post('/admin/upload',{image:base64image})
      await axios.post('/admin/',{name:name,logo:suc.data})
      navigate('/admin/')
    } catch ({response}) {
      console.log(response);
    }
  }

  const imageUpdate= async(base64image)=>{
    try {
     
      let suc = await axios.post('/admin/upload',{image:base64image})
      await axios.put('/admin/'+logo._id,{name:name,logo:suc.data})
      navigate('/admin/')
    } catch ({response}) {
      console.log(response);
    }
  }



  return (
    <>
    <Box sx={{backgroundColor:'#E5E5E5',height:'88vh',margin:0}}>
        <Box sx={{p:2}}>
            <Typography sx={{display:'flex',alignItems:'center',fontSize:'14px',fontWeight:600}}> <Add sx={{fontSize:'14px',fontWeight:600,color:'red'}}/> Add Store</Typography>
        </Box>
        <Box sx={{m:2}}>
            <Typography sx={{fontSize:'12px',ml:2}}>Store Name</Typography>
            <Box sx={{bgcolor:'white',display:{xs:'flex'},width:{sm:'78%'},justifyContent:{xs:'center'},m:2}}>
                <InputBase value={name} onChange={(e)=>{setName(e.target.value)}} sx={{ml:{xm:-6,sm:-15},fontSize:{xs:'16px',sm:'22px'},fontWeight:400}} placeholder='type store name'/>
            </Box>
        </Box>
        <StyledBox>
            <Box sx={{display:'flex',flexDirection:'column',justifyContent:'end'}}>
                <Typography sx={{fontSize:'12px'}}>Add Store logo</Typography>
                
                <Button onClick={selectFile} sx={{color:'#2B32BD',border:'1px solid #2B32BD'}} variant='outlined'>Browse</Button>
                <input type="file" ref={fileInput} id='file' style={{display:'none'}} onInput={(e)=>{setFile(e.target.files[0])}}/>
            
            </Box>
            <Box>
                <img width={140}  src={file ? URL.createObjectURL(file) : logo? logo.logo :'https://indianbankseauction.com/PropertyImages/nopreview.jpeg'}/>
            </Box>
        </StyledBox>
        <Box sx={{display:'flex',justifyContent:'center',mt:5}}>
            {!logo?<Button sx={{bgcolor:'#2B32BD',"&:hover":{bgcolor:'#2B32BD'}}} variant='contained' onClick={submitHandler}>Submit</Button>:
            <Button sx={{bgcolor:'#2B32BD',"&:hover":{bgcolor:'#2B32BD'}}} variant='contained' onClick={updateHandler}>Update</Button>
            }
        </Box>
    </Box>

    </>
  )
}

export default IconForm