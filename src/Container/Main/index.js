import React, { Component } from 'react'
import { Redirect } from "react-router-dom";

export default class Main extends Component {
    state = { location: this.props.location, isPersian: false, isEnglish: false }
    find() {
        if (this.state.location.country_name === "Iran") {
            this.setState({ isPersian: true })
        } else {
            this.setState({ isEnglish: true })
        }
        console.log(this.props.location)
    }
    componentWillMount = () => {
        this.find();
    }

    render() {
        const { isPersian, isEnglish } = this.state;

        if (isPersian) {
            return <Redirect to="/Fa" />;
        } else if (isEnglish) {
            return <Redirect to="/En" />;
        }
        return (
            <div>
                Loading
      </div>
        )
    }
}
