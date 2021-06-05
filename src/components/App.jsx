import React, { Component } from "react";

import RegistryType from './RegistryType'
import Header from './Header'
import Members from './Members'
import Balance from './Balance'
import Transactions from './Transactions'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

class App extends Component {
  constructor() {
    super();
    this.state = { membersData: [], registries: [] };
  }

  componentDidMount() {
    fetch(`/data/members.json`)
      .then(res => res.json())
      .then(json => this.setState({ membersData: json }));
    fetch(`/data/registries.json`)
      .then(res => res.json())
      .then(json => this.setState({ registries: json }));
  }

  render() {
    return <div className="col-lg-8 mx-auto p-3 py-md-5">
      <Header />
      <Members members={this.state.membersData}/>
      {this.state.registries.map(({type, categories}, idx) => (
        <RegistryType type={type} categories={categories} key={idx} />
      ))}
      <Balance />
      <Transactions />
    </div>;
  }
}

export default App;
