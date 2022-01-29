import { CallOutlined, SearchOutlined, ShoppingBasketOutlined } from "@mui/icons-material";
import { Container, Link, Typography } from "@mui/material";
import { Box } from "@mui/system";
import logo from '../../resources/Girtees-02 1.png'

export default function Header( {menuItems} ) {
  return (
    <>
      <Box
        sx={{
          padding: '3vh',
          display: 'flex',
          justifyContent: 'center',
          backgroundColor: '#A7D8DD',
          alignItems: 'center',
          gap: 10,
          flexWrap: 'wrap'
        }}>
        <Typography className="gray1000"
          sx={{
            fontSize: '0.8rem'
          }}>Girtees Uplifting Spirits Through Designs</Typography>
      </Box>

      <Box
        sx={{
          backgroundColor: '#F2EAEA',
        }}>

        <Container
          sx={{
            padding: '3vh 0px',
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            flexWrap: 'wrap'
          }}>
            <Box
              sx={{
                display: 'flex',
                gap: 2
              }}
              >
              {
                menuItems.map((item, i)=>{
                  return (
                    <Link href={item.route} underline="none" key={i}>{item.name}</Link>
                  )
                })
              }
            </Box>
            <Box>
              <img src={logo} width={'80px'}/>
            </Box>
            <Box
            sx={{
              display: 'flex',
              gap: 2
            }}>
              <CallOutlined />
              <ShoppingBasketOutlined />
              <SearchOutlined />
            </Box>
        </Container>
      </Box>
    </>
  )
}