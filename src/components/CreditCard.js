import React, { Component } from 'react';
import './CreditCard.css'

class CreditCard extends Component {
  render() {
    return (
      <div className="CreditCard" style={{
        backgroundColor: this.props.bgColor,
        color: this.props.color,
      }}>
        <div className="type">
          {this.props.type === "Visa" && <img src="/assets/images/visa.png" alt='visa'/>  }
          {this.props.type === "Master Card"  && <img src="/assets/images/master-card.svg" alt='master card'/>}
        </div>
        <div className="number">•••• •••• •••• {this.props.number.substr(-4)}</div>
        <div className="right">
        <div className="expires-bank ">
          <span>Expires {('0'+this.props.expirationMonth).substr(-2)}/{this.props.expirationYear.toString().substr(2)} </span>
          <span className="bank">{this.props.bank}</span>
        </div>
        <div className="owner">{this.props.owner}</div>
        </div>
      </div>
    );
  }
}

export default CreditCard;