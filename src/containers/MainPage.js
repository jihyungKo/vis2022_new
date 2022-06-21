import React, { Component } from 'react'; 
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import ButtonBase from '@mui/material/ButtonBase';
import Typography from '@mui/material/Typography';
import './MainPage.css'
import FaceIcon from '@mui/icons-material/Face';
import SvgIcon from '@mui/material/SvgIcon';
import {isMobile} from 'react-device-detect';

const images = [
  {
    url: "https://ifh.cc/g/v5tZ5G.png",
    title: '게임 시작하기',
    width: '50%',
    dest: "../game_main"
  },
  {
    url: "https://ifh.cc/g/v5tZ5G.png",
    title: '결과 페이지 바로보기',
    width: '50%',
    dest: "../res"
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

export default class MainPage extends Component {
    render() {
        const imageclick = (dest) => {
          document.location.href = dest;
        }
        return (
          <Box style = {{ display:'flex', flexDirection: 'column',  alignItems:'center', justifyContent: 'center', height: '100vh', width: '100vw', backgroundColor: '#e4f2d8'}}>
            <Box sx={{display:'flex', alignItems:'center', height: "15%", width: "100%"}}>
              <Box id = "TitleLetter" m="auto" style={{fontSize: '50px'}}>
                오늘은 내가 도지사
              </Box>
            </Box>
            <Box sx={{display:'flex', alignItems:'center', height: "15%", width: "100%"}}>
              <Box id = "TitleLetter" m="auto" style={{fontSize: '50px'}}>
                쌈D팀
              </Box>
            </Box>
            <Box sx={{ display: 'flex', height: "50%", width: '100%' }}>
              {images.map((image) => (
                <ImageButton
                  onClick={() => imageclick(image.dest)}
                  focusRipple
                  key={image.title}
                  style={{
                      width: image.width,
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
        );
        }
    }
