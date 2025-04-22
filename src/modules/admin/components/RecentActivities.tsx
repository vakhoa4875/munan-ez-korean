import React from 'react';
import { DataTable } from 'primereact/datatable';
import { Column } from 'primereact/column';
import { Button } from 'primereact/button';
import { Tag } from 'primereact/tag';

interface Activity {
  id: number;
  user: string;
  action: string;
  course?: string;
  time: string;
  status: 'success' | 'warning' | 'danger' | 'info';
}

const RecentActivities: React.FC = () => {
  const activities: Activity[] = [
    { id: 1, user: 'Nguyễn Văn A', action: 'Đăng ký khóa học', course: 'Tiếng Hàn sơ cấp', time: '10 phút trước', status: 'success' },
    { id: 2, user: 'Trần Thị B', action: 'Hoàn thành bài học', course: 'Tiếng Hàn trung cấp', time: '30 phút trước', status: 'info' },
    { id: 3, user: 'Lê Văn C', action: 'Yêu cầu hoàn tiền', course: 'Tiếng Hàn TOPIK', time: '1 giờ trước', status: 'danger' },
    { id: 4, user: 'Admin', action: 'Thêm khóa học mới', course: 'Tiếng Hàn cao cấp', time: '2 giờ trước', status: 'info' },
    { id: 5, user: 'Phạm Thị D', action: 'Gửi đánh giá', course: 'Tiếng Hàn sơ cấp', time: '3 giờ trước', status: 'success' },
  ];

  const statusBodyTemplate = (rowData: Activity) => {
    const statusMap = {
      'success': { label: 'Thành công', color: 'success' },
      'warning': { label: 'Cảnh báo', color: 'warning' },
      'danger': { label: 'Vấn đề', color: 'danger' },
      'info': { label: 'Thông tin', color: 'info' }
    };
    
    const status = statusMap[rowData.status];
    return <Tag value={status.label} severity={status.color as any} />;
  };

  const actionBodyTemplate = () => {
    return (
      <Button icon="pi pi-eye" className="rounded-full p-button-text text-[var(--primary-color)]!" />
    );
  };

  return (
    <div className="grid grid-cols-12 gap-4">
      <div className="col-span-12 lg:col-span-7">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-800">Hoạt động người dùng</h3>
          <DataTable value={activities} rows={5} paginator responsiveLayout="scroll" className="border-gray-200">
            <Column field="user" header="Người dùng" style={{ width: '20%' }}></Column>
            <Column field="action" header="Hoạt động" style={{ width: '25%' }}></Column>
            <Column field="course" header="Khóa học" style={{ width: '25%' }}></Column>
            <Column field="time" header="Thời gian" style={{ width: '15%' }}></Column>
            <Column body={statusBodyTemplate} header="Trạng thái" style={{ width: '15%' }}></Column>
            <Column body={actionBodyTemplate} style={{ width: '5%' }}></Column>
          </DataTable>
        </div>
      </div>
      
      <div className="col-span-12 lg:col-span-5">
        <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
          <h3 className="text-lg font-medium mb-3 text-gray-800">Đăng ký khóa học gần đây</h3>
          <ul className="list-none p-0 m-0">
            {[1, 2, 3, 4, 5].map((item) => (
              <li key={item} className="flex items-center py-3 border-b border-gray-300 flex-wrap">
                <div className="w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full mr-3 flex-shrink-0">
                  <i className="pi pi-user text-blue-500 text-xl"></i>
                </div>
                <div className="flex-1">
                  <span className="text-gray-900 font-medium mb-1 block">Học viên {item}</span>
                  <span className="text-gray-600">Đăng ký khóa học Tiếng Hàn {['sơ cấp', 'trung cấp', 'cao cấp', 'TOPIK', 'EPS'][item-1]}</span>
                </div>
                <div className="flex-shrink-0 ml-3">
                  <span className="text-sm text-gray-500">{item * 10} phút trước</span>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default RecentActivities;