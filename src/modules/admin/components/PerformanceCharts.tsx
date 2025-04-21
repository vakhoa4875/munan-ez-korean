import React, { useState } from 'react';
import { Chart } from 'primereact/chart';
import { SelectButton } from 'primereact/selectbutton';

const PerformanceCharts: React.FC = () => {
  const [period, setPeriod] = useState('month');
  
  const periodOptions = [
    { label: 'Tuần', value: 'week' },
    { label: 'Tháng', value: 'month' },
    { label: 'Năm', value: 'year' }
  ];

  // Revenue data
  const revenueData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    datasets: [
      {
        label: 'Doanh thu 2023',
        data: [65, 59, 80, 81, 56, 55, 40, 55, 66, 77, 88, 95],
        fill: false,
        borderColor: '#4bc0c0',
        tension: 0.4
      },
      {
        label: 'Doanh thu 2022',
        data: [28, 48, 40, 19, 86, 27, 90, 35, 55, 63, 70, 80],
        fill: false,
        borderColor: '#565656',
        tension: 0.4
      }
    ]
  };

  // Enrollment data
  const enrollmentData = {
    labels: ['T1', 'T2', 'T3', 'T4', 'T5', 'T6', 'T7', 'T8', 'T9', 'T10', 'T11', 'T12'],
    datasets: [
      {
        label: 'Số lượng đăng ký',
        data: [28, 48, 40, 19, 86, 27, 90, 35, 55, 63, 70, 80],
        backgroundColor: '#42A5F5',
      }
    ]
  };

  // Course popularity data
  const coursePopularityData = {
    labels: ['Sơ cấp', 'Trung cấp', 'Cao cấp', 'TOPIK', 'EPS', 'Cấp tốc'],
    datasets: [
      {
        label: 'Số lượng học viên',
        backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF', '#FF9F40'],
        data: [65, 59, 90, 81, 56, 55]
      }
    ]
  };

  const getLightTheme = () => {
    return {
      plugins: {
        legend: {
          labels: {
            color: '#495057'
          }
        }
      },
      scales: {
        x: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        },
        y: {
          ticks: {
            color: '#495057'
          },
          grid: {
            color: '#ebedef'
          }
        }
      }
    };
  };

  const lightOptions = getLightTheme();

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 mb-4">
        <div className="flex justify-end">
          <SelectButton value={period} options={periodOptions} onChange={(e) => setPeriod(e.value)} />
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-6 mb-4">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-800">Doanh thu</h3>
          <Chart type="line" data={revenueData} options={lightOptions} />
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-6 mb-4">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-800">Số lượng đăng ký</h3>
          <Chart type="bar" data={enrollmentData} options={lightOptions} />
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-6">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-800">Khóa học phổ biến</h3>
          <Chart type="pie" data={coursePopularityData} options={lightOptions} />
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-6">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-800">Phân bố học viên theo khu vực</h3>
          <Chart type="doughnut" 
            data={{
              labels: ['Miền Bắc', 'Miền Trung', 'Miền Nam', 'Nước ngoài'],
              datasets: [
                {
                  data: [42, 23, 34, 15],
                  backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0']
                }
              ]
            }} 
            options={lightOptions} 
          />
        </div>
      </div>
    </div>
  );
};

export default PerformanceCharts;