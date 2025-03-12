import { Section404 } from "@404pagez/react";

const NotFound = () => {
  return (
    <div className="min-h-screen flex justify-center items-center">
      <Section404 size={28} isButton={true} onButtonClick={() => { window.location.href = "/" }} buttonColor="#a17410" buttonLabel="Trang chủ" />
    </div>
  );
};

export default NotFound;