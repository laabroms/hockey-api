import React, { Component } from 'react';
import axios from 'axios';
import Roster from './roster';
import '../css/teamPage.scss';
import { logo } from '../components/logo';



class TeamPage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            team: null,
            location: '',
            name: ''
        }
    }

    componentDidMount = async () => {

        var url =
          `https://statsapi.web.nhl.com/api/v1/teams/${this.props.match.params.id}`;
        const response = await axios.get(url)

        this.setState({
            team: response.data,
            location: response.data.teams[0].locationName.toUpperCase(),   
            name: response.data.teams[0].teamName.toUpperCase(),
        }) 
        console.log(this.state.team)
        console.log(this.state.location)
    }


    render() {


    
    

        return (
            <>
            
            {/* <p>{this.state.team.teams[0].officialSiteUrl}</p> */}
            <div className='container'>
             {this.state.team !== null && this.state.team.teams.length > 0 ? (
                this.state.team.teams.map((team) => {
                    {/* let locationUpper = {team.shortName}.toUpperCase(); */}
                  return (
                    <>
                        <div className='titleRow'>
                            <img src={logo[`${this.props.match.params.id}`].url} height='150' />
                            <div className='column'>
                                <span className='teamLocation' style={{color: logo[`${this.props.match.params.id}`].colors.primary, WebkitTextStrokeColor: logo[`${this.props.match.params.id}`].colors.secondary}}>{this.state.location}</span>
                                <span className='teamName' style={{color: logo[`${this.props.match.params.id}`].colors.primary, WebkitTextStrokeColor: logo[`${this.props.match.params.id}`].colors.secondary}}>{this.state.name}</span>
                            </div>
                        </div>
                        <p>{team.officialSiteUrl}</p>
                        <p>Founded: {team.firstYearOfPlay}</p>
                        <a href={`${team.officialSiteUrl}`}>GO TO SITE</a>
                        
                        <p>Location: {team.locationName}</p>
                        <p>Venue: {team.venue.name}</p>
                      <Roster id={this.props.match.params.id} />
                    </>
                  );
                })

              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
              </div>
            </>
        );
    }
}

export default TeamPage;