
// import './Expenses.css';
// import ExpenseItem from "../expense_item/Expenseitem";

// const Expenses = (props) => {
//   const { expenseList } = props;

//   return (
//     <div className='expenses'>
//       {expenseList.map((item, index) => (
//         <ExpenseItem key={index} date={item.date} title={item.title} price={item.price} />
//       ))}
//     </div>
//   );
// };

// export default Expenses;


import Expenseitem from '../expense_item/Expenseitem';
import './Expenses.css';

const Expenses=(props)=>{
   const {expenseList}=props
    return(
      
     
        <>
        <div className="expenses">
        {expenseList.map((item)=>
           <Expenseitem key={item.id} date={item.date} title={item.title} amount={item.amount}/>
        )}
        </div>
         

        </>
    )
}
export default Expenses