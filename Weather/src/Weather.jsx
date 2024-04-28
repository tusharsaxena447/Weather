export default function Weather() {
  return (
    <>
      <div className="container lg:hidden">
        <div className="bg-mobile bg-cover bg-no-repeat bg-center w-screen h-screen flex ">
          <div className="first w-full h-full ">
            <span className="m-4 font-bold flex justify-center text-2xl">Jaipur, In</span>
            <div className="search flex justify-center">
                    <input
                      className=" w-1/2 font-bold text-black bg-transparent backdrop-blur-md border-black rounded-md  m-2 p-1"
                      type="text"
                      placeholder="Enter City"
                    />
                    <button
                      type="search"
                      className="font-bold border-black rounded-md m-2 p-1"
                    >
                      Search
                    </button>
                  </div>
            <span className="m-4 text-lg text-black font-bold">
              38.7
            </span>
            <div className="temp flex justify-between">
              <span className="m-4 text-lg  text-black font-bold">38.7</span>
              <span className="m-4 text-lg  text-black font-bold">38.7&#8451;</span>
            </div>
            <div className="flex items-center text-lg justify-evenly w-screen h-1/2  ">
                  <div className="info font-bold ">
                    <div className="m-2">Visibility</div>
                    <div className="m-2">Wind Speed</div>
                    <div className="m-2">Temperature</div>
                  </div>
                  <div className="values font-bold ">
                    <p className="m-2">5 Km</p>
                    <p className="m-2">10 Km</p>
                    <p className="m-2">30&#8451;</p>
                  </div>
                </div>
            
          </div>
        </div>
      </div>


      <div className="big container">
        <div className="bg-left bg-cover bg-no-repeat h-screen w-screen">
          <div className="flex justify-center items-center h-full w-full">
            <div className="bg-image bg-cover bg-no-repeat bg-center w-1/2 h-3/4 flex ">
              <div className="first w-1/2 h-full">
                <div className="flex me-1 justify-end font-bold">
                <span>Jaipur, In</span>                
                </div>
                <div className="ms-1 relative top-[75%]  text-white font-bold">
                <span >38.7</span>
                </div>
                <div className="temp relative top-[78%] flex justify-between">
                  <span className="ms-1  text-white font-bold">38.7</span>
                  <span className="me-1  text-white font-bold">38.7&#8451;</span>
                </div>
              </div>
              <div className="second w-1/2 h-full flex-col justify-center items-center  ">
                <div className="half w-full h-1/3 overflow-hidden">
                  <div className="search flex justify-center">
                    <input
                      type="text"
                      placeholder="Enter City"
                      className=" w-1/2 border-black rounded-md bg-transparent m-2 p-1"
                    />
                    <button
                      type="search"
                      className="font-thin border-black rounded-md m-2 p-1 hover:bg-blue-50"
                    >
                      Search
                    </button>
                  </div>
                  <div className="city flex h-10  justify-center items-center">
                    <div className="mt-10 text-xl font-bold">
                      <p className="">Jaipur,IN</p>
                      <p className="">Haze</p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center text-lg justify-evenly w-full h-1/2  ">
                  <div className="info font-bold text-white">
                    <div className="m-2">Visibility</div>
                    <div className="m-2">Wind Speed</div>
                    <div className="m-2">Temperature</div>
                  </div>
                  <div className="values font-bold text-white">
                    <p className="m-2">5 Km</p>
                    <p className="m-2">10 Km</p>
                    <p className="m-2">30&#8451;</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
