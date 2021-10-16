import React, { Component } from 'react';
import styles from "./Card.module.css";
import up from "../img/up.svg";
import down from "../img/down.svg";


class Card extends Component {
    constructor(){
        super();
        this.state = {
            counter : 0
        }
    }

    downHandler = () => {
        if(this.state.counter>=1){         {/*if our countar was 1 or couter>1 do down*/}
        this.setState(prevState => (
            {counter : prevState.counter -1})
        
        )
    }
}

    upHandler = () => {
        this.setState(prevState =>({
            counter: prevState.counter +1,
        }))
    }

    render() {
        const {image ,name, cost} = this.props;
        const{counter}=this.state;
        return (
            <div className={styles.container}>
                <img src={image} alt="smartphone"/>
                    <h3>{name}</h3>
                          <p>{cost}{" "}{counter ? `*${counter} = ${counter * Number(cost.split(" ")[0])}$ ` : ""} </p>

{/*in this part we make under border of our carts*/}

<div className={styles.counter}>
  <img className={!counter ? styles.deactive: ""} src={down} alt="Arrow" onClick={this.downHandler}/>
    <span>{counter}</span>
  <img src={up} alt="up" onClick={this.upHandler}/>
</div>
 
            </div>
          
        );
    }
}

export default Card;