import { useEffect, useState } from "react"

export const Weather = ({lat, lon, name}) => {
  const [weather, setWeather] = useState({})
  const [charge, setCharge] = useState(false)

  useEffect(() => {
    const api_key = import.meta.env.VITE_WEATHER_KEY
    const weather_url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${api_key}`
    fetch(weather_url)
      .then(res => res.json())
      .then(res => {
        if (res.cod === 200) {
          setWeather(res)
          setCharge(true)
        }
      })
      .catch(err => console.log(err))
  }, [])

  return (<>
  {
    charge ?
      <>
        <h3>Weather in {name}</h3>
        <p>temperature { (weather?.main?.temp - 273.15).toFixed(2) } Celsius</p>
        <img 
          src={`http://openweathermap.org/img/wn/${weather?.weather[0]?.icon}@2x.png`}
          alt={weather?.weather[0]?.description}
        />
        <p>wind { weather?.wind?.speed } m/s</p>
      </> : ""
  }
  </>)
}