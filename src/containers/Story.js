import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Typist from 'react-typist';
import {isMobile} from 'react-device-detect';

const story_images = [
    {
        image_src: "https://ifh.cc/g/o5N0dQ.jpg",
        script: "나는 원대한 꿈을 품고 도지사 선거에 출마했다! ▶"

    },
    {
        image_src: "https://ifh.cc/g/XAb9X7.jpg",
        script: "티비를 보는데 7회 지선에서 발생한 쓰레기 문제가 심각하다는 글을 보고 환경 공약을 내기로 마음 먹었다. ▶"

    },
    {
        image_src: "https://ifh.cc/g/zZBVg3.jpg",
        script: "에구머니나! 그런데 영혼의 라이벌이 같은 도지사 선거에 출마했다. ▶"

    },
    {
        image_src: "https://ifh.cc/g/LRFPH7.jpg",
        script: "나는 이 망할 놈의 자식에게 매번 졌고 이 놈 때문에 내 꿈마저 좌절될 수 없다. ▶"

    },
    {
        image_src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&w=350&dpr=2",
        script: "(이미지 아직 추가 안함) 분노 활활 ▶"

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
          document.location.href = window.location.href + dest;
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
            <div key = {this.state.stage}>
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