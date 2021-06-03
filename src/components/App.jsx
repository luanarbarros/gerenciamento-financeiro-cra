import RegistryType from './RegistryType'
import Header from './Header'
import Members from './Members'
import Balance from './Balance'
import registries from '../models/registries'
import membersData from '../models/members'

import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

import { library } from '@fortawesome/fontawesome-svg-core'
import * as Icons from '@fortawesome/free-solid-svg-icons';

const iconList = Object
  .keys(Icons)
  .filter(key => key !== "fas" && key !== "prefix" )
  .map(icon => Icons[icon])

library.add(...iconList)

function App() {

  return <div className="col-lg-8 mx-auto p-3 py-md-5">
    <Header />
    <Members members={membersData}/>
    {registries.map(({type, categories}, idx) => (
      <RegistryType type={type} categories={categories} key={idx} />
    ))}
    <Balance />
  </div>;
}

export default App;
