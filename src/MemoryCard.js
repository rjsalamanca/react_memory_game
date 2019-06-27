import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './MemoryCard.css';

class MemoryCard extends Component{
    render(){
        let memoryCardInnerClass = 'MemoryCardInner';

        if (!!this.props.isFlipped) {
            memoryCardInnerClass += ' flipped';
        } else {
            memoryCardInnerClass = 'MemoryCardInner';
        }

        return (
            <div className='MemoryCard' onClick ={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" className="MemoryImage" alt="MemoryImage"/>
                    </div>
                    <div className='MemoryCardFront'>{this.props.symbol}</div>

                </div>
            </div>
        );
    }
}

export default MemoryCard;

MemoryCard.propTypes = {
    symbol: PropTypes.string,
    isFlipped: PropTypes.bool,
    pickCard: PropTypes.func
}