import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import './GamePage.css';
import {isMobile} from 'react-device-detect';
import ToastServive from 'react-material-toast';
import {Bar} from 'react-chartjs-2';
import { styled } from '@mui/material/styles';
import { PieChart } from 'react-minimal-pie-chart';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  BarElement,
  PieElement,
  PieController,
  ArcElement
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, BarElement, PieController, ArcElement);

var score = 100;
var money = 10;
var popular = 20;
var link = "https://ifh.cc/g/qnP9w9.jpg";

const ImageSrc = styled('span')({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundSize: 'cover',
  backgroundPosition: 'center 40%',
  });

const ImageBackdrop = styled('span')(({ theme }) => ({
  position: 'absolute',
  left: 0,
  right: 0,
  top: 0,
  bottom: 0,
  backgroundColor: theme.palette.common.white,
  opacity: 0.2,
  transition: theme.transitions.create('opacity'),
  }));
  

const defaultLabelStyle = {
  fontSize: '20px',
  fontFamily: 'Roboto Medium',
};

const options = {
  scales: {
    x: {
      grid: {
        max: 100,
        min: 0,
        stepSize: 20,
        display: false
      }
    },
    y: {
      min:0,
      max: 100,
      grid: {
        display: false,
        color: 'white'
      },
      ticks: {
        stepSize: 20,
        font: {
          size: 8
        }
      }
    }
  },
  responsive: true,
  maintainAspectRatio: false
};

const toast = ToastServive.new({
  place:'topRight',
  duration:2,
  maxCount:8
});
const questions = [
  "Q. 현수막과 벽보로 어떻게 홍보해볼까요?",
  "Q. 공보와 공약서를 걸어서 공약을 홍보해보자",
  "Q. 명함으로 이름을 알릴거예요",
  "Q. 거리에서 나를 어떻게 홍보할까?"
]

const selectButtons = [
  [
    {
      content: "낭비하지 말자, 최대한 적게 걸자",
      id: 0,
      score: 20,
      pop: 10,
      mon: 1
    },
    {
      content: "온 동네방네 걸어버리자",
      id: 1,
      score: 40,
      pop: 20,
      mon: 2
    }
  ],
  [
    {
      content: "무분별하게 많이 제작해버려",
      id: 0,
      score: 30,
      pop: 10,
      mon: 1.5
    },
    {
      content: "적당량을 제작하자",
      id: 1,
      score: 10,
      pop: 5,
      mon: 1
    }
  ],
  [
    {
      content: "이면지에 손글씨로 손수 제작하자",
      id: 0,
      score: 20,
      pop: 3,
      mon: 0
    },
    {
      content: "엄청 많이 뿌려서 바닥에 나뒹굴게 해버리자",
      id: 1,
      score: 30,
      pop: 10,
      mon: 2
    }
  ],
  [
    {
      content: "피켓과 새 옷, 팔토시를 깔맞춤하여 유세차량을 타면서 홍보하자",
      id: 0,
      score: 20,
      pop: 10,
      mon: 1
    },
    {
      content: "쓰던 것을 재활용하고 유세차랑을 타며 홍보하자",
      id: 1,
      score: 10,
      pop: 10,
      mon: 0.5
    }
  ],
];

const selectButtons_ = [
  [
    {
      content: "비싼 재활용 현수막을 적당히 걸자",
      id: 2,
      score: 10,
      pop: 10,
      mon: 2
    },
    {
      content: "비싼 재활용 현수막을 동네방네 걸자",
      id: 3,
      score: 20,
      pop: 20,
      mon: 4
    }
  ],
  [
    {
      content: "재활용 종이를 사용하여 많이 제작하자",
      id: 2,
      score: 10,
      pop: 10,
      mon: 3
    },
    {
      content: "재활용 종이를 사용하여 적게 제작하자",
      id: 3,
      score: 5,
      pop: 5,
      mon: 2
    }
  ],
  [
    {
      content: "적당량 만큼만 만들자",
      id: 2,
      score: 10,
      pop: 10,
      mon: 1
    },
    {
      content: "재활용 용지로 적당량을 만들자",
      id: 3,
      score: 5,
      pop: 10,
      mon: 1
    }
  ],
  [
    {
      content: "혼자 자전거를 타면서 집에 있는 노래방 기계로 홍보하자",
      id: 2,
      score: 0,
      pop: 20,
      mon: 0
    },
    {
      content: "피켓과 옷, 팔토시를 제작하여 거리 홍보만 해보자",
      id: 3,
      score: 10,
      pop: 15,
      mon: 0.5
    }
  ],
]

