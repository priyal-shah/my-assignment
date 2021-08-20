import React from 'react';
 
const Weather=()=>{
    return(
        <>
           <div className="wrap">
               <div className="search">
                   <input type="search" className="searchTerm" placeholder="✍search...." autofocus id="search"></input>
                   <button className="searchButton">search</button>
               </div>
           </div>

           <div>
                <article className="widget">
                    <div className="weatherIcon">
                       <i className={"wi wi-day-sunny"}></i>
                    </div>

                    <div className="weatherInfo">
                         <div className="temperature">
                         <span>25.5&deg;</span>
                         </div>

                         <div className="description">
                             <div className="weatherCondition">
                             sunny
                             </div>
                             <div className="place"> Pune, India</div>
                         </div>
                    </div>
                    <div className="date">{new Date().toLocaleString()}</div>
                </article>
           </div>
        </>
    	);
}

export default Weather;


