import React, { useState, useEffect, useMemo } from 'react';

function App() {
  const [weather, setWeather] = useState([]);
  const [city, setCity] = useState('');
  const [current, setCurrent] = useState(false);
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (city) => {
    const apiKey = "256156d28a4575e841a3cce2fdfc060b";
    try {
      setLoading(true);
      const resp = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`);
      if (!resp.ok) {
        throw new Error(`Couldn't fetch weather: ${resp.statusText}`);
      }
      const data = await resp.json();
      console.log(data);
      let sortDetails = [];
      setWeather(sortData(sortDetails, data));
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (current && city) {
      fetchWeather(city);
      setCurrent(false);
    }
  }, [city, current]);

  const sortData = (arr, data) => {
    let obj = {
      city: data.name,
      temp: `${data.main.temp}`,
      weath: data.weather[0].main,
      wind: `${data.wind.speed} m/s`,
    };
    arr.push(obj);
    return arr;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setCurrent(true);
  };
  return (
    <div className="text-center bg-[#EEF7FF] h-screen">
      <h1 className='text-4xl font-semibold bg-[#CDE8E5] h-20 p-4'>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} className='shadow-lg border mt-5 w-64 mr-5 p-2 hover:border-cyan-600 rounded' placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} />
        <button type="submit" className='text-lg bg-[#4D869C] py-2 px-3 w-24 rounded text-white hover:bg-[#7AB2B2]'>Search</button>
      </form>
      {loading ? <p>Loading...</p> : null}
      <ul id='container' className=''>
        {weather.map((w, index) => (
          <li key={index} className='text-xl border bg-[#FDFFE2] w-96 mx-auto mt-10 rounded p-5 shadow-md box-shado'>
            <p className='font-bold'>City: {w.city}</p>
            <p>Temperature: {w.temp} <small>°C</small></p>
            <p>Weather: {w.weath}</p>
            <p>Wind: {w.wind}</p>
          </li>
        ))}
      </ul>
      <footer className='fixed bottom-0 bg-[#538392] w-screen'>&copy; 2024 Guddu Kumar</footer>
    </div>
  );
}

export default App;


