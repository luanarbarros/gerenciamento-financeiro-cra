import React, { Component } from "react";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import sumTransactions from '../models/balance'

class Balance extends Component {
    constructor() {
      super();
      this.state = { membersData: [], registries: [] };
    }

    componentDidMount() {
        fetch(`/data/transactions.json`)
          .then(res => res.json())
          .then(json => {
                const fundsSum = sumTransactions('reserva', json);
                const investmentsSum = sumTransactions('investimento', json);
                const expensesSum = sumTransactions('despesa', json);
                const totalIncome = (fundsSum + investmentsSum).toFixed(2);
                const totalExpenses =  expensesSum.toFixed(2);
                
                this.setState({ totalIncome, totalExpenses })
            });
    }

    render() {
        return <>
        <div className="py-md-3 border-bottom">
            <div className="col-10 ">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <FontAwesomeIcon icon="file-invoice-dollar" fixedWidth size="lg" className="me-2"/>
                <span className="fs-4">Balanço da última semana</span>
                </a>
            </div>
        </div>

        <div className="row gx-5 p-3 py-md-5">
            <div className="col-6 ">
                <div className="alert alert-success h4 row">
                <div className="col">Entradas</div>
                <div className="col text-end">R$ { this.state.totalIncome }</div>
                </div>
            </div>
            <div className="col-6">
                <div className="alert alert-danger h4 row">
                <div className="col">Saídas</div>
                <div className="col text-end">R$ { this.state.totalExpenses }</div>
                </div>
            </div>
        </div>
        </>;
    }
}

export default Balance;