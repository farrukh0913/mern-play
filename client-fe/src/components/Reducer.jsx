import React, { useReducer } from 'react';
import { render } from 'react-dom';

const initialState = {
  value: '',
  list: [],
};

const reducer = (state, action) => {
  switch(action.type) {
    case 'SET_VALUE':
      return {
        ...state,
        value: action.payload,
      }

    case 'ADD_ITEM':
      return {
        value: initialState.value,
        list: state.list.concat({
          id: Math.random(),
          value: state.value || 'empty'
        }),
      };

    case 'REMOVE_ITEM':
      return {
        ...state,
        list: state.list.filter(
          item => item.id !== action.payload
        ),
      };

    default:
      return state
  }
};

const ReducerComponent = () => {
  const [bool, setBool] = useReducer((current) => !current, false);
  const [state, dispatch] = useReducer(reducer, initialState);

  const handleChangeValue = e => {
    dispatch({
      type: 'SET_VALUE',
      payload: e.target.value
    });
  };

  const handleAddItem = () => {
    dispatch({ type: 'ADD_ITEM' }); 
  };

  const handleRemoveItem = id => () => {
    dispatch({
      type: 'REMOVE_ITEM',
      payload: id
    })
  };

  return (
    <div>
      <h1>useReducer</h1>
      <div>
        Bool: {String(bool)}
        <br />
        <button onClick={setBool}>toggle</button>
      </div>
      <hr />
      <input
        type="text"
        value={state.value}
        onChange={handleChangeValue}
      />
      <button onClick={handleAddItem}>+</button>

      <ul>
        {state.list.map(item => (
          <li key={item.id}>
            {item.value}
            <button onClick={handleRemoveItem(item.id)}>
              X
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ReducerComponent;
