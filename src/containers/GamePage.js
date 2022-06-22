import React, { Component } from 'react';
import Box from '@mui/material/Box';
import { alpha } from '@mui/material/styles';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import SvgIcon from '@mui/material/SvgIcon';
import HomeIcon from '@mui/icons-material/Home';
import './GamePage.css';
import {isMobile} from 'react-device-detect';
import ToastServive from 'react-material-toast';
import {Bar} from 'react-chartjs-2';
import { Pie } from 'react-chartjs-2';
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
var link = "https://ifh.cc/g/TXzCfO.jpg";

const defaultLabelStyle = {
  fontSize: '14px',
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
        display: false
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
      score: 20,
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
      score: 20,
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
        data: [score],
        backgroundColor: [
          '#76BA99'
        ],
        borderColor: [
          'rgb(75, 192, 192)'
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
      console.log(score);
      if (adding_score != -5 && this.state.selected_block_num == -1){
        const id = toast.warning('선택지를 클릭하거나 스킵을 하세요.');
      }
      else{
        if(adding_score != -5){
          score -= this.state.selected_score;
          popular += this.state.selected_pop;
          money -= this.state.selected_mon;
        }
        else{
          popular -= 5;
        }
        console.log(score);
        var temp = window.location.href.split('/');
        temp.pop();
        var link_temp = temp.join('/');
        if (score == 0){ // 0점 도달
          document.location.href= link_temp + "/end?level=" + score + "&popular=" + popular;
        }
        if (this.state.stage == 3) // stage 마무리
          {
            document.location.href= link_temp + "/end?level=" + score + "&popular=" + popular;
          }
        if ( score == 0){
          link = "https://ifh.cc/g/6oFO0H.jpg";
        }
        else if (score <= 20) {
          link = "https://ifh.cc/g/zBfSxT.jpg";
        }
        else if (score <= 40){
          link = "https://ifh.cc/g/waKnPW.jpg";
        }
        else if (score <= 60){
          link = "https://ifh.cc/g/93BJTB.jpg";
        }
        else if (score <= 80 ){
          link = "https://ifh.cc/g/sCArjW.jpg";
        }
        

        this.setState({stage: this.state.stage+1});
        this.setState({selected_block: -1});
        this.setState({selected_score: 0});
        this.setState({selected_pop: 0});
        this.setState({selected_mon: 0});

      }
      
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
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'center',
        bgcolor: 'background.paper',
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
          flexDirection: 'column',
          alignItems:'center',
          height: '100%',
          width: '80%',
          minWidth: { md: 350 },
        }}

      >
        <Box component="span" sx={{height:'10%', display: 'flex', flexDirection: 'row', alignItems:'center', width: '100%' }}>
          <Box
            sx={{
              display: 'flex', alignItems:'center', justifyContent: 'center',
              width: '20%'
            }}
          >
            <SvgIcon component={HomeIcon} onClick={() => {var temp = window.location.href.split('/'); temp.pop(); var link_temp = temp.join('/'); document.location.href= link_temp + '/main'}} m='auto' style={{fontSize: '25px'}} inheritViewBox/>
          </Box>
          
          <Box
            id = 'extraboldLetter'
            sx={{
              display: 'flex', alignItems:'center', justifyContent: 'end',
              width: '55%'
            }}
          >
            당 선 기 원
          </Box>
        </Box>
        <Box
          component="img"
          sx={{
            height: '60%',
            width: 'fill-available'
          }}
          alt="background"
          src = {link}
        />
        <Box component="span" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', height:'40%', width: '100%' }}>
          <Box
            id = 'regularLetter'
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
                  color = {this.state.selected_block === selectedButton.id  ? 'orange':'black'}
                  sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', height: '100%', bgcolor: 'background.paper',
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
      
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems:'center',
          height: '100%',
          width: '20%',
          minWidth: { md: 100 },
        }}
      >
        <Box component="span" sx={{ fontSize: 14, mt: 1, height:'30%' }}>
        </Box>
        <Box id = 'regularLetter' sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', fontSize: 14, height: '5%' }}>
          환경지수
          
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', height: '40%' }}>
          <Bar data={data} options={options} />
        </Box>
        <Box id = 'regularLetter' component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 14, mt: 1, height:'5%' }}>
          여론조사
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 14, mt: 1, width: '70%', height:'10%' }}>
        <PieChart
          data={[
            { title: '나', value: popular, color: '#76BA99' },
            { title: '라이벌', value: 100-popular, color: '#9A86A4' }
          ]}
          label={({ dataEntry }) => dataEntry.title + " " + dataEntry.value}
          labelStyle={{
            ...defaultLabelStyle,
          }}
        />
        </Box>
        <Box sx = {{height:'5%'}}/>
        <Box
            sx = {{
              width: '50%'
            }}
            component = "img"
            src = "https://ifh.cc/g/ZJXdWL.png"
          />
        <Box id = 'regularLetter' component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems:'top',fontSize: 14, mt: 1, width: '50%', height:'5%' }}>
          {money}억
        </Box>
      </Box>

    </Box>
    </Box>
    );
  }
}

export default GamePage;