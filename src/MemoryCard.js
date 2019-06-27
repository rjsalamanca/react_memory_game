import React, { Component } from 'react';

import PropTypes from 'prop-types';

import './MemoryCard.css';

class MemoryCard extends Component{
    state = {
        isFlipped: this.props.isFlipped,
        symbol: this.props.symbol
    }

    handleClick = async (e) => {
        e.preventDefault();
        this.setState({
            isFlipped: !this.state.isFlipped
        });
    }

    render(){
        let memoryCardInnerClass = 'MemoryCardInner';

        if (!!this.props.isFlipped) {
            memoryCardInnerClass += ' flipped';
        }

        return (
            <div className='MemoryCard' onClick ={this.props.pickCard}>
                <div className={memoryCardInnerClass}>
                    <div className='MemoryCardBack'>
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" className="MemoryImage" alt="MemoryImage"/>
                    </div>
                    <div className='MemoryCardFront'>{this.state.symbol}</div>

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