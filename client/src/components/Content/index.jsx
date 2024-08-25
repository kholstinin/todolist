import './content.css';

import React, { useState, useEffect } from 'react';
import { Input, List, Checkbox } from 'antd';
import { RestFilled } from '@ant-design/icons';
import { v4 as uuidv4 } from 'uuid';

import { BASE_API_URL } from '../../const';

const { Search } = Input;

export function Content() {
  const [inputValue, setInputValue] = useState('');
  const [items, setItems] = useState([]);

  useEffect(() => {
    fetch(`${BASE_API_URL}/api/v1/todos`)
      .then((resp) => resp.json())
      .then((data) => {
        setItems(data);
      });
  }, []);

  const onAdd = (data) => {
    const dataItem = { data, id: uuidv4() };

    fetch(`${BASE_API_URL}/api/v1/add`, {
      method: 'post',
      body: JSON.stringify(dataItem)
    }).then(() => {
      setItems([...items, dataItem]);
      setInputValue('');
    })
  }

  const onDelete = (item) => {
    console.log(item);
    fetch(`${BASE_API_URL}/api/v1/delete`, {
      method: 'post',
      body: JSON.stringify(item)
    })

    const idForDelete = item.id;
    setItems(items.filter((item) => item.id !== idForDelete));
  }

  return (
    <React.Fragment>
      <div className="input__wrap">
        <Search
          placeholder="Write some todo"
          allowClear
          enterButton="Add"
          size="large"
          onSearch={onAdd}
          value={inputValue}
          onChange={(e) => setInputValue(e.value)}
        />
      </div>
      <List
        itemLayout="vertical"
        className="list"
        dataSource={items}
        renderItem={(item) => (
          <List.Item className="list__item">
            <Checkbox>{item.data}</Checkbox>
            <RestFilled
              className="list__remove-icon"
              onClick={() => onDelete(item)}
            />
          </List.Item>
        )}
      />
    </React.Fragment>
  )
}
