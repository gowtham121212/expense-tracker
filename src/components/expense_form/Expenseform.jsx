// import { useState } from 'react'
// import './Expenseform.css'
// let Expenseform = () =>
// {

// Expenseform = props =>{

// const {addExpense} = props
// const [ Title,setTitle ] = useState('')

// const handleTitleChange = (event) => {
//   setTitle(event.target.value)

// }
// const handleSubmit = (event) => {
//   event.preventDefault()
//   let obj = {
//     title : Title,
//     amount : Amount,
//     date : Date
//   }
//   console.log(obj);
// }
// const [Date,setDate] = useState('')
// const handleDateChange = (event) => {
//   setDate(event.target.value)
// }

// const [Price,setPrice] = useState('')
// const handlePriceChange = (event) => {
//   setPrice(event.target.value)
// }


// return (
// <div className='new-expense'>
//         <form>
//           <div className='new-expense_controls'>
//             <div className='new-expense_control'>

//               <label>Title</label>
//               <input type='text' onChange={handleTitleChange} />
//             </div>
//             <div className='new-expense_control'>
//               <label>Price</label>
//               <input type='text' onChange={handlePriceChange} />
//             </div>
//             <div className='new-expense_control'>
//               <label>Date</label>
//               <input type='date' onChange={handleDateChange} />
//             </div>
//           </div>
//           <div className='new-expense_actions'>
//             <button type = 'button'>Cancel</button>
//             <button type = 'submit'>Add Expense</button>

//           </div>
//         </form>
//       </div>
//     );
// }
// }
// export default Expenseform;

import { useEffect, useState } from 'react';
import './Expenseform.css'
import { nanoid } from 'nanoid'
const Expenseform = (props) => {
    const {addExpense}=props;
    useEffect(() => {
        console.log('updated');
    })
    const [title, settitle] = useState('')
    const handletitlechange = (event) => {
        settitle(event.target.value)
    }
    const [amount, setamount] = useState('')
    const handleamountchange = (event) => {
        setamount(event.target.value)
    }
    const [date, setdate] = useState('')
    const handledatechange = (event) => {
        setdate(event.target.value)
    }
    const handleSubmit = (event) => {
        event.preventDefault()
        if (title.trim() === '' || amount.trim() === '' || date.trim() === '') {
            alert('Please fill in all fields.');
          }
        else{
        const obj={
            id:nanoid(),
            title:title,
            amount:amount,
            date:date
        }
        props.addExpense(obj);
        
    }
}

    return (

        <div className='new-expense'>
            <form onSubmit={handleSubmit}>
                <div className='new-expense__controls'>
                    <div className='new-expense__control'>
                        <label>Title</label>
                        <input type="text" onChange={handletitlechange} />

                    </div>
                    <div className='new-expense__control'>
                        <label>Amount</label>
                        <input type="text" onChange={handleamountchange} />
                    </div>
                    <div className='new-expense__control'>
                        <label>Date</label>
                        <input type="date" onChange={handledatechange} />
                    </div>
                </div>
                <div className='new-expense__actions'>
                    <button>Cancel</button>
                    <button type='submit' >Add Expense</button>
                </div>
            </form>
        </div>
    );
}
export default Expenseform