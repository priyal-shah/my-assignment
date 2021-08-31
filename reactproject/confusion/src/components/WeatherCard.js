import React, {useEffect} from 'react';


const WeatherCard=({tempinfo})=>{

	const [weatherState, setweatherState]=React.useState("");
	let date=`${(new Date(tempinfo.sunset*1000)).getHours()}:${(new Date(tempinfo.sunset*1000)).getMinutes() }`;
	

    useEffect(()=>{
    	if(tempinfo.weathermood){
			switch(tempinfo.weathermood){
			case "Clouds":setweatherState("wi-day-cloudy");
			break;
			case "Clear":setweatherState("wi-day-sunny");
			break;
			case"Haze":setweatherState("wi-day-haze");
			break;
			case "Mist":setweatherState("wi-day-fog");
			break;
			}

    	}

    },[tempinfo.weathermood]);
	

	return(

		<article className="widget">
                    <div className="weatherIcon">
                       <i className={`wi ${weatherState}`}></i>
                    </div>

                    <div className="weatherInfo">
                         <div className="temperature">
                         <span>{tempinfo.temp}&deg;</span>
                         </div>

                         <div className="description">
                             <div className="weatherCondition">
                             {tempinfo.weathermood}
                             </div>
                             <div className="place"> {tempinfo.name}, India</div>
                         </div>
                    </div>
                    <div className="date">{new Date().toLocaleString()}</div>


                    <div className="extra-temp">
                        <div className="temp-info-minmax">
                            <div className="two-sided-section">
                               <p>
                                  <i className={"wi wi-sunset"}></i>
                               </p>
                               <p className="extra-info-leftside">
                               {date} PM <br/>
                               Sunset
                               </p>
                            </div>


                            <div className="two-sided-section">
                               <p>
                                  <i className={"wi wi-humidity"}></i>
                               </p>
                               <p className="extra-info-leftside">
                               {tempinfo.humidity} <br/>
                               Humidity
                               </p>
                            </div>

                        </div>
                        
                        <div className="weather-extra-info">
                            <div className="two-sided-section">
                               <p>
                                  <i className={"wi wi-rain"}></i>
                               </p>
                               <p className="extra-info-leftside">
                               Pressure <br/>
                               {tempinfo.pressure} MM
                               </p>
                            </div>

                            <div className="two-sided-section">
                               <p>
                                  <i className={"wi wi-strong-wind"}></i>
                               </p>
                               <p className="extra-info-leftside">
                               Wind <br/>
                               {tempinfo.speed}
                               </p>
                            </div>
                        </div>

                    </div>
                </article>


		);


}

export default WeatherCard;