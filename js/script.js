const calculateBtn = document.getElementById("calculate");
calculateBtn.addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  if (income < 0 || isNaN(income)) {
    document.getElementById("income-error").classList.remove("hidden");
    return;
  }
  if (software < 0 || isNaN(software)) {
    document.getElementById("software-error").classList.remove("hidden");
    return;
  }
  if (courses < 0 || isNaN(courses)) {
    document.getElementById("courses-error").classList.remove("hidden");
    return;
  }
  if (internet < 0 || isNaN(internet)) {
    document.getElementById("internet-error").classList.remove("hidden");
    return;
  }

  const expense = software + courses + internet;
  const balance = income - expense;

  if (expense > income) {
    document.getElementById("logic-error").classList.remove("hidden");
    return;
  }

  const totalExpenses = document.getElementById("totalExpenses");
  totalExpenses.innerText = expense.toFixed(2);
  const totalBalance = document.getElementById("totalBalance");
  totalBalance.innerText = balance.toFixed(2);

  const history = document.getElementById("results");
  history.classList.remove("hidden");

  // expense history
  const expenseList = document.createElement("div");
  expenseList.className =
    "bg-white px-3 py-2 border-l-2 border-teal-600 rounded-md";
  expenseList.innerHTML = `
  <p> ${new Date().toLocaleDateString()} </p>
  <p class="font-semibold">Income: ${income}</p>
  <p>Expense: ${expense}</p>
  <p>Balance: ${balance}</p>
  `;
  const historyContainer = document.getElementById("history-list");
  historyContainer.insertBefore(expenseList, historyContainer.firstChild);
});

// calculate savings
const calculateSavings = document.getElementById("calculate-savings");
calculateSavings.addEventListener("click", function () {
  const income = parseFloat(document.getElementById("income").value);
  const software = parseFloat(document.getElementById("software").value);
  const courses = parseFloat(document.getElementById("courses").value);
  const internet = parseFloat(document.getElementById("internet").value);

  const expense = software + courses + internet;
  const balance = income - expense;

  const savings = parseFloat(document.getElementById("savings").value);

  if (savings < 0 || isNaN(savings)) {
    document.getElementById("savings-error").classList.remove("hidden");
    return;
  }

  const savingsAmount = (balance * savings) / 100;
  const remainngBalance = balance - savingsAmount;
  const savingNetAmount = document.getElementById("savings-amount");
  savingNetAmount.innerText = savingsAmount.toFixed(2);
  const remainingNetBalance = document.getElementById("remaining-balance");
  remainingNetBalance.innerText = remainngBalance.toFixed(2);
});

// history tab function
const historyTab = document.getElementById("history-tab");
historyTab.addEventListener("click", function () {
  historyTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add("text-gray-600");

  document.getElementById("expense-form").classList.add("hidden");
  document.getElementById("history-section").classList.remove("hidden");
});

const assistantTab = document.getElementById("assistant-tab");
assistantTab.addEventListener("click", function () {
  historyTab.classList.remove(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  assistantTab.classList.add(
    "text-white",
    "bg-gradient-to-r",
    "from-blue-500",
    "to-purple-600"
  );
  document.getElementById("expense-form").classList.remove("hidden");
  document.getElementById("history-section").classList.add("hidden");
});

// real time validation
function inputValidation(id) {
  const input = document
    .getElementById(id)
    .addEventListener("input", function () {
      const inputValue = parseFloat(document.getElementById(id).value);
      if (inputValue <= 0 || isNaN(inputValue)) {
        document.getElementById("income-error").classList.remove("hidden");
      }
    });
}

// document.getElementById("income").addEventListener('input', function(){
//   const income = parseFloat(document.getElementById("income").value);
//   if (income < 0 || isNaN(income)) {
//     document.getElementById('income-error').classList.remove('hidden');
//   }
// })

inputValidation("income");
// inputValidation('software');