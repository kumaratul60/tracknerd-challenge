import React from "react";
import { redirect } from "react-router-dom";

function Home({ userData, setUserData, detailPage }) {
  const vehicleOwner =
    userData && userData[0]?.vehicles && userData[0]?.vehicles.length;

  const logout = () => {
    sessionStorage.clear();
    setUserData(null);
    redirect("/");
  };
  return (
    <>
      <div className="px-6 pt-6 lg:px-8">
        <div>
          <nav
            className="flex h-9 items-center justify-between"
            aria-label="Global"
          >
            <div className="flex lg:min-w-0 lg:flex-1" aria-label="Global">
              <a href="#" className="-m-1.5 p-1.5">
                <span className="sr-only">Your Company</span>
                <img
                  className="h-8"
                  src="https://d33wubrfki0l68.cloudfront.net/bfad864aea33a259d945066bbefc38f83ff0255f/8dbcc/images/tracknerd-logo-4.png"
                  alt=""
                />
              </a>
            </div>
            <div className="flex lg:hidden">
              <button
                type="button"
                className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700"
              >
                <span className="sr-only">Open main menu</span>
              </button>
            </div>
            <div className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-center lg:gap-x-12">
              <a
                href="#"
                className="font-semibold text-gray-900 hover:text-gray-900"
              >
                Product
              </a>

              <a
                href="#"
                className="font-semibold text-gray-900 hover:text-gray-900"
              >
                Features
              </a>

              <a
                href="#"
                className="font-semibold text-gray-900 hover:text-gray-900"
              >
                Marketplace
              </a>

              <a
                href="#"
                className="font-semibold text-gray-900 hover:text-gray-900"
              >
                Company
              </a>
            </div>
            <div
              className="hidden lg:flex lg:min-w-0 lg:flex-1 lg:justify-end "
              onClick={logout}
            >
              <a
                href="#"
                className="inline-block rounded-lg px-3 py-1.5 text-sm font-semibold leading-6 text-gray-900 shadow-sm ring-1 hover:bg-gradient-to-t hover:from-gray-400 hover:text-blue-900 ring-gray-900/10 hover:ring-blue-900/20"
              >
                Logout
              </a>
            </div>
          </nav>
        </div>
      </div>
      <main>
        <div className="relative px-6 lg:px-8">
          <div className="mx-auto max-w-3xl pt-5 pb-22 sm:pt-18 sm:pb-10">
            <div>
              <div>
                <h1 className="text-4xl font-bold tracking-tight sm:text-center sm:text-6xl">
                  Welcome to Tracknerd
                </h1>
              </div>
              {vehicleOwner > 0 && (
                <div className="mt-10 text-center">
                  {detailPage ? (
                    <p> Click Go Back button to go to previous page </p>
                  ) : (
                    <p>
                      You have {vehicleOwner} Under Click Below Cards to See
                      Details :-
                    </p>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </main>
    </>
  );
}
export default Home;
