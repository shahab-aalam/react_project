import React from "react";

const Main = () =>
{
const date  = new Date()
const hour = date.getHours()


let timeOfDay

if(hour < 12)
timeOfDay = 'Good Morning'
else if(hour >= 12 || hour <=5)
timeOfDay = 'Good After Noon'
else if(hour >5  || hour <=8)
timeOfDay = 'Good Evening'
else 
timeOfDay = 'Good Night'


return <h3>Hi Shahab, {timeOfDay}</h3>

}

export default Main;
