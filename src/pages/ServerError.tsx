import { Button, Result } from 'antd';
import { useNavigate } from 'react-router-dom';

const ServerError = () => {
  const navigate = useNavigate();

  return (
    <Result
      status="500"
      title="500"
      subTitle="Xin lỗi, đã có lỗi xảy ra từ phía máy chủ."
      extra={
        <Button type="primary" onClick={() => navigate('/')}>
          Về Trang Chủ
        </Button>
      }
    />
  );
};

export default ServerError;
