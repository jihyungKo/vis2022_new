import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typist from 'react-typist';
import {isMobile} from 'react-device-detect';
import './Story.css';


const story_images = [
    {
        image_src: "https://ifh.cc/g/yT3QSq.jpg",
        script: "나는 큰 꿈을 품고 도지사 선거에 출마했다! ▶"

    },
    {
        image_src: "https://ifh.cc/g/4HrcYf.jpg",
        script: "티비에서 7회 지선에서 발생한 쓰레기 문제가 심각하다는 뉴스를 보고 환경공약을 내고 그에 걸맞게 친환경 선거를 해보리라 마음 먹었다. ▶"

    },
    {
        image_src: "https://ifh.cc/g/hnOF2p.jpg",
        script: "에구머니나! 그런데 내 영혼의 라이벌이 같은 도지사 선거에 출마했다. ▶"

    },
    {
        image_src: "https://ifh.cc/g/z8woLt.jpg",
        script: "나는 이 라이벌에게 항상 졌고 얘 때문에 내 꿈마저 좌절되고 싶지는 않다. ▶"

    },
    {
        image_src: "https://ifh.cc/g/PF6bfR.jpg",
        script: "이번에야 말로 라이벌을 물리치고 내 꿈을 펼칠 때다. 환경도 신경쓰면서 꼭 이겨보자! 파이아! ▶"

    },
];

export class GameMainPage extends Component {
    constructor(props) {
        super(props);
        this.state={
            stage: 0
        }
    }
  render() {
    const imageclick = (dest) => {
        if (this.state.stage == 4)
        {
            var temp = window.location.href.split('/');
            temp.pop();
            var link_temp = temp.join('/');
          document.location.href = link_temp + dest;
        }
        this.setState({stage: this.state.stage+1});   
    }

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
                src = {story_images[this.state.stage].image_src}
            >

            </Box>

            <Box
                onClick = {() => imageclick('/tutorial')}
                sx = {{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    height: '20vh',
                    width: (isMobile ? '90vw' : '50vw' )
                }}
            >
            <div key = {this.state.stage} id = "regularLetter" style={{fontSize: 14}}>
                <Typist>
                    {story_images[this.state.stage].script}
                </Typist>
            </div>
           
            </Box>

        </Box>
      

    </Box>
    </Box>
    );
  }
}

export default GameMainPage;