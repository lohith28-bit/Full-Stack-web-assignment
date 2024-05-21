// You have been given a list of items you shopped from the grocery store
// You need to calculate the total amount of money you spent
import React, { useState, useMemo } from 'react';

export const Assignment3 = () => {
    const [items, setItems] = useState([
        { name: 'Chocolates', value: 10 },
        { name: 'Chips', value: 20 },
        { name: 'Onion', value: 30 },
        { name: 'Tomato', value: 30 },
        { name: 'Juice', value: 50 },
    ]);

    const totalValue = useMemo(() => {
        let temp = 0;
        items.map(ele => temp = temp + ele.value)
        return temp;
    }, [items])


    return (
        <div>
            <ul>
                {items.map((item, index) => (
                    <li key={index}>{item.name} - Price: ${item.value}</li>
                ))}
            </ul>
            <p>Total Value: {totalValue}</p>
        </div>
    );
};
