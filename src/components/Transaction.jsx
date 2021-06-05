
function Transaction({transaction}) {

    return (
        <>
        <div className="col-12">
            <div className="alert alert-secondary h4 row">
            <div className="col">{transaction.description}</div>
            <div className="col text-end">R$ {transaction.value.toFixed(2)} </div>
            </div>
        </div>
        </>
    );
}

export default Transaction;