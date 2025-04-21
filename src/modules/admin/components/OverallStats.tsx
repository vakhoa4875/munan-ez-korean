import React from 'react';

interface StatCardProps {
  title: string;
  value: string;
  icon: string;
  iconBgColor: string;
  iconColor: string;
  changeValue: string;
  changeText: string;
  isPositive?: boolean;
}

const StatCard: React.FC<StatCardProps> = ({
  title,
  value,
  icon,
  iconBgColor,
  iconColor,
  changeValue,
  changeText,
  isPositive = true
}) => {
  return (
    <div className="col-span-12 md:col-span-6 lg:col-span-3 p-2">
      <div className="bg-white rounded-lg shadow-md p-4 border border-gray-200">
        <div className="flex justify-between mb-3">
          <div>
            <span className="block text-gray-500 font-medium mb-3">{title}</span>
            <div className="text-gray-900 font-medium text-xl">{value}</div>
          </div>
          <div className={`flex items-center justify-center ${iconBgColor} rounded-full`} style={{ width: '2.5rem', height: '2.5rem' }}>
            <i className={`pi ${icon} ${iconColor} text-xl`}></i>
          </div>
        </div>
        <span className={isPositive ? "text-green-500 font-medium" : "text-red-500 font-medium"}>{changeValue} </span>
        <span className="text-gray-500">{changeText}</span>
      </div>
    </div>
  );
};

const OverallStats: React.FC = () => {
  const stats = [
    {
      title: "Khóa học hoạt động",
      value: "12",
      icon: "pi-book",
      iconBgColor: "bg-blue-100",
      iconColor: "text-blue-500",
      changeValue: "2 khóa mới",
      changeText: "trong tháng này",
      isPositive: true
    },
    {
      title: "Học viên đang học",
      value: "1.245",
      icon: "pi-users",
      iconBgColor: "bg-green-100",
      iconColor: "text-green-500",
      changeValue: "+15%",
      changeText: "so với tháng trước",
      isPositive: true
    },
    {
      title: "Bài kiểm tra TOPIK",
      value: "28",
      icon: "pi-file",
      iconBgColor: "bg-yellow-100",
      iconColor: "text-yellow-500",
      changeValue: "5 bài mới",
      changeText: "được thêm gần đây",
      isPositive: true
    },
    {
      title: "Yêu cầu tư vấn",
      value: "32 chưa xử lý",
      icon: "pi-comments",
      iconBgColor: "bg-purple-100",
      iconColor: "text-purple-500",
      changeValue: "8 yêu cầu",
      changeText: "trong 24h qua",
      isPositive: false
    }
  ];

  return (
    <div className="grid grid-cols-12 gap-4">
      {stats.map((stat, index) => (
        <StatCard
          key={index}
          title={stat.title}
          value={stat.value}
          icon={stat.icon}
          iconBgColor={stat.iconBgColor}
          iconColor={stat.iconColor}
          changeValue={stat.changeValue}
          changeText={stat.changeText}
          isPositive={stat.isPositive}
        />
      ))}
    </div>
  );
};

export default OverallStats;