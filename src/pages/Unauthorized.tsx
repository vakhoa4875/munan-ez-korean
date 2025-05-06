import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const Unauthorized = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="403"
      title="403"
      subTitle="Xin lỗi, bạn không được phép truy cập trang này."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Về Trang Chủ
        </Button>
      }
    />
  );
};

export default Unauthorized;
