import { Widgets } from "@mui/icons-material";
import {
  AppBar,
  Toolbar,
  styled,
  Box,
  Typography,
  Avatar,
} from "@mui/material";
import Logo from "../../assets/image/ICB-Logo 1.png";

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
  flexDirection: "column",
  textAlign:'center',
});

const StyledTypography = styled(Typography)({
    fontSize:'5px',
    fontWeight:400
})
function Navbar() {
  return (
    <AppBar position="sticky" sx={{background:'linear-gradient(288.16deg, #2B32BD -19.56%, #5459EE 108.85%)'
    }}  >
      <StyledToolbar>
        <StyledBox>
          <Box>
            <Widgets />
          </Box>
          <Box>
            <img src={Logo} />
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "end",
            }}
          >
            <Box sx={{ mt: "27px", ml: "-10px" }}>
              <StyledTypography>control panel</StyledTypography>
            </Box>
          </Box>
        </StyledBox>
        <AvatarBox>
          <Avatar sx={{height:'23px',width:'23px',ml:'5px',mb:'2px',border:'1px solid white'}} alt="icon-img"  src="https://t4.ftcdn.net/jpg/03/64/21/11/360_F_364211147_1qgLVxv1Tcq0Ohz3FawUfrtONzz8nq3e.jpg" />
          <StyledTypography>Thomas Cook</StyledTypography>
          <StyledTypography>Admin</StyledTypography>
        </AvatarBox>
      </StyledToolbar>
    </AppBar>
  );
}

export default Navbar;
