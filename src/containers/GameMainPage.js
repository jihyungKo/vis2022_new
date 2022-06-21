import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import {isMobile} from 'react-device-detect';

const images = [
    {
      url: "https://ifh.cc/g/v5tZ5G.png",
      title: '게임바로 시작하기',
      width: '50%',
      dest: "/tutorial"
    },
    {
      url: "https://ifh.cc/g/v5tZ5G.png",
      title: '스토리 보기',
      width: '50%',
      dest: "/story"
    }
  ];

const ImageButton = styled(ButtonBase)(({ theme }) => ({
position: 'relative',
height: 200,
[theme.breakpoints.down('sm')]: {
    width: '100% !important', // Overrides inline-style
    height: 100,
},
'&:hover, &.Mui-focusVisible': {
    zIndex: 1,
    '& .MuiImageBackdrop-root': {
    opacity: 0.15,
    },
    '& .MuiImageMarked-root': {
    opacity: 0,
    },
    '& .MuiTypography-root': {
    border: '4px solid currentColor',
    },
},
}));

const ImageSrc = styled('span')({
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
backgroundSize: 'cover',
backgroundPosition: 'center 40%',
});

const Image = styled('span')(({ theme }) => ({
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
display: 'flex',
alignItems: 'center',
justifyContent: 'center',
color: theme.palette.common.white,
}));

const ImageBackdrop = styled('span')(({ theme }) => ({
position: 'absolute',
left: 0,
right: 0,
top: 0,
bottom: 0,
backgroundColor: theme.palette.common.black,
opacity: 0.4,
transition: theme.transitions.create('opacity'),
}));

const ImageMarked = styled('span')(({ theme }) => ({
height: 3,
width: 18,
backgroundColor: theme.palette.common.white,
position: 'absolute',
bottom: -2,
left: 'calc(50% - 9px)',
transition: theme.transitions.create('opacity'),
}));

export class GameMainPage extends Component {
  render() {
    const imageclick = (dest) => {
        document.location.href = dest
    }
    return (
      <Box
      style = {{backgroundColor: '#e4f2d8'}}
      sx={{
        display: 'flex',
        flexDirection: { xs: 'column', md: 'row' },
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
        height: '100vh',
        maxwidth: '100vw'
      }}
    >
        <Box
            sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100vh',
                width: '100vw'
            }}
        >
            <Box
                component = 'img'
                sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height:  '80vh',
                    width: (isMobile ? 'fill-available': 'fit-content' )
                }}
                src = "https://ifh.cc/g/C1tSPN.jpg"
            />

            <Box
                sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh',
                    width: 'fill-available'
                }}
            >
            <Box sx={{ display: 'flex', height: "50%", width: '100%', alignItems: 'center', justifyContent: 'center' }}>
              {images.map((image) => (
                <ImageButton
                  onClick={() => imageclick(image.dest)}
                  focusRipple
                  key={image.title}
                  style={{
                      width: '50%'
                  }}
                  >
                  <ImageSrc style={{ backgroundImage: `url(${image.url})` }} />
                  <ImageBackdrop className="MuiImageBackdrop-root" />
                  <Image>
                      <Typography
                      component="span"
                      variant="subtitle1"
                      color="inherit"
                      sx={{
                          position: 'relative',
                          p: 4,
                          pt: 2,
                          pb: (theme) => `calc(${theme.spacing(1)} + 6px)`,
                      }}
                        >
                        {image.title}
                        <ImageMarked className="MuiImageMarked-root" />
                        </Typography>
                    </Image>
                    </ImageButton>
                ))}
              </Box>
            </Box>

        </Box>
      

    </Box>
    );
  }
}

export default GameMainPage;