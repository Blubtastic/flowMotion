import React, {Component} from 'react'
import Cover from '../Cover';

//Homepage content. Everything except the navbar
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
