import React, { Component } from 'react';
import {isMobile} from 'react-device-detect';
import Box from '@mui/material/Box';
import Typist from 'react-typist'

export class EndPage extends Component {
    
  render() {
    const current = decodeURI(window.location.href);
    const search = current.split("?")[1];
    const params = new URLSearchParams(search);
    const keywords = params.get('level');
    const keywords2 = params.get('popular');

    var link = "";
    var number_env = parseInt(keywords);
    var number_pop = parseInt(keywords2);
    var script = "당선을 축하합니다";

    console.log(number_env, number_pop);
    if (number_env == 0){
      link = "https://ifh.cc/g/WMYrfF.jpg";
      script = "당신의 마을을 지키지 못하였습니다."
    }
    else if (number_pop < 50){
      link = "https://ifh.cc/g/50yp0Q.jpg";
      script = "당선되지는 못했지만 환경지킴이 상을 받았다. 나중에 다시 도전해야지!"
    }
    else if (number_env >= 50){
      link = "https://ifh.cc/g/d1Fzfm.jpg";
      script = "환경지킴이 후보자로 당선되어 유퀴즈에 까지 출연하게 된 당신! 축하합니다."
    }
    else{
      link = "https://ifh.cc/g/Z0g1pt.jpg";
      script = "당선을 축하합니다. 그런데 당신 주변의 모습이 어떤가요?"
    }

    var temp = window.location.href.split('/');
    temp.pop();
    var link_temp = temp.join('/');

    return (
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
      <Box
      style = {{backgroundColor: '#e4f2d8'}}
      sx={{
        display: 'flex',
        flexDirection: "column",
        alignItems: 'center',
        bgcolor: 'background.paper',
        overflow: 'hidden',
        borderRadius: '12px',
        boxShadow: 1,
        fontWeight: 'bold',
        height: '100vh',
        width: (isMobile ? '100vw': '60vw' )
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
                component="img"
                sx = {{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    height: '80vh',
                    width: (isMobile ? 'fill-available': 'fit-content' )
                }}
                src = {link}
            >

            </Box>

            <Box
                id = "regularLetter"
                onClick = {() => document.location.href = "https://jihyungko.github.io/vis_res/"}
                sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    fontSize: 14,
                    alignItems: 'center',
                    height: '20vh',
                    width: (isMobile ? '90vw' : '50vw' )
                }}
            >
                {script}<br/>(이 곳을 클릭하면 바로 결과페이지로 이동합니다)
           
            </Box>

        </Box>
      

    </Box>
    </Box>
    );
  }
}

export default EndPage;