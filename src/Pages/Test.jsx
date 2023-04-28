import React, { useState } from 'react';

function Test() {
  const [firstArray, setFirstArray] = useState([1, 2, 3, 4, 5]);
  const [secondArray, setSecondArray] = useState([6, 7, 8, 9]);

  const onDragStart = (event, index, array) => {
    event.dataTransfer.setData('index', index);
    event.dataTransfer.setData('array', array);
  };

  const onDrop = (event, array) => {
    const index = event.dataTransfer.getData('index');
    const sourceArray = event.dataTransfer.getData('array');
    const item = sourceArray === 'firstArray' ? firstArray[index] : secondArray[index];

    if (sourceArray === 'firstArray') {
      setFirstArray((prevArray) => {
        const newArray = [...prevArray];
        newArray.splice(index, 1);
        return newArray;
      });
    } else {
      setSecondArray((prevArray) => {
        const newArray = [...prevArray];
        newArray.splice(index, 1);
        return newArray;
      });
    }

    if (array === 'firstArray') {
      setFirstArray((prevArray) => [...prevArray, item]);
    } else {
      setSecondArray((prevArray) => [...prevArray, item]);
    }
  };

  const onDragOver = (event) => {
    event.preventDefault();
  };

  return (
    <div>
      <h2 draggable >First Array</h2>
      <ul style={{height:"300px"}} className='  bg-primary' onDrop={(event) => onDrop(event, 'firstArray')} onDragOver={onDragOver}>
        {firstArray.map((item, index) => (
          <li className={`${index == 0 && 'bg-danger'} ${index == 1 && 'bg-light'} `} key={index} draggable onDragStart={(event) => onDragStart(event, index, 'firstArray')}>
            {item}
          </li>
        ))}
      </ul>
      <h2>Second Array</h2>
      <ul onDrop={(event) => onDrop(event, 'secondArray')} onDragOver={onDragOver}>
        {secondArray.map((item, index) => (
          <li key={index} draggable onDragStart={(event) => onDragStart(event, index, 'secondArray')}>
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default Test;
