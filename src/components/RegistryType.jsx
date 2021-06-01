import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function RegistryType({type, categories}) {
    return (
    <div className="row alert alert-secondary" id="expenses">
        <h4>{ type }</h4>
        {categories.map(({name, icon}, idx) => (
            <div key={ idx } className="col-2 text-center fs-5">
                <a href="/" className="text-dark text-decoration-none">
                <div className="feature-icon bg-secondary">
                    <FontAwesomeIcon icon={ icon }/>
                    
                </div>
                <p className="legend">{ name }</p></a>
            </div>
        ))}

    </div>
    );
  }
  
  export default RegistryType;