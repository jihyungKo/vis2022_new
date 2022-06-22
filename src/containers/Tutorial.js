import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { styled } from '@mui/material/styles';
import ButtonBase from '@mui/material/ButtonBase';
import Typist from 'react-typist';
import './Tutorial.css';

export class Tutorial extends Component {
  render() {
    const imageclick = (dest) => {
        var temp = window.location.href.split('/'); temp.pop(); var link_temp = temp.join('/');
        document.location.href = link_temp + dest
    }
    return (
      <Box
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
        maxwidth: '100vw',
        marginLeft: '10%',
        marginRight: '10%'
      }}
    >
        <Box
            sx = {{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                flexDirection: 'column',
                height: '100vh',
                width: '80vw'
            }}
        >
            <Box
                component = 'img'
                sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '70vh',
                    width: 'fit-content'
                }}
                src = "https://ifh.cc/g/hpP6Ls.jpg"
            />

            <Box
                id = "regularLetter"
                onClick = {() => imageclick('/game')}
                sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    fontSize: 14,
                    height: '10vh',
                    width: '100vw'
                }}
            >
                <Typist>
                    [ 튜토리얼 ] <br/>
                    자! 이제 선거에서 승리하러 가볼까? ▶
                </Typist>
                
            </Box>

        </Box>
      

    </Box>
    );
  }
}

export default Tutorial;