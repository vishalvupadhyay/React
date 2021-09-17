import React from 'react';

// lat > 0 : Northen Hemisphere

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
    const text = season === 'winter' ? 'Burr, its chilly' : 'Lets hit the beach'
    const icon = season === 'winter' ? 'snowflake' : 'sun'
    return (
        <div>
            <i className={`${icon} icon`} />
                <h1>{text}</h1>
            <i className={`${icon} icon`} />
        </div>
    )
}

export default SeasonDisplay;