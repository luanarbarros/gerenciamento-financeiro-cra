import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Members({members}) {
    return (
        <div className="row alert">
            {members.map(({name, icon}, idx) => (            
            <div key={ idx } className="col-2 text-center fs-5">
                <a href="/" className="text-dark text-decoration-none">
                <FontAwesomeIcon icon={ icon } size="3x" />
                <p className="legend">{ name }</p>
                </a>
            </div>
            ))}
        </div>
    );
}

export default Members;