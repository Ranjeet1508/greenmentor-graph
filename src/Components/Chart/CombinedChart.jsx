import React from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
import { Mydata } from '../Data/Mydata';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const getEmissionsDataByMonth = (data) => {
  const emissionsByMonth = {};
  data?.forEach((item) => {
    const key = item.Month;
    if (!emissionsByMonth[key]) {
      emissionsByMonth[key] = { 2022: null, 2023: null };
    }
    emissionsByMonth[key][item.Year] = item.Emissions;
  });
  return Object.values(emissionsByMonth).map((value) => [value[2022], value[2023]]);
};

const getRERatioDataByMonth = (data) => {
  const RERatioByMonth = {};
  data?.forEach((item) => {
    const key = item.Month;
    if (!RERatioByMonth[key]) {
      RERatioByMonth[key] = { 2022: null, 2023: null };
    }
    RERatioByMonth[key][item.Year] = item.Revenue / item.Emissions;
  });
  return Object.values(RERatioByMonth).map((value) => [value[2022], value[2023]]);
};

const months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

const CombinedChart = () => {
  const emissionsData = getEmissionsDataByMonth(Mydata);
  const RERatioData = getRERatioDataByMonth(Mydata);

  const data = {
    labels: months,
    datasets: [
      {
        type: 'bar',
        label: 'Emissions 2022',
        data: emissionsData?.map(([y2022]) => y2022),
        backgroundColor: '#5270c5',
        yAxisID: 'emissions-y-axis',
      },
      {
        type: 'bar',
        label: 'Emissions 2023',
        data: emissionsData?.map(([, y2023]) => y2023),
        backgroundColor: '#91cb74',
        yAxisID: 'emissions-y-axis',
      },
    //   {
    //     type: 'line',
    //     label: 'R/E Ratio 2022',
    //     data: RERatioData?.map(([y2022]) => y2022?.toFixed(2)),
    //     borderColor: '#dd9f9f',
    //     fill: false,
    //     yAxisID: 'reratio-y-axis',
    //   },
    //   {
    //     type: 'line',
    //     label: 'R/E Ratio 2023',
    //     data: RERatioData?.map(([, y2023]) => y2023?.toFixed(2)),
    //     borderColor: '#eac866',
    //     fill: false,
    //     yAxisID: 'reratio-y-axis',
    //   },
    ],
  };

  const options = {
    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      'emissions-y-axis': {
        type: 'linear',
        position: 'left',
        title: {
          display: true,
          text: 'Carbon Emissions',
        },
      },
      'reratio-y-axis': {
        type: 'linear',
        position: 'right',
        title: {
          display: true,
          text: 'R/E Ratio',
        },
        grid: {
          drawOnChartArea: false,
        },
      },
    },
  };

  return <Bar data={data} options={options} />;
};

export default CombinedChart;
