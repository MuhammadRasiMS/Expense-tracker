import React, { useState } from 'react'
import './topfold.css'
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { searchExpense } from '../../redux/actions/expenses';

const Topfold = () => {
    const [query, setQuery] = useState("");
    const dispatch = useDispatch ();
    const handleQuery = (e) => {
        setQuery(e.target.value);
        dispatch(searchExpense(e.target.value));
    }
  return (
    <div className='topfold'>
        {window.location.pathname === "/" ? (
            <div className="home-topfold">
                <div className="searchbar">
                    <i class="fi fi-br-search"></i>
                    <input
                        value={query}
                        placeholder='Search for expenses'
                        onChange={(e) => handleQuery(e)}
                    />
                </div>
                <Link to='/add-expense'>
                <div className="add-button">
                    <i class="fi fi-rr-add"></i>
                    <label>Add</label>
                </div>
                </Link>
            </div>
        ):(
            <div className='add-topfold'>
                <Link to='/'>
                    <div className="add-topfold-button">
                        <i class="fi fi-br-angle-left"></i>
                        <label htmlFor="">Back</label>
                    </div>
                </Link>
                <Link to='/'>
                    <div className="add-topfold-button">
                        <i class="fi fi-rr-cross-circle"></i>
                        <label htmlFor="">Cancel</label>
                    </div>
                </Link>
                
            </div>
        )}
      
    </div>
  );
};

export default Topfold
