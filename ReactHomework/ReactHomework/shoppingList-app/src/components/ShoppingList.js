import React from 'react';
import '../styling/ShoppingList.css';

function ShoppingList({ List, handleUpdate }) {
    // the handleUpdate is a fucntion passed from the parent. 
    //Calling handleUpdate will trigger the function from the parent
    const [sort, setSort] = React.useState('down')

    function sortTypes() {
        if (sort === 'up') {
            List.sort((a, b) => a.time > b.time ? 1 : -1)
        }
        else if (sort === 'down') {
            List.sort((a, b) => b.time > a.time ? 1 : -1)
        }
    };

    function sortDesc() {
        setSort('down')
        sortTypes()
    };

    function sortAscend() {
        setSort('up')
        sortTypes()
    };

    return (
        <div>
            <table className="Table">
                <thead>
                    <tr>
                        <th>Item</th>
                        <th>Time Added
                        <button className="SortBtn1" onClick={sortDesc}>
                                &#5167;
						</button>
                        <button className="SortBtn2" onClick={sortAscend}>
                                &#5169;
						</button>
                        </th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {List.map((item) => (
                        <tr id={item.time} key={item.time}>
                            <td>{item.name}</td>
                            <td>{item.time}</td>
                            <td><button onClick={() => handleUpdate(item.time)}>
                                Delete
                            </button></td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default ShoppingList;
