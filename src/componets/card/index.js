import React, {Component} from 'react';
import './style.scss'
import Button from "../button";

class Card extends Component {
    render() {
        return(
            <div className="card">
                <div>
                    <img src={this.props.img} alt="img"/>
                </div>
                {this.props.children}
                <Button color="primary">
                    {this.props.btnText}
                </Button>
            </div>
        )
    }
}

export default Card;
