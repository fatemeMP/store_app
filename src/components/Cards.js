import React, { Component } from 'react';
import Card from "./Card";
import iphone10 from "../img/iphone10.jpg";
import iphone11 from "../img/iphone11.jpg";
import iphone12 from "../img/iphone12.jpg";
import s21 from "../img/s21.jpg";
import styles from "./Cards.module.css"

class Cards extends Component {
    constructor() {
        super();
        this.state = {
            phoneData:[
                { id:1, image:iphone10 ,name:"iphone10", cost:"500 $" },
                { id:2, image:iphone11 ,name:"iphone11", cost:"650 $" },
                { id:3, image:iphone12 ,name:"iphone12", cost:"800 $" },
                { id:4, image:s21 ,name:"s21", cost:"700 $" }
            ]
        }
    }

    render() {
        return (
            <div className={styles.container}>

             {/*list rendering */}
             { this.state.phoneData.map(phone => <Card key={phone.id} image={phone.image} name={phone.name} cost={phone.cost}/>)}

               {/*  <Card image={iphone10} name="iphone10" cost="500 $"/>
                    <Card image={iphone11} name="iphone11" cost="650 $"/>
                    <Card image={iphone12} name="iphone12" cost="800 $"/>
                    <Card image={s21} name="s21" cost="700 $"/>*/}

            </div>
        );
    }
}

export default Cards;