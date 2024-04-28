export default function Weather() {
  return (
    <>
      <div className="container  lg:hidden">
        <div className="bg-image bg-cover bg-no-repeat bg-center w-screen h-screen flex ">
          <div className="first w-full h-full ">
          <div className="search flex justify-between sm:justify-center">
                    <input
                      className="w-full font-bold sm:w-1/3 text-black bg-transparent backdrop-blur-md border border-black rounded-md  m-2 p-1"
                      type="text"
                      placeholder="Enter City"
                    />
                    <button
                      type="submit"
                      // className="font-bold border-2 border-black rounded-md m-2 p-1"
                      className="btn bg-search w-8 mt-3 h-7 me-2 bg-cover bg-no-repeat bg-center"
                    >
                    </button>
                  </div>
          <div className="city flex justify-between sm:justify-around">
            <span className="m-4 font-bold  text-xl">Jaipur</span>
            <span className="m-4 font-bold  text-xl">Rajasthan, IN</span>
            </div>
            {/* <span className="m-4 text-lg flex sm:w-1/4 sm:m-0 sm:justify-end  text-black font-bold">38.7</span>            */}
            <div className="temp flex justify-between sm:justify-around">
              <span className="m-4 text-lg  text-black font-bold">38.7</span>
              <span className="m-4 text-small  text-black font-bold">Feels like</span>
            </div>
            <div className="temp flex justify-between sm:justify-around">
              <span className="m-4 text-lg  text-black font-bold">38.7</span>
              <span className="m-4 text-5xl  text-black font-bold">38.7&#8451;</span>
            </div>
            
            <div className="flex items-center text-white text-lg justify-evenly w-screen h-1/2  ">
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


      <div className="big text-clip overflow-hidden">
        <div className="bg-left bg-cover bg-no-repeat h-screen w-screen">
          <div className="flex justify-center items-center h-full w-full">
            <div className="bg-image bg-cover bg-no-repeat bg-center w-1/2 h-3/4 flex ">
              <div className="first w-1/2 h-full">
              <div className="city flex justify-between">
            <span className="m-4 font-bold  text-lg">Jaipur</span>
            <span className="m-4 font-bold  text-lg">Rajasthan, IN</span>
            </div>
                <div className="ms-4 relative top-[75%]  text-white font-bold">
                <span >38.7</span>
                </div>
                <div className="temp relative top-[75%] flex justify-between">
                  <span className="ms-4  text-white font-bold">38.7</span>
                  <span className="me-1 text-5xl text-white font-bold">38.7&#8451;</span>
                </div>
              </div>
              <div className="second w-1/2 h-full flex-col justify-center items-center  ">
                <div className="half w-full h-1/3 overflow-hidden">
                  <div className="search flex mt-2 justify-center">
                    <input
                      type="text"
                      placeholder="Enter City"
                      className="w-full border border-black rounded-md bg-transparent m-2 p-1"
                    />
                    <button
                      type="search"
                      // className="font-bold border-2 border-black rounded-md m-2 p-1"
                      className="btn bg-search w-7 mt-3 h-6 m-2 me-4 bg-cover bg-no-repeat bg-center "
                    >
                    </button>
                  </div>
                  <div className="city flex h-10  justify-center items-center">
                    <div className="mt-10 text-xl  font-bold">
                      <p className="flex justify-center items-center">Jaipur,IN</p>
                      <p className="flex justify-center items-center">Haze</p>
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
