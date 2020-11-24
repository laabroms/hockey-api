import React, { Component } from 'react';
import axios from 'axios';

class Player extends Component {
    constructor(props) {
        super(props);
        this.state = {
            player: null
        }
    }

    componentDidMount = async () => {

        var url =
          `https://statsapi.web.nhl.com/api/v1/people/${this.props.match.params.playerId}`;
        const response = await axios.get(url)

        this.setState({
            player: response.data,
        
        }) 
        console.log(this.state.player)
    }



    render() {

         
    
    

        return (
            <>
            Player page
             {this.state.player !== null && this.state.player.people.length > 0 ? (
                this.state.player.people.map((player, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td>{player.fullName}</td>
                        <td>Birthplace: {player.birthCity}, {player.birthCountry}</td>
                        <td>Birthday: {player.birthDate}</td>
                        <td>Height: {player.height}</td>
                        <td>Weight: {player.weight}</td>
                      
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </>
        );
    }
}

export default Player;