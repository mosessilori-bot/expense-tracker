console.log('javascript connected');
const nameInput = document.querySelector('#expense-name');
const amountInput = document.querySelector('#expense-amount');
const categoryInput = document.querySelector('#expense-category');
const dateInput = document.querySelector('#expense-date');
const submitButton = document.querySelector('#add-expense');
const expenseList = document.querySelector('#expense-list');
const totalDisplay = document.querySelector('#total-display');
const form = document.querySelector('#expense-form');
let expenses = JSON.parse(localStorage.getItem('expenses')) || [];
expenses.forEach(function(expense) {
    expenseList.innerHTML += `
    <div class="expense-item">
        <span>${expense.name}</span>
        <span>${expense.category}</span>
        <span>₦${expense.amount}</span>
        <span>${expense.date}</span>
    </div>`;
});
function updateTotal() {
    console.log('expenses in updateTotal:', expenses);
    const total = expenses.reduce(function(sum, expense) {
        return sum + expense.amount;
    }, 0);
    totalDisplay.textContent = `Total: ₦${total}`;
}
console.log(expenses);
updateTotal();

form.addEventListener('submit', function(event) {
    event.preventDefault();
    const expense = {
        name: nameInput.value,
        amount: Number(amountInput.value),
        category: categoryInput.value,
        date: dateInput.value
    };
    expenses.push(expense);
    localStorage.setItem('expenses', JSON.stringify(expenses));
        expenseList.innerHTML += `
    <div class="expense-item">
        <span>${expense.name}</span>
        <span>${expense.category}</span>
        <span>₦${expense.amount}</span>
        <span>${expense.date}</span>
    </div>`;
    nameInput.value = '';
    amountInput.value = '';
    categoryInput.value = '';
    dateInput.value = '';
    updateTotal();
});
