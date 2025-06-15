let totalBudget = 0;
let totalSpent = 0;

const budgetDisplay = document.getElementById("budget");
const spentDisplay = document.getElementById("spent");
const remainingDisplay = document.getElementById("remaining");
const expenseList = document.getElementById("expense-list");

document.getElementById("expense-form").addEventListener("submit", function (e) {
  e.preventDefault();

  const desc = document.getElementById("desc").value;
  const amount = parseInt(document.getElementById("amount").value);

  if (desc && amount > 0) {
    const li = document.createElement("li");
    li.innerHTML = ${desc} - ₹${amount};
    expenseList.appendChild(li);

    totalSpent += amount;
    totalBudget += amount; // Optional: could separate budget vs expense logic
    updateDisplay();

    this.reset();
  }
});

function updateDisplay() {
  budgetDisplay.textContent = totalBudget;
  spentDisplay.textContent = totalSpent;
  remainingDisplay.textContent = totalBudget - totalSpent;
}