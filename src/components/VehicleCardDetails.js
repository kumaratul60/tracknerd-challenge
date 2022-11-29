import React from "react";
import Map from "./Map";

function VehicleCardDetails({ onVehicleClicked, setDetailPage }) {
  return (
    <div className="flex flex-col">
      <section className="text-gray-600 body-font flex-row flex">
        <div className=" px-40 py-10  flex-col">
          <div className="flex flex-col md:pr-10 md:mb-0 mb-6 pr-0 w-full md:w-auto md:text-left text-center">
            <h2 className="text-sm text-blue-500 tracking-widest font-medium title-font mb-5">
              Details of the vehicle is under :
            </h2>
            <h2 className="text-lg text-blue-500 tracking-widest font-medium title-font mb-1">
              {onVehicleClicked.status}
            </h2>
            <h1 className="md:text-3xl text-2xl font-medium title-font text-gray-900">
              {onVehicleClicked.registrationNumber}
            </h1>
          </div>
          <div
            className="flex md:ml-auto md:mr-0 mx-auto items-center flex-shrink-0 space-x-4 cursor-pointer"
            onClick={() => {
              setDetailPage(false);
            }}
          ></div>
        </div>
        <div className="px-40 py-10  flex-col">
          <Map onVehicleClicked={onVehicleClicked} />
        </div>
        <div className="text-center justify-center absolute top-40 right-20">
          <button
            className="bg-gray-100 flex  py-3 px-5 rounded-lg items-center cursor-pointer  border-purple-300 hover:bg-green-200 hover:ease-transition duration-150 ease-in-out md:ease-in focus:outline-none"
            onClick={() => {
              setDetailPage(false);
            }}
          >
            <span className="flex items-start flex-col leading-none">
              <span className="text-sm text-indigo-900 mb-1">
                Go Back to Home
              </span>
            </span>
          </button>
        </div>
      </section>
    </div>
  );
}
export default VehicleCardDetails;
