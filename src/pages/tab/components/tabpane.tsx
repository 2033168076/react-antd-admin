import React, { useEffect } from 'react'
import { Table } from 'antd';

interface TabProps {
    dataSource: Array<object>;
    columns: Array<object>;
    forceRender: () => void
}

export default ({ dataSource = [], columns = [], forceRender }: TabProps) => {
    useEffect(() => {
        forceRender()
    }, [])
    return <Table dataSource={dataSource} columns={columns} rowKey={record => `${JSON.stringify(record)}`} pagination={false} />
}