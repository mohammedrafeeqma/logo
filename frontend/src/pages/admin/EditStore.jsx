import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router'
import IconForm from '../../components/admin/IconForm'
import Navbar from '../../components/admin/Navbar'

function EditStore() {

  const {id} = useParams()
  const [logo, setLogo] = useState()
  useEffect(()=>{
    const fetchLogo = async()=>{
      let res = await axios.get('/admin/'+id)
      setLogo(res.data)
    }
    fetchLogo()
  },[])
console.log(logo);
  return (
    <>
    <Navbar/>
    <IconForm logo={logo}/>
    </>
  )
}

export default EditStore