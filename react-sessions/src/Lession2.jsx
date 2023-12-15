import React from "react"

// import "./Lesson2.css"

import styles from "./Lession2.module.css"


class Lession2 extends React.Component{

    constructor(props){
        super(props)
        console.log(props)
    }

    render(){

        //destructuring
        const {name,designation}=this.props
        return (
            <>
        <h1 className={styles.txt}>{name}</h1>
        <h1 className={styles.txt}>{designation}</h1>
        </>)
    }
}


export default Lession2