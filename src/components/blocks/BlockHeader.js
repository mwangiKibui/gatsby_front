import React from "react";


const BlockHeader = ({title}) => {
 return (
    <div className="block-header">
        <h3 className="block-header__title">{title}</h3>
        <div className="block-header__divider" />
    </div>
 )
};

export default BlockHeader;