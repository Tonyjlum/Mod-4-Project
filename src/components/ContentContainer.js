import React from 'react'
import ChefProfile from './ChefProfile'

class ContentContainer extends React.Component {

  render() {
    return(
      <div className="main-content-container" hidden={this.props.hidden}>
        {this.props.chefData.map(chef => {
          return <ChefProfile chef={chef}/>
        })}
      </div>
    )
  }
}

export default ContentContainer
