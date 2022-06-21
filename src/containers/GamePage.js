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
var link = "https://ifh.cc/g/LvfJ3A.jpg";

const defaultLabelStyle = {
  fontSize: '12px',
  fontFamily: 'sans-serif',
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
  "Q. 후보자로 나온 당신, 동네 곳곳에 현수막과 벽보를 걸어서 홍보해볼까요?",
  "Q. 이번에는 공보와 공약서를 걸어서 당신의 공약을 홍보합시다. 어떤 방법을 택할까요?",
  "Q. 이번에는 공보와 공약서를 걸어서 당신의 공약을 홍보합시다. 어떤 방법을 택할까요?",
  "Q. 이번에는 공보와 공약서를 걸어서 당신의 공약을 홍보합시다. 어떤 방법을 택할까요?"
]

const selectButtons = [
  [
    {
      content: "현수막을 낭비하지 않고 적게 건다.",
      id: 0,
      score: 10,
      pop: 10,
      mon: 1
    },
    {
      content: "일반 현수막을 온 동네방네 걸어둔다.",
      id: 1,
      score: 20,
      pop: 20,
      mon: 1
    }
  ],
  [
    {
      content: "선택지2-1",
      id: 0,
      score: 10,
      pop: 20,
      mon: 1
    },
    {
      content: "선택지2-2",
      id: 1,
      score: 20,
      pop: 20,
      mon: 1
    }
  ],
  [
    {
      content: "선택지3-1",
      id: 0,
      score: 10,
      pop: 20,
      mon: 1
    },
    {
      content: "선택지2-2",
      id: 1,
      score: 20,
      pop: 20,
      mon: 1
    }
  ],
  [
    {
      content: "선택지4-1",
      id: 0,
      score: 10,
      pop: 20,
      mon: 1
    },
    {
      content: "선택지2-2",
      id: 1,
      score: 20,
      pop: 20,
      mon: 1
    }
  ],
];

