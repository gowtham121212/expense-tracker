// import './Expensesdate.css'
// const Expensedate = (props) => {
//    const { date } = props
//    const dateObj = new Date(date)

//    const day = date.getDate()
//      const month =date.toLocaleDateString('us-en',{month:"long"})
//     const year = date.getFullYear()
//        return(
// <div className='expense-date'>
//                     <div className='expense-date__month'>{month}</div>
//                     <div className='expense-date__day'>{day}</div>
//                     <div className='expense-date__year'>{year}</div>
//                 </div>
//     )
// }

// export default Expensedate



import Expenseitem from '../expense_item/Expenseitem';
import './Expensesdate.css';

const Expensedate = (props) => {
  const { date } = props;
  const dateObj = new Date(date);

  const day = dateObj.getDate();
  const month = dateObj.toLocaleDateString('en-US', { month: 'long' });
  const year = dateObj.getFullYear();

  return (
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__day'>{day}</div>
      <div className='expense-date__year'>{year}</div>
    </div>
  );
};

export default Expensedate;

// import './Expensesdate.css'
// const Expensedate=(props)=>{
    
   
//     const {date}=props
//     const dateObj=new Date(date)

//     const day=dateObj.getDate()
//     const month=dateObj.toLocaleDateString('US-en',{month:"long"})
//     const year=dateObj.getFullYear()
//     return(
      
//         <div className='expense-date'>
//             {/Date/}
//             <div className='expense-date'>
//             <div className='expense-date__month'>{month}</div>
//             <div className='expense-date__day'>{day}</div>
//             <div className='expense-date__year'>{year}</div>
//             </div>
//         </div>
//     )
            
    
// };
// export default Expensedate
        
    
