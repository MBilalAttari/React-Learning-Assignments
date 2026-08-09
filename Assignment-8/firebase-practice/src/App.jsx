import React, { lazy, Suspense } from "react";

import { Route, Routes } from "react-router-dom";
import { RiseLoader } from "react-spinners";
const ShowData = lazy(() => import("./pages/ShowData"));
const Signup = lazy(() => import("./pages/SignupPage"));

const App = () => {
  return (
    <div className="bg-white min-h-screen relative">
      
      <Routes>
        
        <Route
          path="/"
          element={
            <Suspense
              fallback={
                <div className="inset-0 absolute flex items-center justify-center bg-gray-100 z-50">
                  <RiseLoader color="#4F39F6" size={10}/>
                </div>
              }
            >
              <Signup />
            </Suspense>
          }
        />
        <Route
          path="/userdata"
          element={
            <Suspense
              fallback={
                <div className="inset-0 absolute flex items-center justify-center bg-gray-100 z-50">
                  <RiseLoader color="#4F39F6" size={10}/>
                </div>
              }
            >
              <ShowData />
            </Suspense>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
