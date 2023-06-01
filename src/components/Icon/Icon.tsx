import React from 'react';
interface IIcon {
    icon: string;
    label: string;
}
const Icon = ({icon,label}: IIcon) => <img src={icon} alt={label} />

export default Icon;