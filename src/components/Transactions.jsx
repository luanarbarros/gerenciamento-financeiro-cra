import React, { Component, createRef } from "react";

import Transaction from './Transaction'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

class Transactions extends Component {
    buscaInput = createRef();

    search = () => {
        const searchTerm = this.buscaInput.current.value;
        const newState = this.state;
        newState.searchTerm = searchTerm;

        if (searchTerm.length === 0) {
            newState.transactions = newState.allTransactions;
        }
        else {
            let pattern = new RegExp(searchTerm, "g");
            let filteredTransactions = newState.allTransactions.filter((val) => {
                return pattern.test(val.description)
            });
            newState.transactions = filteredTransactions;
        }
        this.setState(newState);
    }

    constructor() {
      super();
      this.state = { transactions: [], allTransactions: [], seachTerm: "" };
    }

    componentDidMount() {
        fetch(`/data/transactions.json`)
          .then(res => res.json())
          .then(json => {
                this.setState({ allTransactions: json, transactions: json })
            });
    }

    render() {
        return <>
        <div className="py-md-3 border-bottom">
            <div className="col-10 ">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                <FontAwesomeIcon icon="file-invoice-dollar" fixedWidth size="lg" className="me-2"/>
                <span className="fs-4">Resumo das últimas transações</span>
                </a>
            </div>
        </div>

        <br />

        <div className="row g-3 align-items-center">
            <div className="col">
                <label htmlFor="busca" className="col-form-label">Busca</label>
            </div>
            <div className="col-11">
                <input type="text" id="busca" className="form-control" onKeyUp={this.search} ref={this.buscaInput} />
            </div>
        </div>

        <br />

        {this.state.transactions.map((tran, idx) => (
            <Transaction transaction={tran} key={idx} />
        ))}
        </>;
    }
}

export default Transactions;