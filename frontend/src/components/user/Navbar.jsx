import { Search, Widgets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Avatar,
  InputBase,
} from "@mui/material";
import { useState } from "react";
import Logo from "../../assets/image/ICB-Logo 1.png";
import chip from '../../assets/image/chip.png'

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const StyledBox = styled(Box)({
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  gap: "10px",
});
const AvatarBox = styled(Box)({
  display: "flex",
  textAlign:'center',
  gap:15
});

const StyledTypography = styled(Typography)({
    fontSize:'5px',
    fontWeight:400
})
function Navbar() {
    const[showSearchBar,setShowSearchBar] = useState(false)
  return (
      <>
    <AppBar position="sticky" sx={{background:'linear-gradient(288.16deg, #2B32BD -19.56%, #5459EE 108.85%)'
    }}  >
      <StyledToolbar>
        <StyledBox>
          
          <Box>
            <img src={Logo} />
          </Box>
          
        </StyledBox>
        {showSearchBar && <Box sx={{bgcolor:'white',pl:2,display:'flex',alignItems:'center',borderRadius:'5px'}}>
            <InputBase
            placeholder="search store"

            />
            <Search height="17px" width="17px" sx={{color:'#E5E5E5'}} onClick={()=>setShowSearchBar(false)}/>
        </Box>}
        <AvatarBox>
        {!showSearchBar && <Search height="17px" width="17px" onClick={()=>setShowSearchBar(true)}/>}
          <Avatar sx={{height:'23px',width:'23px',ml:'5px',mb:'2px',border:'1px solid white'}} alt="icon-img"  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
        </AvatarBox>
      </StyledToolbar>
    </AppBar>
    <Box sx={{position:'relative'}}>
    <Box sx={{bgcolor:'#5459EE',height:'182px'}}>

</Box>
<Box sx={{position:'absolute',top:40,right:0}}>
    <Box sx={{height:'193px',width:'310px',background: 'linear-gradient(288.16deg, #FF5208 37.13%, #FFB494 96.2%, #FFDED1 106.44%)',borderTopLeftRadius:'18px',borderBottomLeftRadius:'18px'}}>
        <Box sx={{height:'109px',width:'310px',display:'flex'}}>
            <Box sx={{display:'flex',justifyContent:'space-around',alignItems:'center',width:'100%'}}>
                <img style={{margin:'0px 0 0 0px'}} height={40} width={45} src={chip}/>
                <Box sx={{display:'flex'}}>
                  <Box sx={{bgcolor:'white',borderRadius:'50%',height:'15px',width:'15px',opacity:'90%'}}></Box>
                  <Box sx={{bgcolor:'white',borderRadius:'50%',height:'15px',width:'15px',mt:'35%'}}></Box>
                  <Box sx={{bgcolor:'white',borderRadius:'50%',height:'35px',width:'35px',mt:'-20%',opacity:'65%'}}></Box>
                  <Box sx={{bgcolor:'white',borderRadius:'50%',height:'10px',width:'10px',mt:'50%',opacity:'90%'}}></Box>
                </Box>
            </Box>

        </Box>
        <Box sx={{height:'90px',background: 'linear-gradient(288.16deg, #FF5208 22.62%, #FFB494 82.36%, #FFDED1 106.44%)',borderBottomLeftRadius:'18px',display:'flex',justifyContent:'space-around'}}>
            <Box sx={{display:'flex',alignItems:'center'}}>
                <Typography sx={{fontWeight:400,fontSize:'12px',color:'white',mt:5}}>THOMAS COOK</Typography>
            </Box>
            <Box sx={{textAlign:'center',display:'flex',flexDirection:'column',justifyContent:'center'}}>
                <Typography sx={{fontWeight:900,fontSize:'25px',color:'white'}}>₹25,000</Typography>
                <Typography sx={{fontWeight:100,fontSize:'18px',color:'white'}}>Total Earned</Typography>

            </Box>

        </Box>
    </Box>
</Box>
    </Box>
    </>
  );
}

export default Navbar;
