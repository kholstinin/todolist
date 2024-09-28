import { Layout } from 'antd';

import { Header } from './components/Header';
import { Content } from './components/Content';

const { Header: LayoutHeader, Content: LayoutContent } = Layout;

function App() {
  return (
    <Layout>
      <LayoutHeader className="header">
        <Header />
      </LayoutHeader>
      <LayoutContent className="content">
        <Content />
      </LayoutContent>
    </Layout>
  );
}

function a() {
  debugger;
  b();
  c();
}

function b() {
  const a = 5;
  const b = 6;
  return a + b;
}

function c() {
  return 5 - 5;
}

export default App;
