import React from 'react';
import Card from './components/Card';
import './index.css';
function Store(){
    return(
        <div className='store-top-container'>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
        </div>
    );
}
export default Store;