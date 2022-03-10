import './SeasonDisplay.css';
import React from 'react';
//<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/semantic-ui/2.4.1/semantic.min.css" />

const seasonConfig = {
    summer: {
        text: 'Let´s hit the beach',
        iconName: 'sun'
    },
    winter: {
        text: 'Brr, It is cold',
        iconName: ' snowflake'
    }
}

const getSeason = (lat, month) => {
    console.log(lat, month);
    if (month > 2 && month < 9) {
        return lat > 0 ? 'summer' : 'winter';
    } else {
        return lat > 0 ? 'winter' : 'summer';
    }

}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getMonth());
    const { text, iconName } = seasonConfig[season] // {text, iconName}

    return (
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`} />
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`} />            
        </div>
    );

};

export default SeasonDisplay;