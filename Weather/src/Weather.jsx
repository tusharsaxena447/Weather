import { useEffect, useState } from "react";
import country_data from './assets/country_data.json'

export default function Weather() {
  let default_city = "Jaipur";
  localStorage.getItem("city")
    ? (default_city = localStorage.getItem("city"))
    : (default_city = "jaipur");
  const [cityName, setCityName] = useState(default_city);
  const [weather, setWeather] = useState({});
  const [sunrise, setSunrise] = useState({});
  const [sunset, setSunset] = useState({}); 
  const [hidden, setHidden] = useState('invisible')
  const [country, setCountry] = useState()
  function handleChange(e) {
    setCityName(e.target.value);
  }
  useEffect(() => {
    handleSearch();
    setCityName("")
  }, []);
  const handleKeyDown = (event) => {
    if (event.key === 'Enter') {
      handleSearch()
    }
  }
  function handleSearch() {
    const apikey = "caf7408bbf0702fb845bebbc421ce6e9";
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apikey}&units=metric`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        if (data.cod === "404" || cityName === "") {
          setHidden()
          setTimeout(() => {
            setHidden("invisible")
            
          },2000);
        } else {
          setHidden("invisible")
          setWeather(data);
          console.log(weather);
          localStorage.setItem("city", cityName);
          let rise = data.sys.sunrise; // Replace this with your Unix time
          let realTime = new Date(rise * 1000); // Multiply by 1000 to convert to milliseconds
          setSunrise({
            hour: realTime.getHours(),
            minutes: realTime.getMinutes(),
          });
          let set = data.sys.sunset; // Replace this with your Unix time
          let realTimE = new Date(set * 1000); // Multiply by 1000 to convert to milliseconds
          setSunset({
            hour: realTimE.getHours(),
            minutes: realTimE.getMinutes(),
          });
        }
        country_data.forEach((e)=>{
          if (e.code == data.sys.country){
            setCountry(e.name)
          }
        })
        setCityName("")
        // console.log(country)
      });
  }

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
                value={cityName}
                onChange={handleChange}
              />
              <button
                type="submit"
                // className="font-bold border-2 border-black rounded-md m-2 p-1"
                className="btn bg-search w-8 mt-3 h-7 me-2 bg-cover bg-no-repeat bg-center"
                onClick={handleSearch}
              ></button>
            </div>
            <div className="city flex justify-between sm:justify-around">
              <span className="m-4 font-bold  text-xl">
                {weather.name && weather.name}
              </span>
              <span className="m-4 font-bold  text-xl">
                {country}
              </span>
            </div>
            {/* <span className="m-4 text-lg flex sm:w-1/4 sm:m-0 sm:justify-end  text-black font-bold">38.7</span>            */}
            
            
            <div className="temp flex justify-end sm:justify-center">
              {/* <span className="m-4 text-lg  text-black font-bold">38.7</span> */}
              <span className="m-4 text-5xl  text-black font-bold">
                {weather.main && Number(weather.main.temp).toFixed(2)}&#8451;
              </span>
            </div>
            <div className="temp flex justify-between sm:justify-around">
              <span className="ms-4 text-lg  text-black font-bold">
                Feels Like
              </span>
              <span className="me-1 text-small  text-black font-bold">
                {weather.main && weather.main.feels_like}
              </span>
            </div>
            <div className="temp  flex justify-between sm:justify-around">
                  <span className="ms-4  font-bold">Sunrise</span>
                  <span className="me-1 font-bold">
                    {`${sunrise.hour}: ${sunrise.minutes}`}
                  </span>
                </div>
                <div className="temp  flex justify-between sm:justify-around">
                  <span className="ms-4  font-bold">Sunset</span>
                  <span className="me-1 font-bold">
                    {`${sunset.hour}: ${sunset.minutes}`}
                  </span>
                </div>
            <div className="flex items-center text-white text-lg justify-evenly w-screen h-1/2  ">
              <div className="info font-bold ">
                <div className="m-2">Visibility</div>
                <div className="m-2">Wind Speed</div>
                <div className="m-2">Temperature</div>
              </div>
              <div className="values font-bold ">
                <p className="m-2">{weather && weather.visibility / 1000}KM</p>
                <p className="m-2">{weather.wind && weather.wind.speed}Kmph</p>
                <p className="m-2">
                  {weather.main && Number(weather.main.temp).toFixed(2)}&#8451;
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="big text-clip overflow-hidden">
        <div className="bg-left bg-cover bg-no-repeat h-screen w-screen">
          <div
            className={`${hidden} flex items-center p-4 mb-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
            role="alert`}
          >
            <svg
              className="flex-shrink-0 inline w-4 h-4 me-3"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="currentColor"
              viewBox="0 0 20 20"
            >
              <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
            </svg>
            <span className="sr-only">Info</span>
            <div className="text-white">
              <span className="font-medium">Info alert!</span> Please Enter a Valid City Name
            </div>
          </div>
          <div className="flex justify-center  h-full w-full">
            <div className="bg-image bg-cover bg-no-repeat bg-center w-1/2 h-3/4 flex ">
              <div className="first w-1/2 h-full">
                <div className="city flex justify-between">
                  <span className="m-4 font-bold  text-lg">
                    {weather.name && weather.name}
                  </span>
                  <span className="m-4 font-bold  text-lg">
                    {country}
                  </span>
                </div>
                <div className="ms-4 flex justify-between font-bold">
                  <span>Feels like</span>
                  <span className="ms-4  font-bold">
                    {weather.main && weather.main.feels_like}
                  </span>
                </div>
                <div className="temp  flex justify-between">
                  <span className="ms-4  font-bold">Sunrise</span>
                  <span className="me-1 font-bold">
                    {`${sunrise.hour}: ${sunrise.minutes}`}
                  </span>
                </div>
                <div className="temp  flex justify-between">
                  <span className="ms-4  font-bold">Sunset</span>
                  <span className="me-1 font-bold">
                    {`${sunset.hour}: ${sunset.minutes}`}
                  </span>
                </div>
                <div className="temp  flex justify-end">
                
                  <span className="me-1 text-5xl font-bold">
                  
                    {weather.main && Number(weather.main.temp).toFixed(2)}
                    &#8451;
                  </span>
                </div>
              </div>
              <div className="second w-1/2 h-full flex-col justify-center items-center  ">
                <div className="half w-full h-1/3 overflow-hidden">
                  <div className="search flex mt-2 justify-center">
                    <input
                      type="text"
                      placeholder="Enter City"
                      value={cityName}
                      onChange={handleChange}
                      onKeyDown={handleKeyDown}
                      className="w-full border border-black rounded-md bg-transparent m-2 p-1"
                    />
                    <div className="btn2 p-3 flex items-center">
                      <button
                        type="search"
                        // className="font-bold border-2 border-black rounded-md m-2 p-1"
                        className=" bg-search w-5  h-5  bg-cover bg-no-repeat bg-center "
                        onClick={handleSearch}
                      ></button>
                    </div>
                  </div>
                  <div className="city flex mt-10 h-10 justify-evenly items-center">
                  <img src={`https://openweathermap.org/img/wn/${weather.weather && weather.weather[0].icon}@2x.png`}/>
                    <div className=" text-xl  font-bold">
                      <p className="flex justify-center items-center">
                        <p>{weather.name && weather.name},</p>
                      </p>
                        <p className="flex justify-center items-center">{country}</p>
                      <p className="flex justify-center items-center">
                        {weather.weather && weather.weather[0].main}
                      </p>
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
                    <p className="m-2">
                      {weather && weather.visibility / 1000}KM
                    </p>
                    <p className="m-2">
                      {weather.wind && weather.wind.speed}Kmph
                    </p>
                    <p className="m-2">
                      {weather.main && Number(weather.main.temp).toFixed(2)}
                      &#8451;
                    </p>
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
