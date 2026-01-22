let expenses = JSON.parse(localStorage.getItem("expenses")) || [];

// window.onload = renderExpenses;
document.addEventListener("DOMContentLoaded", renderExpenses);


function addExpense() {
  const amount = document.getElementById("amount").value;
  const description = document.getElementById("description").value;
  const category = document.getElementById("category").value;

  if (!amount || !description) {
    alert("Please enter amount and description");
    return;
  }

  const expense = {
    id: Date.now(),
    amount,
    description,
    category,
  };

  expenses.push(expense);
  updateLocalStorage();
  renderExpenses();

  // Clear inputs
  document.getElementById("amount").value = "";
  document.getElementById("description").value = "";
}

function renderExpenses() {
  const list = document.getElementById("expenseList");
  list.innerHTML = "";

  expenses.forEach((exp) => {
    const li = document.createElement("li");
    li.innerHTML = `
          ${exp.amount} - ${exp.category} - ${exp.description}
          <button onclick="deleteExpense(${exp.id})">Delete Expense</button>
          <button onclick="editExpense(${exp.id})">Edit Expense</button>
        `;
    list.appendChild(li);
  });
}

function deleteExpense(id) {
  expenses = expenses.filter((exp) => exp.id !== id);
  updateLocalStorage();
  renderExpenses();
}

function editExpense(id) {
  const expense = expenses.find((exp) => exp.id === id);

  const newAmount = prompt("Enter new amount", expense.amount);
  const newDescription = prompt("Enter new description", expense.description);

  if (newAmount && newDescription) {
    expense.amount = newAmount;
    expense.description = newDescription;
    updateLocalStorage();
    renderExpenses();
  }
}

function updateLocalStorage() {
  localStorage.setItem("expenses", JSON.stringify(expenses));
}
