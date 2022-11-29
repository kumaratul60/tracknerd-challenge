import React, { useState, useEffect } from "react";

import { Home, VehicleCard, VehicleCardDetails } from "../components";

function VehicleList({ userDetail, setUserDetail }) {
  const { token } = userDetail;
  const [allData, setData] = useState(null);
  const [userData, setUserData] = useState(null);
  const [detailPage, setDetailPage] = useState(false);
  const [onVehicleClicked, setOnVehicleClicked] = useState(null);

  const getVehicleList = () => {
    try {
      fetch(" https://staging-api.tracknerd.io/v1/vehicle-groups/vehicles", {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
        .then((response) => response.json())
        .then(({ data }) => {
          setData([...data]);
          setUserData([data[0]]);
        });
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getVehicleList();
  }, []);

  return (
    <div>
      <Home
        userData={userData}
        detailPage={detailPage}
        setUserData={setUserDetail}
      />
      {!detailPage ? (
        <VehicleCard
          userData={userData}
          setDetailPage={setDetailPage}
          setOnVehicleClicked={setOnVehicleClicked}
        />
      ) : (
        <VehicleCardDetails
          onVehicleClicked={onVehicleClicked}
          userData={userData}
          setDetailPage={setDetailPage}
        />
      )}
    </div>
  );
}
export default VehicleList;
