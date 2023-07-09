

// import './App.css';
// import Expenses from './components/expenses/Expenses';
// import "./components/expense_form/Expenseform.css"
// import Expenseform from './components/expense_form/Expenseform';
// import { useState } from 'react';

// let Expense = [
//   {  
//     title: "New TV",
//     price: 123,
//     date: new Date(),
//   },
//   {
//     title: "New Fridge",
//     price: 29900,
//     date: new Date(),
//   },
//   {
//     //id : nanoid
//     title: "New kite",
//     price: 1223,
//     date: new Date(),
//   },
// ];

// function App() {
//   const [expenseList, setExpenseList] = useState(Expense);

//   const addExpense = (newExp) => {
//     console.log("===>", newExp);
//   };

//   return (
//     <>
//       <Expenseform addExpense = {addExpense} />
//       <Expenses expenseList={expenseList} />
//     </>
//   );
// }

// export default App;

 import './App.css';
 import Expenses from './components/expenses/Expenses';
 import "./components/expense_form/Expenseform.css";
 import Expenseform from './components/expense_form/Expenseform';
 import { useState } from 'react';
 import { nanoid } from 'nanoid';


  const EXPENSES=[{
      id:nanoid(),
      title:"TV",
      amount:"30$",
      date:"2023-07-06"
  },
  {
      id:nanoid(),
      title:"Fridge",
      amount:"40$",
      date:"2023-07-06"

  },
  {
      id:nanoid(),
      title:"Dishwasher",
      amount:"70$",
      date:"2023-07-06"
  },
  {
    id:nanoid(),
    
      title:"WashingMachine",
      amount:"70$",
      date:"2023-07-06"

  }]


function App() {
  const [expenseList,setExpenseList]=useState(EXPENSES)
  console.log(expenseList)
  const addExpense=async(newExp)=>{
    await fetch('http://localhost:3004/expense/create',{method:"POST",
    headers:{
      'content-Type' : 'application/json'

    },
    body:JSON.stringify(newExp)
  })
   setExpenseList([...expenseList,newExp])
    
  }
  

  return (
    
    <>
      <Expenseform addExpense={addExpense}/>
      <Expenses expenseList={expenseList} />
      
      
    </>
  )
}

export default App