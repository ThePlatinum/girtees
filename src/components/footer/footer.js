import { FacebookOutlined, Instagram, Twitter, YouTube } from "@mui/icons-material";
import {Button, Container, InputAdornment, Link, TextField, Typography } from "@mui/material";
import { Box, fontSize } from "@mui/system";

export default function Footer(){
  return (
    <Container sx={{
      paddingTop:'10vh',
    }}>
      <Box sx={{ 
        padding: '5vh',
        display: 'flex',
        justifyContent: 'center',
        backgroundColor:'#FEEBA7',
        alignItems: 'center',
        gap: 10
        }}>
          <Typography class='gray1000'
          sx={{
            fontWeight:500,
            fontSize:'1.5rem'
          }}>Subscribe For Update</Typography>
          <Box sx={{ display: 'flex', alignItems: 'flex-end', width:'60%' }}>
            <TextField
            sx={{
              backgroundColor: 'white',
              fontWeight: 500,
              fontSize: '14px',
              width: '100%'
            }}
            id="subscribeEmail"
            label="Enter Your Email Address"
            size="small"
            InputProps={{
              endAdornment:
                <InputAdornment position="end">
                  <Button
                  sx={{
                    color:'white',
                    backgroundColor:'#212121'
                  }} variant="contained">Enter</Button>
                </InputAdornment>
            }}
            />
            
          </Box>
      </Box>

      <Box sx={{ 
        paddingTop:'10vh',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom:'5vh'
        }}>
        <Box sx={{ 
        display: 'flex',
        justifyContent: 'space-between',
        flexGrow: 0.5
        }}>
          <Box>
            <Typography className="grey1000">Company Info</Typography>
            <Typography className="grey900"
            sx={{
              display:"flex",
              flexDirection: 'column',
              fontWeight:300,
              fontSize: '14px',
              textDecoration: 'none',
              }}>
                <Link href="#" underline="none">Shipping Policy</Link>
              
                <Link href="#" underline="none">Privacy Policy</Link>
              
                <Link href="#" underline="none">Terms of Service</Link>
            </Typography>
          </Box>
          <Box>
            <Typography className="grey1000">Help & Support</Typography>
            <Typography className="grey900"
            sx={{
              display:"flex",
              flexDirection: 'column',
              fontWeight:300,
              fontSize: '14px',
              textDecoration: 'none',
              }}>
              
                <Link href="#" underline="none">Shipping Policy</Link>
              
                <Link href="#" underline="none">Privacy Policy</Link>
              
                <Link href="#" underline="none">Terms of Service</Link>
            </Typography>
          </Box>
          <Box>
            <Typography className="grey1000">Customer Care</Typography>
            <Typography className="grey900"
            sx={{
              display:"flex",
              flexDirection: 'column',
              fontWeight:300,
              fontSize: '14px',
              textDecoration: 'none',
              }}>
                <Link href="#" underline="none">
                Contact Us
                </Link>
                <Link href="#" underline="none">
                Payment Methods
                </Link>
            </Typography>
          </Box>
        </Box>
        <Box sx={{
          justifyContent:'center'
        }}>
          <Box>
            <FacebookOutlined />
            <Instagram />
            <YouTube />
            <Twitter />
          </Box>
        </Box>
      </Box>
      <hr />
      <Box
      sx={{
        flexGrow: 0.5
        }}>
        <Typography
        sx={{
          fontWeight : 300,
          fontSize : '12px',
          textAlign: 'center',
          color: '#6C7E99'
        }}> All rights Reserved <span style={{ fontWeight: 500 }}> &#169; Girtees, 2022</span> </Typography>
      </Box>
    </Container>
  )
}