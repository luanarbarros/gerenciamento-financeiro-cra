import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function Header() {
    return (
        <>
        <img src= {'imgs/financas.png'} className="img-fluid mb-3" alt="..." />
        <header className="d-flex align-items-center pb-3 mb-5 border-bottom">
            <div className="col-9">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            {/* <i className="fas fa-home fs-2 me-2"></i> */}
            <FontAwesomeIcon icon="home" fixedWidth size="lg" className="me-2"/>
            <span className="fs-4">Casa</span>
            </a></div>
            <div className="col-3 text-end">
            <button type="button" className="btn btn-warning" style={{"fontWeight": "bold"}}>
            <FontAwesomeIcon icon="plus-circle" fixedWidth  />
                Despesa
            </button>
            <button type="button" className="btn" style={{"fontWeight": "bold", "fontSize": "1.5em"}}>
            <FontAwesomeIcon icon="cog" fixedWidth  />
            </button>
            </div>
        </header>
        </>
    );
}

export default Header;