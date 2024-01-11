import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
// import { Mydata } from '../Data/Mydata';

ChartJS.register(ArcElement, Tooltip, Legend);


const getEmissionsBySupplier = (data) => {
  const emissionsBySupplier = {};
  let totalEmissions = 0;

  data.forEach((item) => {
    if (emissionsBySupplier[item.Supplier]) {
      emissionsBySupplier[item.Supplier] += item.Emissions;
    } else {
      emissionsBySupplier[item.Supplier] = item.Emissions;
    }
  });
  return Object.values(emissionsBySupplier)
};

const getSupplierLabels = (data) => {
  const suppliers = {};
  data.forEach((item) => {
    suppliers[item.Supplier] = true;
  });
  return Object.keys(suppliers);
};

const options = {
  responsive: true,
  plugins: {
    title: {
      display: true,
      text: 'Emissions by Supplier',
    },
    legend: {
        position: 'bottom'
    }
  },
};

const MyDoughnut = ({Mydata}) => {
  const emissionsData = getEmissionsBySupplier(Mydata);
  const supplierLabels = getSupplierLabels(Mydata);

  const data = {
    labels: supplierLabels,
    datasets: [
      {
        label: 'Emissions',
        data: emissionsData,
        backgroundColor: [
          '#3BB85E',
          '#544B8D',
          '#7C95EA',
          '#B54F69',
          '#E994B1',
          '#FFC400'
        ],
        hoverOffset: 4,
      },
    ],
  };

  return <Doughnut data={data} options={options} />;
};

export default MyDoughnut;



