import React, {Component} from 'react'
import {Link} from 'react-router-dom';

export default class Button extends Component {
  render() {
    return(
        <Link to="/"><div className="button">VIEW JOBS</div></Link>
    )
  }
}
