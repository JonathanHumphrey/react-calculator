import React from 'react'


export default function Display(props, {clearNumbers}) {
    const string = props.expression.join('')
    return (
        <div>
            <div className='display-window'>
                <input
                    type='text'
                    id='result'
                    value={string}
                    readOnly
                />
            </div>
        </div>
    )
}
