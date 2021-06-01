import RegistryType from './RegistryType'
import data from '../models/registries'

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

  return <>
    {data.map(({type, categories}, idx) => (
      <RegistryType type={type} categories={categories} key={idx} />
    ))}
  </>;
}

export default App;
