import React from 'react'

const Spinner = (props)=> { 
    return (
        <div class="ui active dimmer">
            <div class="ui big text loader">{props.text || Spinner.defaultProperties.message }</div>
        </div>
    )
}
Spinner.defaultProperties = {
    message:'Loading..'
}
export default Spinner