// import transactions from './transactions'


// const fundsSum = sumTransactions('reserva');
// const investmentsSum = sumTransactions('investimento');
// const expensesSum = sumTransactions('despesa');
// const totalIncome = (fundsSum + investmentsSum).toFixed(2);
// const totalExpenses =  expensesSum.toFixed(2);


function sumTransactions(transaction, transactions)
{
    const allTransactions = transactions.filter((value) => value.type === transaction);
    const totalSum = allTransactions.reduce((addition, value) => addition + value.value, 0);
    return totalSum;
}

// const balances = {totalIncome, totalExpenses};

export default sumTransactions;