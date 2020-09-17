import Icon from '@ant-design/icons';
import React from 'react'

const HeadSvg = () => (
    <svg t="1600234760078" className="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3209" width="25" height="25">
        <path d="M928 0h-832C43.2 0 0 43.2 0 96v832c0 52.8 43.2 96 96 96h832c52.8 0 96-43.2 96-96v-832c0-52.8-43.2-96-96-96zM896 648C896 785.024 784.576 896 646.592 896h-268.8C239.808 896 128 785.024 128 648v-272C128 238.976 239.808 128 377.792 128h125.824c137.984 0 248.384 102.976 248.384 240 1.792 25.6 25.024 48 51.2 48h43.008c27.584 0 49.6 28.992 49.6 56.384v175.616z" p-id="3210"></path>
        <path d="M704 640c0 35.2-28.8 64-64 64H384c-35.2 0-64-28.8-64-64s28.8-64 64-64h256c35.2 0 64 28.8 64 64zM576 384c0 35.2-28.8 64-64 64H384c-35.2 0-64-28.8-64-64s28.8-64 64-64h128c35.2 0 64 28.8 64 64z" p-id="3211"></path>
    </svg>
);

const HeadSvgIcon = props => <Icon component={HeadSvg} {...props} />;

export default HeadSvgIcon;