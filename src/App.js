import './App.css';
import React, {useState} from 'react';
import Navbar from './Components/Navbar/Navbar';
import MyDoughnut from './Components/Chart/MyDoughnut';
import CombinedChart from './Components/Chart/CombinedChart';
import MyTable from './Components/Data/MyTable';
import MyCards from './Components/MyCards/MyCards';
import UpperNav from './Components/Navbar/UpperNav';
import { Mydata } from './Components/Data/Mydata';





function App() {

  const[timeperiod, setTimeperiod] = useState("")

  const filterDataByTimeline = (data, timeline) => {
    switch (timeline) {
      case 'Jan22-Jun23':
        return data.filter(item => (item.Month <= 'Jun' && item.Year === 2022) || (item.Month <= 'Jun' && item.Year === 2023));
      case 'Jul22-Dec23':
        return data.filter(item => (item.Month >= 'Jul' && item.Year === 2022) || (item.Month >= 'Jul' && item.Year === 2023));
      default:
        return data;
    }
  };


  const filteredData = filterDataByTimeline(Mydata, timeperiod);
  return (
    <div className="App">
      <Navbar />
      <div className='chartSection'>

        <div>
          <UpperNav />
        </div>

        <div className='timeline'>
          <select onChange={(e) => setTimeperiod(e.target.value)}>
            <option value="">Show Timeline: <span className='date'>Jan'22-Dec'23</span></option>
            <option value="Jan22-Jun23">Show Timeline: <span className='date'>Jan'22-Jun'23</span></option>
            <option value="Jul22-Dec23">Show Timeline: <span className='date'>Jul'22-Dec'23</span></option>
          </select>
        </div>

        <div>
          <MyCards />
        </div>

        <div className='combineChart'>
          <CombinedChart Mydata={filteredData}/>
        </div>

        <div className='doughnutSection'>
          <div className='doughnut'>
            <MyDoughnut Mydata={filteredData}/>
          </div>

          <div className='mytable'>
            <MyTable Mydata={filteredData}/>
          </div>
        </div>
      </div>



    </div>
  );
}

export default App;

