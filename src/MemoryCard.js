import React, { Component } from 'react';

import './MemoryCard.css';

class MemoryCard extends Component{
    state = {
        isFlipped: false
    }

    handleClick = async (e) => {
        e.preventDefault();
        this.setState({
            isFlipped: !this.state.isFlipped
        });
        console.log('FLIP')
    }

    render(){
        let memoryCardInnerClass = 'MemoryCardInner';

        if (!!this.state.isFlipped) {
            memoryCardInnerClass += ' flipped';
        }

        return (

            <div className='MemoryCard' onClick ={(e)=> this.handleClick(e)}>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" className="MemoryImage" alt="MemoryImage"/>
                    </div>
                    <div className='MemoryCardFront'>∆</div>

                </div>
            </div>
        );
    }
}

export default MemoryCard;