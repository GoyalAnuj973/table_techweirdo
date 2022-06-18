import React from 'react';
// import 'antd/dist/antd.css';
import './App.css';
import { Table } from 'antd';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: 'Reactjs Score',
    dataIndex: 'reactjs',
    sorter: {
      compare: (a, b) => a.reactjs - b.reactjs,
      multiple: 3,
    },
  },
  {
    title: 'Nodejs Score',
    dataIndex: 'nodejs',
    sorter: {
      compare: (a, b) => a.nodejs - b.nodejs,
      multiple: 2,
    },
  },
  {
    title: 'MongoDB Score',
    dataIndex: 'mongodb',
    sorter: {
      compare: (a, b) => a.mongodb - b.mongodb,
      multiple: 1,
    },
  },
];
const data = [
  {
    key: '1',
    name: 'Anuj Goyal',
    reactjs: 98,
    nodejs: 60,
    mongodb: 70,
  },
  {
    key: '2',
    name: 'Ravi Kumar',
    reactjs: 98,
    nodejs: 66,
    mongodb: 89,
  },
  {
    key: '3',
    name: 'Kishan Singh',
    reactjs: 98,
    nodejs: 90,
    mongodb: 70,
  },
  {
    key: '4',
    name: 'Ankush Garg',
    reactjs: 88,
    nodejs: 99,
    mongodb: 89,
  },
];

const onChange = (pagination, filters, sorter, extra) => {
  console.log('params', pagination, filters, sorter, extra);
};

const App = () => <Table columns={columns} dataSource={data} onChange={onChange} />;

export default App;