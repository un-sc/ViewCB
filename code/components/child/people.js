import { Table } from '@arco-design/web-react';
import { IconRight, IconDown } from '@arco-design/web-react/icon';
const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
  },
  {
    title: '提案',
    dataIndex: 'motion',
  },
  {
    title: '日期',
    dataIndex: 'date',
  }
];
const data = [
  {
    key: '1',
    name: '',
    motion: '反馈没有effect指令',
    date: '2022-12-15 07:42:11',
  },
  {
    key: '2',
    name: '红尘',
    motion: '指出gamerule指令的游戏规则列表中showCoordinates规则的默认值错误',
    date: '2022-12-29 08:17:40',
  },
];

function People() {
  return (
    <Table
      columns={columns}
      style={{ marginTop: 20 }}
      data={data}
      expandedRowRender={(record) => record.email}
      scroll={{
        x: 900,
        y: 300
      }}
      expandProps={{
        icon: ({ expanded, record, ...restProps }) =>
          expanded ? (
            <button {...restProps}>
              <IconDown />
            </button>
          ) : (
            <button {...restProps}>
              <IconRight />
            </button>
          ),
        width: 60,
        columnTitle: 'Expand',
        rowExpandable: (record) => record.key !== '4',
      }}
    />
  );
}

export default People;
