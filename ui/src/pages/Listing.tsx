import React, { useEffect, useState } from 'react';
import { FiMinus, FiPlus } from 'react-icons/fi';
import NumberFormat from 'react-number-format';
import Sidebar from '../components/Sidebar';
import BankResource from '../resources/BankResource';
import CategoryResource from '../resources/CategoryResource';
import TransactionResource from '../resources/TransactionResource';
import "react-datepicker/dist/react-datepicker.css";
import '../styles/components/dataview.css';
import { useHistory } from 'react-router-dom';
import ReactDatePicker from 'react-datepicker';
import Autocomplete from '../components/Autocomplete';

interface Entry {
  id: string,
  date: Date,
  description: String,
  type: String,
  bank: String,
  amount: number,
}

function Listing() {
  const [entries, setEntries] = useState<Entry[]>();
  const [banks, setBanks] = useState<BankResource[]>([]);
  const [categories, setCategories] = useState<CategoryResource[]>([]);
  const [transactions, setTransactions] = useState<TransactionResource[]>([]);
  const history = useHistory();
  // form fields
  const [newTransactionDate, setNewTransactionDate] = useState<Date>(new Date);
  const countries = ["Afghanistan","Albania","Algeria","Andorra","Angola","Anguilla","Antigua &amp; Barbuda","Argentina","Armenia","Aruba","Australia","Austria","Azerbaijan","Bahamas","Bahrain","Bangladesh","Barbados","Belarus","Belgium","Belize","Benin","Bermuda","Bhutan","Bolivia","Bosnia &amp; Herzegovina","Botswana","Brazil","British Virgin Islands","Brunei","Bulgaria","Burkina Faso","Burundi","Cambodia","Cameroon","Canada","Cape Verde","Cayman Islands","Central Arfrican Republic","Chad","Chile","China","Colombia","Congo","Cook Islands","Costa Rica","Cote D Ivoire","Croatia","Cuba","Curacao","Cyprus","Czech Republic","Denmark","Djibouti","Dominica","Dominican Republic","Ecuador","Egypt","El Salvador","Equatorial Guinea","Eritrea","Estonia","Ethiopia","Falkland Islands","Faroe Islands","Fiji","Finland","France","French Polynesia","French West Indies","Gabon","Gambia","Georgia","Germany","Ghana","Gibraltar","Greece","Greenland","Grenada","Guam","Guatemala","Guernsey","Guinea","Guinea Bissau","Guyana","Haiti","Honduras","Hong Kong","Hungary","Iceland","India","Indonesia","Iran","Iraq","Ireland","Isle of Man","Israel","Italy","Jamaica","Japan","Jersey","Jordan","Kazakhstan","Kenya","Kiribati","Kosovo","Kuwait","Kyrgyzstan","Laos","Latvia","Lebanon","Lesotho","Liberia","Libya","Liechtenstein","Lithuania","Luxembourg","Macau","Macedonia","Madagascar","Malawi","Malaysia","Maldives","Mali","Malta","Marshall Islands","Mauritania","Mauritius","Mexico","Micronesia","Moldova","Monaco","Mongolia","Montenegro","Montserrat","Morocco","Mozambique","Myanmar","Namibia","Nauro","Nepal","Netherlands","Netherlands Antilles","New Caledonia","New Zealand","Nicaragua","Niger","Nigeria","North Korea","Norway","Oman","Pakistan","Palau","Palestine","Panama","Papua New Guinea","Paraguay","Peru","Philippines","Poland","Portugal","Puerto Rico","Qatar","Reunion","Romania","Russia","Rwanda","Saint Pierre &amp; Miquelon","Samoa","San Marino","Sao Tome and Principe","Saudi Arabia","Senegal","Serbia","Seychelles","Sierra Leone","Singapore","Slovakia","Slovenia","Solomon Islands","Somalia","South Africa","South Korea","South Sudan","Spain","Sri Lanka","St Kitts &amp; Nevis","St Lucia","St Vincent","Sudan","Suriname","Swaziland","Sweden","Switzerland","Syria","Taiwan","Tajikistan","Tanzania","Thailand","Timor L'Este","Togo","Tonga","Trinidad &amp; Tobago","Tunisia","Turkey","Turkmenistan","Turks &amp; Caicos","Tuvalu","Uganda","Ukraine","United Arab Emirates","United Kingdom","United States of America","Uruguay","Uzbekistan","Vanuatu","Vatican City","Venezuela","Vietnam","Virgin Islands (US)","Yemen","Zambia","Zimbabwe"];


  function handleDateChange(date:Date | [Date, Date] | null) {
    console.log('Yo date is here!', date);
    if (date instanceof Date) {
      setNewTransactionDate(date);
    }
  }

  useEffect(() => {
    const bank = new BankResource();
    bank.list().then(response => {
      setBanks(response);
    }).catch(() => {
      history.push('login');
    });

    const category = new CategoryResource();
    category.list().then(response => {
      setCategories(response);
    });

    const transaction = new TransactionResource();
    transaction.list().then(response => {
      setTransactions(response);
    });
  }, []);

  if (!transactions) {
    return <h1>loading....</h1>
  }

  return (
    <div id='listings'>
      <Sidebar />

      <main id='dataView'>

      <div>
        <div className="entriesList">
          {transactions.map(entry =>{
            return (
              <div key={entry.getId()} className="entry" >
                <span>{new Date(entry.getDate()).toLocaleDateString('pt')}</span>
                <span>{entry.getDescription()}</span>
                <span>{ categories.filter((category:CategoryResource) => { return category.getId() === entry.getCategory()})[0].getName() }</span>
                <span>{ banks.filter((bank:BankResource) => { return bank.getId() === entry.getBank()})[0].getShortName() }</span>
                <span> <NumberFormat 
                 value={entry.getAmount()}
                 isNumericString
                 decimalScale={2}
                 fixedDecimalScale
                 displayType={"text"}
                 thousandSeparator={true}
                 suffix={" $"}
                /></span>
              </div>
            );
          })}
        </div>

        <form className='entryForm'>

          <ReactDatePicker
              dateFormat="dd/MM/yyyy"
              selected={newTransactionDate} 
              onChange={(date) => handleDateChange(date)}
          />
          <Autocomplete countries={countries} />
          <input type='text' name='description' value='' placeholder='supermarket' />
          <input type='text' name='type' value='' placeholder='groceries' />
          <input type='text' name='bank' value='' placeholder='ABN' />
          <input type='text' name='amount' value='' placeholder='15.00 $' />
          <div className="buttonBox">
            <button id='income' className='inactive'><FiPlus size='26' /></button>  
            <button id='expense'><FiMinus size='26' /></button>
          </div>
        </form>

        <div className='statusReport'>
          <span >Expenses: <span className='expense' >123</span></span>
          <span >Income: <span className='income' >123</span></span>
          <span>Balance: 123</span>
        </div>
        </div>
      </main>
    </div>
  )
}

// add styles

export default Listing