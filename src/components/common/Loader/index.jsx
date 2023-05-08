import { Space, Spin } from "antd";

export default function Loader() {
  return (
    <div className="loader">
      <Space size="middle">
        Loading. Please wait...
        <Spin size="large" />
      </Space>
    </div>
  );
}
