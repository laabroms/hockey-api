import React, { Component } from 'react';
import axios from 'axios';
import Table from './table';

class Home extends Component {
    constructor(props) {
        super(props);
        this.state = {
        error: null,
        isLoaded: false,
        teams: null,
        };
    }

    componentDidMount = async () => {

        var url =
          "https://statsapi.web.nhl.com/api/v1/teams";
        const response = await axios.get(url)

        this.setState({
            teams: response.data,
            isLoaded: true,
        
        }) 
        console.log(this.state.teams)
    }

    render() {
        return (
      <>
        
        {this.componentDidMount ? (
            <Table teams={this.state.teams} />
        ): null }
        
      </>
    );
    }
}

export default Home;