import React from "react";
import './SeasonDisplay.css'

const seasonConfig = {
    summer : {
        text:'Lets hit the beach',
        iconName:'sun'
    },
    winter : {
        text:'Lets hit the Bansko',
        iconName:'snowflake'
    }
}
const getSeason = (lat, month) => {
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    }
    else {
        return lat > 0 ? 'winter' : 'summer';
    }
}
const SeasonDisplay = function (props) {
    const season = getSeason(props.lat, new Date().getMonth())
    //const text = season === "winter" ? "mnogo studeno" : "jega"
    const {text,iconName } =seasonConfig[season] //



    const icon = season === "winter" ? "snowflake" : "sun"
    return (
        <div className={`season-display ${season}` }>
        <i className= {`icon-left massive ${iconName} icon`}></i>
        {text}
        <i className= {`icon-right massive ${iconName} icon`}></i>
        </div>);
};

export default SeasonDisplay;
