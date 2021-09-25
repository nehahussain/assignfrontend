import React from 'react';
import './App.css';

function App() {
    const handleSubmit = event => {
   event.preventDefault();
   alert('You have submitted the form.')
 }
  return (
    <div className="formdiv">
      <h1>
        calculate deivery time
      </h1>
      <form  onSubmit={handleSubmit}>
      <fieldset>
      <label for="order_date_time"><p>Order (date and time):</p>
      <input type="datetime-local" id="order_date_time" name="order_date_time" /></label>
      
         <label>
           <p>Order Type</p>
           <select name="order_type" >
               <option value="">--Please choose an option--</option>
               <option value="urgent">urgent</option>
               <option value="normal">normal</option>
           </select>
         </label>
         <label>
           <p>Country</p>
           <select name="country" >
               <option value="">--Please choose an option--</option>
               <option value="uae">UAE</option>
               <option value="Pakistan">Pakistan</option>
           </select>
         </label>
       </fieldset>
       <button type="submit">Calculate</button>
      </form>
    </div>
  );
}

export default App;
