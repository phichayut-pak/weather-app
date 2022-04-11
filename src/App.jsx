import Weather from "./components/Weather/Weather";
import WeatherForm from "./components/Weather/WeatherForm";
import Card from "./components/UI/Card";
import { useState, Suspense} from 'react'
import axios from 'axios'

function App() {
  const [data, setData] = useState('')
  const apiKeys = '97cf551e93fb12e1a6ecc8b1fca1df11'
  const onGetCountry = async (country) => {
    try {
      const response = await axios.get(`https://api.openweathermap.org/data/2.5/weather?q=${country}&units=metric&APPID=${apiKeys}`)
      setData(response)
    } catch(err) {
      setData('error')
    }
  }


  return (
    <div className="App">
      <div className="min-h-screen bg-indigo-500 flex flex-col justify-center items-center">
        <Suspense fallback={<Card><h1>Loading...</h1></Card>}>
          <Weather data={data} ></Weather>
        </Suspense>
        
        <WeatherForm onSendCountry={onGetCountry}></WeatherForm>
      </div>
    </div>
  );
}

export default App;
