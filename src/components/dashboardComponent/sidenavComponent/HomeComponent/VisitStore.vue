<template>
  <div class="row">
    <div class="col-7 py-4">
      <div>
        <h3 class="t-primary">Total Sales of the week</h3>
        <canvas ref="lineChartCanvas"></canvas>
      </div>
    </div>
    <div class="col-5 py-4">
      <div>
        <h3 class=" t-primary">Total Order of the week</h3>
        <canvas ref="pieChartCanvas"></canvas>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue';
import Chart from 'chart.js/auto';

const lineChartData = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June'],
  datasets: [
    {
      label: 'Product A',
      data: [10, 15, 20, 18, 25, 30],
      fill: false,
      borderColor: 'rgb(75, 192, 192)',
      tension: 0.1
    },
    {
      label: 'Product B',
      data: [5, 8, 12, 10, 15, 20],
      fill: false,
      borderColor: 'rgb(192, 75, 192)',
      tension: 0.1
    }
  ]
};

const lineChartCanvas = ref(null);

const createLineChart = () => {
  const ctx = lineChartCanvas.value.getContext('2d');
  new Chart(ctx, {
    type: 'line',
    data: lineChartData,
    options: {
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });
};

const pieChartData = {
  labels: ['Order A', 'Order B', 'Order C', 'Order D'],
  datasets: [
    {
      label: 'Product A',
      data: [30, 15, 25, 10],
      backgroundColor: 'rgb(75, 192, 192)'
    },
    {
      label: 'Product B',
      data: [20, 10, 15, 5],
      backgroundColor: 'rgb(192, 75, 192)'
    },
    {
      label: 'Product C',
      data: [10, 5, 8, 2],
      backgroundColor: 'rgb(192, 192, 75)'
    }
  ]
};

const pieChartCanvas = ref(null);

const createPieChart = () => {
  const ctx = pieChartCanvas.value.getContext('2d');
  new Chart(ctx, {
    type: 'pie',
    data: pieChartData,
    options: {
      responsive: true
    }
  });
};

onMounted(createLineChart);
onMounted(createPieChart);
</script>