export class GamePage extends Component {
  constructor(props) {
    super(props);
      this.state={
       stage: 0,
       total_score: 100,
       selected_block: -1,
       selected_score: 0,
       selected_pop: 0,
       selected_mon: 0,
    }
  }
  render() {
    const data = {
      labels: [''],
      datasets: [{
        label: 'My First Dataset',
        data: [this.state.total_score],
        backgroundColor: [
          '#F7FF93'
        ],
        borderColor: [
          'rgb(0, 0, 0)'
        ],
        borderWidth: 1
      }]
    };
    
    
    const imageclick = (dest) => {
      var temp = window.location.href.split('/');
      temp.pop();
      var link_temp = temp.join('/');
      document.location.href= link_temp + dest;
    }
    const scoreSelect = (selectedScore, selected_block_num, selected_pop_num, selected_mon_num) => {
      this.setState({selected_score: selectedScore});
      this.setState({selected_block: selected_block_num})
      this.setState({selected_pop: selected_pop_num})
      this.setState({selected_mon: selected_mon_num})
    }
    const scoreMinus = (adding_score) => {
      if (adding_score != -5 && this.state.selected_block == -1){
        const id = toast.warning('선택지를 클릭하거나 스킵을 하세요.');
      }
      else{
        if(adding_score != -5){
          this.setState({total_score: this.state.total_score-this.state.selected_score});
          score -= this.state.selected_score;
          popular += this.state.selected_pop;
          money -= this.state.selected_mon;
        }
        else{
          popular -= 5;
        }
        var temp = window.location.href.split('/');
        temp.pop();
        var link_temp = temp.join('/');
        if (this.state.total_score -  this.state.selected_score<= 0){ // 0점 도달
          document.location.href= link_temp + "/end?level=" + score + "&popular=" + popular;
        }
        else if (this.state.stage == 3) // stage 마무리
          {
            document.location.href= link_temp + "/end?level=" + score + "&popular=" + popular;
          }
        else if (this.state.total_score <= 20) {
          link = "https://ifh.cc/g/3Jm6W7.jpg";
        }
        else if (this.state.total_score <= 40){
          link = "https://ifh.cc/g/2Mc8H0.jpg";
        }
        else if (this.state.total_score <= 60){
          link = "https://ifh.cc/g/WZ9D0x.jpg";
        }
        else if (this.state.total_score <= 80 ){
          link = "https://ifh.cc/g/LRz19h.jpg";
        }
        
        this.setState({stage: this.state.stage+1});
        this.setState({selected_block: -1});
        this.setState({selected_score: 0});
        this.setState({selected_pop: 0});
        this.setState({selected_mon: 0});

      }
      
    }

    const sectionStyle = {
      height: "100vh",
    
      backgroundImage: `url(${link})`,
      backgroundPosition: '50% 50%',
    
      backgroundRepeat: "repeat",
      backgroundSize: "cover"
    };
    
    return (
      <div style = {sectionStyle}>
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center'
        }}
      >
        <Box
          sx={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'center',
            overflow: 'hidden',
            borderRadius: '12px',
            boxShadow: 1,
            fontWeight: 'bold',
            height: '100vh',
            width: (isMobile ? '100vw': 'min-content' )
          }}
        >
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'row',
                alignItems:'center',
                height: '70vh',
                width: '100vw'
              }}
            >
              <Box
                component="span"
                sx={{
                  height: '100%',
                  width: '75%'
                }}
              />
              <Box
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  alignItems:'center',
                  height: '100%',
                  width: '25%',
                  borderRadius: '0%'
                }}
              >
                <Box
                  sx = {{
                    height: '5%'
                  }}
                />
                <Box id = 'extraboldLetter' sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', fontSize: 12, height: '5%' }}>
                  환경
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', height: '50%' }}>
                  <Bar data={data} options={options} />
                </Box>
                
                <Box id = 'extraboldLetter' component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 12, mt: 1, height:'5%' }}>
                  여론
                </Box>
                <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 14, mt: 1, width: '70%', height:'10%' }}>
                  <PieChart
                    data={[
                      { title: '나', value: popular, color: '#F7FF93' },
                      { title: '적', value: 100-popular, color: '#FF9F29' }
                    ]}
                    label={({ dataEntry }) => dataEntry.title + " " + dataEntry.value}
                    labelStyle={{
                      ...defaultLabelStyle,
                    }}
                  />
                </Box>
                <Box
                  sx = {{
                    height: '10%'
                  }}
                />
                <Box
                  sx = {{
                    width: '50%'
                  }}
                  component = "img"
                  src = "https://ifh.cc/g/ZJXdWL.png"
                />
                <Box id = 'extraboldLetter' component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems:'top',fontSize: 13, mt: 1, width: '50%', height:'5%' }}>
                  {money}억
                </Box>
              </Box>
            </Box>

            <Box component="span" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', height:'30vh', width: '100vw', borderRadius: '0%' }}>
              <Box
                id = 'extraboldLetter'
                m = 'auto'
                sx = {{display: 'flex', fontSize: 14,justifyContent: 'center', alignItems:'center', height: '20%', width: "95%"}}
              >
                {questions[this.state.stage]}
              </Box>
              <Box
                sx = {{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', height: '100%', width: '100%'}}
              >
                <Box
                  sx = {{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', height: '45%', width: '100%'}}
                >
                  {selectButtons[this.state.stage].map((selectedButton) => (
                    <Box
                      onClick = {() => scoreSelect(selectedButton.score, selectedButton.id, selectedButton.pop, selectedButton.mon)}
                      id = 'lightLetter'
                      style = {{backgroundColor: 'white'}}
                      color = {this.state.selected_block === selectedButton.id  ? 'orange':'black'}
                      sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', height: '100%', 
                      overflow: 'hidden',
                      borderRadius: '12px',
                      height: '70%',
                      border: 1,
                      fontSize: 12,
                      borderColor: (this.state.selected_block == selectedButton.id  ? 'orange':'black'),
                      padding: '5px',
                      boxShadow: 1, margin: '10px'}}
                    >
                      {selectedButton.content}
                    </Box>
                      )
                    )
                  }
                </Box>
                
                <Box
                  sx = {{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', height: '45%', width: '100%'}}
                >
                  {selectButtons_[this.state.stage].map((selectedButton) => (
                    <Box
                      onClick = {() => scoreSelect(selectedButton.score, selectedButton.id, selectedButton.pop, selectedButton.mon)}
                      id = 'lightLetter'
                      color = {this.state.selected_block === selectedButton.id  ? 'orange':'black'}
                      sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', bgcolor: 'background.paper',
                      overflow: 'hidden',
                      borderRadius: '12px',
                      border: 1,
                      fontSize: 12,
                      borderColor: (this.state.selected_block == selectedButton.id  ? 'orange':'black'),
                      height: '70%',
                      padding: '5px',
                      boxShadow: 1, margin: '10px'}}
                    >
                      {selectedButton.content}
                    </Box>
                      )
                    )
                  }
                </Box>
              </Box>
              <Box
                sx = {{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', height: '30%', width: '100%'}}
              >
                <Box
                  onClick = {() => scoreMinus(this.selectedScore) }
                  id = 'regularLetter'
                  sx = {{display: 'flex', fontSize: 12,justifyContent: 'center', alignItems:'center', width: '30%', bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  height: '50%',
                  boxShadow: 1, margin: '5px'}}
                >
                  다음으로
                </Box>
                <Box
                  onClick = {() => scoreMinus(-5) }
                  id = 'regularLetter'
                  sx = {{display: 'flex', fontSize: 12, justifyContent: 'center', alignItems:'center', width: '30%', bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  height: '50%',
                  boxShadow: 1, margin: '5px'}}
                >
                  스킵(-5)
                </Box>
              </Box>
            </Box>

          </Box>
      </Box>
      </div>
    );
  }
}

export default GamePage;