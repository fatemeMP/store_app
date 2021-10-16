import React, { Component } from 'react';
import styles from "./Search.module.css";


class Search extends Component {
    constructor(){
        super();
        this.state = {
            text: ""
        }
    }

    changeHandler = event => {
        this.setState ({
            text : event.target.value,
        })
    }

    render() {
        return (
                <div className={styles.container}>
                        <p>search what you want</p>
                    <div>
                        <input type="text" value={this.state.text} onChange={this.changeHandler} placeholder="search..." />
                        <br/>
                        <br/>
                        <span>{this.state.text}</span>
                    </div>
                </div>
        );
    }
}

export default Search;