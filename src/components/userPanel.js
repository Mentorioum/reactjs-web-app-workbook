import React from 'react';
function formatterDate(date){
    return `${date.getDate()}.${date.getMonth() + 1}.${date.getFullYear()}`;
}

export default function UserPanel (props) {
    return (
        <div className="App-header">
            <div className="UserInfo">
                <img className="Avatar"
                    src={props.src}
                    alt={props.name}
                />
                <div className="UserInfo-name">
                    Welcome {props.name} {props.lastName}
                </div>
            </div>
            <div className="Comment-text">
                {formatterDate(props.date)}
            </div>
        </div>
    )
};