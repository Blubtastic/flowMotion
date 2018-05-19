import React, {Component} from 'react'
import Cover from '../Cover';

export default class Home extends Component {
  render() {
    return(
      <div className="page">
        <Cover image={"cover.jpg"} height={'950px'}/>
        <div></div>
      </div>
    )
  }
}
