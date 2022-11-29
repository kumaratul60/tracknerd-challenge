import React, { useEffect, useState } from "react";

import { Login, VehicleList } from "./components";

import "./index.css";

export default function App() {
  const [userDetail, setUserDetail] = useState(null);

  useEffect(() => {
    const userDetailStr = JSON.stringify(userDetail);
    userDetail && sessionStorage.setItem("userDetail", userDetailStr);
  }, [userDetail]);

  const getUserDetail = (details) => {
    setUserDetail(details);
  };

  const userDetailsStr = sessionStorage.getItem("userDetail");
  const userDetailsObject = JSON.parse(userDetailsStr);

  return (
    <>
      {userDetailsObject ? (
        <VehicleList
          userDetail={userDetailsObject}
          setUserDetail={setUserDetail}
        />
      ) : (
        <>
          <Login getUserDetail={getUserDetail} />
        </>
      )}
    </>
  );
}
