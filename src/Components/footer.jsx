import React from 'react';
import './footer.css'
const Footer = ({totaltask,completedtask}) => {
    return (
        <>
        <div className="foot">
            <span>Total Task : {totaltask}</span>
            <span>Completed Task : {completedtask}</span>
        </div>
        </>
    );
}

export default Footer;
