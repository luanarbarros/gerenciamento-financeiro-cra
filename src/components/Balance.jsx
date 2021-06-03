import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import balance from '../models/balance'

function Balance() {
    return (
        <>
        <div className="py-md-3 border-bottom">
        <div className="col-10 ">
            <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
            <FontAwesomeIcon icon="file-invoice-dollar" fixedWidth size="lg" className="me-2"/>
            <span className="fs-4">Resumo da última semana</span>
            </a></div>
        </div>

        <div className="row gx-5 p-3 py-md-5">
        <div className="col-6 ">
            <div className="alert alert-success h4 row">
            <div className="col">Entradas</div>
            <div className="col text-end">{ balance.totalIncome }</div>
            </div>
        </div>
        <div className="col-6">
            <div className="alert alert-danger h4 row">
            <div className="col">Saídas</div>
            <div className="col text-end">{ balance.totalExpenses }</div>
            </div>
        </div>
        </div>
        </>
    );
}

export default Balance;