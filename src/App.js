import  Axios  from 'axios';
function App() {
  const getWeather = () => {
    Axios.get(`http://api.openweathermap.org/data/2.5/forecast?q=mumbai&appid=8088aab0992fb7d20014538ca693715c`).then((response)=>{
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
      
    </div>
  );
}

export default App;
