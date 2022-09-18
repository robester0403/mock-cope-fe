import React from "react";
import { Route, Routes } from "react-router-dom";
import DailyUpdate from "./pages/DailyUpdate";
import GraphQLPlayground from "./pages/GraphQLPlayground";
import Home from "./pages/Home";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/graphqlplayground" element={<GraphQLPlayground />} />
        <Route path="/dailyupdate" element={<DailyUpdate />}>
          {/* <Route path="/generalInfo" element={<generalInfo />} />
          <Route path="/moodUpdate" element={<moodUpdate />} />
          <Route path="/stressorUpdate" element={<stressorUpdate />} /> */}
        </Route>
      </Routes>
    </>
  );
}

export default App;
