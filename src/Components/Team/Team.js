import React from 'react'

function Team(props) {
    const {team} = props
    return (
        <React.Fragment>
          <div className="col-md-3">
              <img src={team.image} alt={team.title} className="team-image"/>
              <h2>{team.title}</h2>
              <h6>- {team.job} -</h6>
              <p>{team.desc}</p>
          </div>
        </React.Fragment>
    )
}

export default Team
