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
    <div className="text-center">
      <h1 className='text-4xl font-semibold bg-yellow-400 h-20 p-4'>Weather Dashboard</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={city} className='shadow-lg border mt-5 w-64 mr-5 p-2 border-black rounded' placeholder='Enter Your City' onChange={(e) => setCity(e.target.value)} />
        <button type="submit" className='text-lg bg-blue-600 py-2 px-3 w-24 rounded text-white hover:bg-blue-400'>Search</button>
      </form>
      {loading ? <p>Loading...</p> : null}
      <ul>
        {weather.map((w, index) => (
          <li key={index} className='text-xl border border-black w-96 mx-auto mt-10 rounded p-5 shadow-md box-shado'>
            <p className='font-bold'>City: {w.city}</p>
            <p>Temperature: {w.temp} <small>°C</small></p>
            <p>Weather: {w.weath}</p>
            <p>Wind: {w.wind}</p>
          </li>
        ))}
      </ul>
      <footer className='mt-80 bg-slate-600 h-10'>&copy; 2024 Guddu Kumar</footer>
    </div>
  );
}

export default App;


