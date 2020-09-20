import React from 'react';

function Hello(props) {
    return <div>{props.name} 안녕하세요</div>
}

Hello.defaultProps = {
    name: '이름없음'
}

export default Hello;
