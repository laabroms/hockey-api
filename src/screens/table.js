import React from "react";
// eslint-disable-next-line
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const logo = {
    1: 'https://upload.wikimedia.org/wikipedia/en/9/9f/New_Jersey_Devils_logo.svg',
    2: 'https://upload.wikimedia.org/wikipedia/en/4/42/Logo_New_York_Islanders.svg',
    3: 'https://upload.wikimedia.org/wikipedia/commons/a/ae/New_York_Rangers.svg',
    4: 'https://upload.wikimedia.org/wikipedia/en/d/dc/Philadelphia_Flyers.svg',
    5: 'https://upload.wikimedia.org/wikipedia/en/c/c0/Pittsburgh_Penguins_logo_%282016%29.svg',
    6: 'https://upload.wikimedia.org/wikipedia/en/1/12/Boston_Bruins.svg',
    7: 'https://upload.wikimedia.org/wikipedia/en/9/9e/Buffalo_Sabres_Logo.svg',
    8: 'https://upload.wikimedia.org/wikipedia/commons/6/69/Montreal_Canadiens.svg',
    9: 'https://upload.wikimedia.org/wikipedia/en/b/b2/Ottawa_Senators_2020-2021_logo.svg',
    10: 'https://upload.wikimedia.org/wikipedia/en/b/b6/Toronto_Maple_Leafs_2016_logo.svg',
    12: 'https://upload.wikimedia.org/wikipedia/en/3/32/Carolina_Hurricanes.svg',
    13: 'https://upload.wikimedia.org/wikipedia/en/4/43/Florida_Panthers_2016_logo.svg',
    14: 'https://upload.wikimedia.org/wikipedia/en/2/2f/Tampa_Bay_Lightning_Logo_2011.svg',
    15: 'https://upload.wikimedia.org/wikipedia/en/2/2d/Washington_Capitals.svg',
    16: 'https://upload.wikimedia.org/wikipedia/en/2/29/Chicago_Blackhawks_logo.svg',
    17: 'https://upload.wikimedia.org/wikipedia/en/e/e0/Detroit_Red_Wings_logo.svg',
    18: 'https://upload.wikimedia.org/wikipedia/en/9/9c/Nashville_Predators_Logo_%282011%29.svg',
    19: 'https://upload.wikimedia.org/wikipedia/en/e/ed/St._Louis_Blues_logo.svg',
    20: 'https://upload.wikimedia.org/wikipedia/en/6/61/Calgary_Flames_logo.svg',
    21: 'https://upload.wikimedia.org/wikipedia/en/4/45/Colorado_Avalanche_logo.svg',
    22: 'https://upload.wikimedia.org/wikipedia/en/4/4d/Logo_Edmonton_Oilers.svg',
    23: 'https://upload.wikimedia.org/wikipedia/en/3/3a/Vancouver_Canucks_logo.svg',
    24: 'https://upload.wikimedia.org/wikipedia/en/7/72/Anaheim_Ducks.svg',
    25: 'https://upload.wikimedia.org/wikipedia/en/c/ce/Dallas_Stars_logo_%282013%29.svg',
    26: 'https://upload.wikimedia.org/wikipedia/en/6/63/Los_Angeles_Kings_logo.svg',
    28: 'https://upload.wikimedia.org/wikipedia/en/3/37/SanJoseSharksLogo.svg',
    29: 'https://upload.wikimedia.org/wikipedia/en/5/5d/Columbus_Blue_Jackets_logo.svg',
    30: 'https://upload.wikimedia.org/wikipedia/en/1/1b/Minnesota_Wild.svg',
    52: 'https://upload.wikimedia.org/wikipedia/en/9/93/Winnipeg_Jets_Logo_2011.svg',
    53: 'https://upload.wikimedia.org/wikipedia/en/2/27/Arizona_Coyotes.svg',
    54: 'https://upload.wikimedia.org/wikipedia/en/a/ac/Vegas_Golden_Knights_logo.svg',
}



class Table extends React.Component {
  constructor(props) {
      super(props);
      this.state = {
        teams: this.props.teams,
      }
  }

  



 
  render() {

      if (!this.props.teams) return (
        <div style={{ position: "fixed", left: "50%", top: "50%" }}>
          Loading...
        </div>
      );



      

      return (
        <>
       
          <table>
            <thead>
              <tr>
                <th></th>
                <th>Team</th>
                <th>Location</th>
                <th>Venue</th>
                
              </tr>
            </thead>
            <tbody>
              {this.props.teams !== null && this.props.teams.teams.length > 0 ? (
                this.props.teams.teams.map((team, index) => {
                  return (
                    <>
                      <tr key={index}>
                        <td><img src={logo[`${team.id}`]} width='30' /></td>
                        {/* <td>{team.id}</td> */}
                        <td>
                            <Link to={`/${team.id}`}>{team.name}</Link>
                        </td>
                        <td>{team.locationName}</td>
                        <td>{team.venue.name}</td>
                      </tr>
                    </>
                  );
                })
              ) : (
                <tr>
                  <td colSpan="5">Loading...</td>
                </tr>
              )}
            </tbody>
          </table>
        </>
      );
  }
};



export default Table;
