import React from "react";
import Head from "./components/Head/Head";
import "antd/dist/antd.css";
import Banner from "./components/Banner/Banner";
import Info from "./components/Info/Info";

const App = () => {
  return (
    <div>
      <Head />
      <Banner />
      <Info />
    </div>
  );
};

export default App;
