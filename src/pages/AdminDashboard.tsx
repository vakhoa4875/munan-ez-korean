import React from 'react';
import OverallStats from '@/modules/admin/components/OverallStats';
import RecentActivities from '@/modules/admin/components/RecentActivities';
import PerformanceCharts from '@/modules/admin/components/PerformanceCharts';

const AdminDashboard: React.FC = () => {
  return (
    <div className="p-4">
      <div className="mb-5">
        <h1 className="text-3xl font-bold text-gray-800 mb-2">Bảng điều khiển</h1>
        <p className="text-gray-600">Xin chào Admin, đây là tổng quan hoạt động của hệ thống.</p>
      </div>
      
      {/* Part 1: Overall Stats */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Thống kê tổng quan</h2>
        <OverallStats />
      </div>
      
      {/* Part 2: Recent Activities and Enrollments */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Hoạt động gần đây</h2>
        <RecentActivities />
      </div>
      
      {/* Part 3: Performance Charts */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-gray-700 mb-3">Biểu đồ hiệu suất</h2>
        <PerformanceCharts />
      </div>
    </div>
  );
};

export default AdminDashboard;