import './App.css';

import { useState } from 'react';

import { Input, Layout, List, Checkbox } from 'antd';
const { Header, Content } = Layout;

const { Search } = Input;

const data = [
  {
    data: 'some todo'
  },
  {
    data: 'some todo'
  }
]

function App() {
  const [items, setStateItem] = useState(data);
  const setItem = (newItem) => setStateItem([...items, { data: newItem }]);

  return (
    <Layout>
      <Header className="header">TODO</Header>
      <Content className="content">
        <div className="input__wrap">
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Add"
            size="large"
            onSearch={setItem}
          />
        </div>
        <List
          itemLayout="vertical"
          className="list"
          dataSource={items}
          renderItem={(item, index) => (
            <List.Item>
            <Checkbox>{item.data}</Checkbox>
            </List.Item>
          )}
        >
        </List>
      </Content>
    </Layout>
  );
}

export default App;
