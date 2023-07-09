
// import './Expenseitem.css';
// import Expensedate from '../expense_date/Expensesdate.jsx';
// import { useState } from 'react';
// const Expenseitem = (props) => {
    
   
//     const{date,title,price}=props
//     const [ CustomTitle,setCustomTitle] = useState(title);
//     const onClickHandler = () => {
//         setCustomTitle('Updated');
//     }

//     return(
//         <div className="expense-item">
//             <Expensedate date={date}/>
        

//         <div className="expense-item__description">
//              <h2>{CustomTitle}</h2>                      
            
//             <div className="expense-item__price">{price}</div>
//             <button onClick={onClickHandler}>Update</button>
//         </div>
//         </div>
//     )
// };
// export default Expenseitem


// *****

// import'./Expenseitem.css';
// // import Expensedate from './components/expense_date/Expensesdate';
// import Expensedate from '../expense_date/Expensesdate.jsx';

// import { useState } from 'react';

// const Expenseitem=(props)=>{
    
   
//     const {date,title,amount}=props
//     const[Ctitle,updatedtitle]=useState(title)
//     //let title_=title
//     const click=()=>{
//         //title_='updated';
//         updatedtitle('updated')


//     }

//     return(
      

//         <div className='expense-item'>
//             {/Date/}
            
//                 <Expensedate date={date}/>
            
//         {/title and amount/}
//         <div className="expense-item__description">
//             <h2>{Ctitle}</h2>
//             <div className="expense-item__price">{amount}</div>
//         </div>
//         <button onClick={click}>Update</button>
//         </div>
//     )
            
    
// };
// export default Expenseitem;
import './Expenseitem.css';
import Expensedate from '../expense_date/Expensesdate.jsx';

import { useState } from 'react';

const Expenseitem = (props) => {
  const { date, title, amount } = props;
  const [Ctitle, updatedtitle] = useState(title);

  const click = () => {
    updatedtitle('updated');
  };

  return (
    <div className='expense-item'>
      {/* Date */}
      <Expensedate date={date} />

      {/* Title and Amount */}
      <div className='expense-item__description'>
        <h2>{Ctitle}</h2>
        <div className='expense-item__price'>{amount}</div>
      </div>

      <button onClick={click}>Update</button>
    </div>
  );
};

export default Expenseitem;
