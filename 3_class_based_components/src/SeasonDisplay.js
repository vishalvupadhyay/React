import React from 'react';
import './SeasonDisplay.css';

// lat > 0 : Northen Hemisphere

const seasonConfig = {
    summer: {
        text: 'Let\'s hit the beach!',
        iconName: 'snowflake'
    },
    winter: {
        text: 'Burr its cold!',
        iconName: 'snowflake'
    }
}

const getSeason = (lat, month) => {
    if (month>2 && month<9){
        return lat>0 ? 'summer' : 'winter'
    }
    else{
        return lat>0 ? 'winter' : 'summer'
    }
}

const SeasonDisplay = (props) => {
    const season = getSeason(props.lat, new Date().getDate())
    const {text, iconName} = seasonConfig[season]
    return (
        <div className={`season-display ${season}`}>
            <i className={`${iconName} icon-left icon massive`} />
                <h1>{text}</h1>
            <i className={`${iconName} icon-right icon massive`} />
        </div>
    )
}

export default SeasonDisplay;