import './App.css';
import Navbar from './Components/Navbar/Navbar';
import MyDoughnut from './Components/Chart/MyDoughnut';
import CombinedChart from './Components/Chart/CombinedChart';
import MyTable from './Components/Data/MyTable';
import MyCards from './Components/MyCards/MyCards';
import UpperNav from './Components/Navbar/UpperNav';
import Timeline from './Components/Navbar/Timeline';





function App() {
  return (
    <div className="App">
      <Navbar />
        <div className='chartSection'>

          <div>
            <UpperNav />
          </div>

          <div>
            <Timeline />
          </div>

          <div>
            <MyCards />
          </div>
          
          <div className='combineChart'>
            <CombinedChart/>
          </div>

          <div className='doughnutSection'>
            <div className='doughnut'>
              <MyDoughnut/>
            </div>

            <div className='mytable'>
              <MyTable/>
            </div>            
          </div>
        </div>

        
    
    </div>
  );
}

export default App;

