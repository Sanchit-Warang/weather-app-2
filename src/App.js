<<<<<<< HEAD
import React from 'react'
=======
import Axios from 'axios';
import Cards from './components/Cards';
>>>>>>> 62442343773d78356ed3cb14e0b76180838b471e
function App() {
  const getWeather = () => {
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=8088aab0992fb7d20014538ca693715c`).then((response) => {
      console.log(response)
      const dailyData = response.data.list.filter(reading => {
        return reading.dt_txt.includes("18:00:00")
      }
      )
      console.log(dailyData)
    })
  }
  return (
    <div className="App">
<<<<<<< HEAD

=======
      <Cards/>
>>>>>>> 62442343773d78356ed3cb14e0b76180838b471e
    </div>
  );
}

export default App;
