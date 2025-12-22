"use client";
import { App, ConfigProvider } from "antd";
import { ReactNode } from "react";
import { Provider } from "react-redux";
import { store } from "../lib/store";
export default function Providers({
  children,
}: Readonly<{ children: ReactNode }>) {
 
  return (
    <Provider store={store}>
      <ConfigProvider
        theme={{
          token: {
            borderRadius: 2,
            fontFamily: "Inter, Arial, sans-serif",
            colorPrimary: "#1E3A3A",
            controlOutline: "#1E3A3A",
            controlOutlineWidth: 1,
            fontSize: 14,
          },
          components: {
              Menu: {
                itemHoverBg: "#EBFFFE", // Background color on hove
                itemSelectedBg: "#2B6771", // Background color when selected
                itemSelectedColor: "#ffffff", // Text color when selected
                itemHoverColor: "#1E3A3A", // Text color on hover
                itemColor: "#1E3A3A",
                colorBgContainer:"ffffff"
                
              },
            }
        }}
        
      >
        <App>{children}</App>
   </ConfigProvider>
    </Provider>
  );
}
