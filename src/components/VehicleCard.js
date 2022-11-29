import React from "react";

function VehicleCard({ userData, setDetailPage, setOnVehicleClicked }) {
  // console.log(userData, "userData");
  const setVehicleFunc = (vehicle) => {
    setOnVehicleClicked(vehicle);
    setDetailPage(true);
  };
  if (!userData) {
    return (
      <h1 className="text-center justify-center font-bold text-lg text-blue-700">
        Loading...
      </h1>
    );
  }
  return (
    <section className="text-gray-600 body-font">
      <div className="container px-5 py-2 mx-auto">
        <div className="flex flex-wrap -m-4">
          {userData &&
            userData[0].vehicles &&
            userData[0].vehicles.map((vehicle, index) => {
              return (
                <div
                  key={index}
                  className="p-4 lg:w-1/3 cursor-pointer"
                  onClick={() => setVehicleFunc(vehicle)}
                >
                  <div className="h-full bg-gray-300 bg-opacity-75 px-8 pt-16 pb-10 rounded-lg overflow-hidden text-center hover:shadow-lg hover:bg-gradient-to-t hover:from-red-200 hover:text-red-900">
                    <h2 className="tracking-widest text-sm title-font font-medium text-purple-800 mb-1">
                      Vehicle ID : {vehicle.id}
                    </h2>
                    <h1 className="title-font sm:text-2xl text-xl font-medium text-gray-900 mb-3">
                      Registration No : {vehicle.registrationNumber}
                    </h1>
                    <p className="leading-relaxed mb-3">
                      Type : {vehicle.type}
                    </p>
                    {vehicle.status === "Online" ? (
                      <p className="leading-relaxed mb-3 text-green-700  font-bold">
                        Status : {vehicle.status}
                      </p>
                    ) : (
                      <p className="leading-relaxed mb-3 text-red-700 font-bold">
                        Status : {vehicle.status}
                      </p>
                    )}
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </section>
  );
}
export default VehicleCard;