const selectButtons_ = [
  [
    {
      content: "좀 비싸지만 재활용 현수막을 적재적소에 적게 걸어둔다.",
      id: 2,
      score: 30,
      pop: 20,
      mon: 1
    },
    {
      content: "돈을 많이 써서 재활용 현수막을 동네방네 걸어둔다.",
      id: 3,
      score: 40,
      pop: 20,
      mon: 1
    }
  ],
  [
    {
      content: "선택지2-3",
      id: 2,
      score: 30,
      pop: 20,
      mon: 1
    },
    {
      content: "선택지2-4",
      id: 3,
      score: 40,
      pop: 20,
      mon: 1
    }
  ],
  [
    {
      content: "선택지2-3",
      id: 2,
      score: 30,
      pop: 20,
      mon: 1
    },
    {
      content: "선택지2-4",
      id: 3,
      score: 40,
      pop: 20,
      mon: 1
    }
  ],
  [
    {
      content: "선택지2-3",
      id: 2,
      score: 30,
      pop: 20,
      mon: 1
    },
    {
      content: "선택지2-4",
      id: 3,
      score: 40,
      pop: 20,
      mon: 1
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
          'rgba(75, 192, 192, 0.2)'
        ],
        borderColor: [
          'rgb(75, 192, 192)'
        ],
        borderWidth: 1
      }]
    };
    
    
    const imageclick = (dest) => {
      document.location.href=window.location.href + dest;
    }
    const scoreSelect = (selectedScore, selected_block_num, selected_pop_num, selected_mon_num) => {
      this.setState({selected_score: selectedScore});
      this.setState({selected_block: selected_block_num})
      this.setState({selected_pop: selected_pop_num})
      this.setState({selected_mon: selected_mon_num})
    }
    const scoreMinus = (adding_score) => {
      console.log(score);
      if (this.state.selected_score == 0){
        const id = toast.warning('선택지를 클릭하거나 스킵을 하세요.');
      }
      else{
        score -= this.state.selected_score;
        popular += this.state.selected_pop;
        money -= this.state.selected_mon;
        console.log(score);
        if (score == 0){ // 0점 도달
          document.location.href=window.location.href + "/end?level=" + score + "?popular=" + popular;
        }
        if (this.state.stage == 3) // stage 마무리
          {
            document.location.href="/end?level=" + score + "?popular=" + popular;
          }
        if ( score == 0){
          link = "https://ifh.cc/g/WMYrfF.jpg";
        }
        else if (score <= 20) {
          link = "https://ifh.cc/g/AxOcs6.jpg";
        }
        else if (score <= 40){
          link = "https://ifh.cc/g/lZjglm.jpg";
        }
        else if (score <= 60){
          link = "https://ifh.cc/g/tCAA27.jpg";
        }
        else if (score <= 80 ){
          link = "https://ifh.cc/g/yRZT1A.jpg";
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
            <SvgIcon component={HomeIcon} onClick={() => {document.location.href= window.location.href + '/main'}} m='auto' style={{fontSize: '25px'}} inheritViewBox/>
          </Box>
          <Box
            id = 'contentLetter'
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
            height: '50%',
            width: (isMobile ? 'fill-available': 'fit-content' )
          }}
          alt="The house from the offer."
          src = {link}
        />
        <Box component="span" sx={{display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems:'center', height:'40%', width: '100%' }}>
          <Box
            id = 'contentLetter'
            m = 'auto'
            sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', height: '20%', width: "95%"}}
          >
            {questions[this.state.stage]}
          </Box>
          <Box
            sx = {{display: 'flex', flexDirection:'column', justifyContent: 'center', alignItems:'center', height: '100%', width: '100%'}}
          >
            <Box
              sx = {{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', height: '40%', width: '100%'}}
            >
              {selectButtons[this.state.stage].map((selectedButton) => (
                <Box
                  onClick = {() => scoreSelect(selectedButton.score, selectedButton.id, selectedButton.pop, selectedButton.mon)}
                  id = 'contentLetter'
                  color = {this.state.selected_block === selectedButton.id  ? 'orange':'black'}
                  sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', height: '100%', bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  height: '70%',
                  border: 1,
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
              sx = {{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', height: '40%', width: '100%'}}
            >
              {selectButtons_[this.state.stage].map((selectedButton) => (
                <Box
                  onClick = {() => scoreSelect(selectedButton.score, selectedButton.id, selectedButton.pop, selectedButton.mon)}
                  id = 'contentLetter'
                  color = {this.state.selected_block === selectedButton.id  ? 'orange':'black'}
                  sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', bgcolor: 'background.paper',
                  overflow: 'hidden',
                  borderRadius: '12px',
                  border: 1,
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
              sx = {{display: 'flex', flexDirection:'row', justifyContent: 'center', alignItems:'center', height: '40%', width: '100%'}}
            >
                <Box
                    onClick = {() => scoreMinus(this.selectedScore) }
                    id = 'contentLetter'
                    sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '30%', bgcolor: 'background.paper',
                    overflow: 'hidden',
                    borderRadius: '12px',
                    height: '50%',
                    boxShadow: 1, margin: '5px'}}
                  >
                  다음으로
                </Box>
                <Box
                    onClick = {() => scoreMinus(this.selectedScore) }
                    id = 'contentLetter'
                    sx = {{display: 'flex', justifyContent: 'center', alignItems:'center', width: '30%', bgcolor: 'background.paper',
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
        <Box component="span" sx={{ fontSize: 16, mt: 1, height:'10%' }}>
        </Box>
        <Box id = 'contentLetter' sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', fontSize: 20, height: '5%' }}>
          환경지수
          
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center', width: '50%', height: '40%' }}>
          <Bar data={data} options={options} />
        </Box>
        <Box id = 'contentLetter' component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 20, mt: 1, height:'5%' }}>
          여론조사
        </Box>
        <Box sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 16, mt: 1, width: '70%', height:'10%' }}>
        <PieChart
          data={[
            { title: 'One', value: popular, color: '#E38627' },
            { title: 'Two', value: 100-popular, color: '#C13C37' }
          ]}
          label={({ dataEntry }) => dataEntry.value}
          labelStyle={{
            ...defaultLabelStyle,
          }}
          
        />
        </Box>
        <Box id = 'contentLetter' component="span" sx={{ display: 'flex', justifyContent: 'center', alignItems:'center',fontSize: 16, mt: 1, width: '50%', height:'20%' }}>
          {money}억
        </Box>
      </Box>

    </Box>
    </Box>
    );
  }
}

export default GamePage;