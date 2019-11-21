import React from 'react';

export default function SplitPane (){
    return (
        React.createElement('div',  {className: 'SplitPane'},
            React.createElement('div',  {className: 'SplitPane-left'}, 'Left'),
            React.createElement('div',  {className: 'SplitPane-right'}, 'Right'))
    )
}