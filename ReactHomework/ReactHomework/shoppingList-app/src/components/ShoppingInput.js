import React from 'react';
import '../styling/ShoppingInput.css';
import ShoppingList from './ShoppingList'

function ShoppingInput() {
  const [item, setItem] = React.useState("")
  const [list, setList] = React.useState([])
  var today = new Date(),
    time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();

  function handleChange(e) {
    setItem(e.target.value)
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (item !== "" && item !== 'null') {
      const newList = list.concat({ name: item, time: time });
      setList(newList)
      setItem("")
    } else {
      alert('Must not be null or empty')
    }
  };

  function handleUpdate(time) {
    console.log(time)
    console.log(list)
    const newList = list.filter((item) => {
      return item.time !== time
    })
    console.log(newList)

    setList(newList)
  }

  return (
    <div className="Container">
      <h1>Shopping List</h1>
      <p>
        Hey there! Enter your shopping items below.
        </p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="item" value={item} onChange={handleChange} className="InputBox"/>
        <input type="submit" value="Add to Shopping List" className="SubmitBtn"/>
      </form>
      {list.length === 0 ?
        <p>No Items in Shopping List</p> :
        <div>
          <ShoppingList List={list} handleUpdate={handleUpdate} />         
        </div>
      }
    </div >
  );
}

export default ShoppingInput;

