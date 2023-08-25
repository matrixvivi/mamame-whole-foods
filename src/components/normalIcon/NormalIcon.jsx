import React from 'react'
import normalIcon from '../../assets/menu.svg'

const NormalIcon = ({onClick}) => {
    const iconStyle = {
        width: '1.8em',
        height: 'auto',
        position: 'absolute',
        left: '1.7em',
        cursor: 'pointer'
    }
    return (
        <img style={iconStyle} src={normalIcon} onClick={onClick} />
    )
}

export default NormalIcon