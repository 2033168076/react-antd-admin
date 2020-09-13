import React, { useEffect, useState } from 'react'
import { Tabs, Rate, Tag } from 'antd'
import Tab from './components/tabpane'
import './index.css'
import { dataSource } from './config'
const { TabPane } = Tabs

const tabOption = [{ title: '中国', key: 'china' }, { title: '美国', key: 'usa' }, { title: '日本', key: 'japan' }, { title: '法国', key: 'france' }]

export default () => {
    const [type, saveType] = useState<string>(tabOption[0].key)
    const [data, setData] = useState<Array<any>>([])
    const [showTimes, setShowTimes] = useState<number>(0)
    const handleTabs = (type: string) => {
        saveType(type)
    }
    const forceRender = () => {
        setShowTimes(showTimes + 1)
    };

    useEffect(() => {
        setData(dataSource(type))
    }, [type])
    const columns: Array<object> = [
        {
            title: 'ID',
            dataIndex: 'id',
            key: 'id',

        },
        {
            title: 'Date',
            dataIndex: 'display_time',
            key: 'display_time',
        },
        {
            title: 'Title',
            dataIndex: 'title',
            key: 'title',
            render: (text: any) => <>{text}<Tag color="blue">{type}</Tag></>
        },
        {
            title: 'Author',
            dataIndex: 'author',
            key: 'author',
        },
        {
            title: 'Importance',
            dataIndex: 'importance',
            key: 'importance',
            render: (text: any) => <Rate disabled defaultValue={text} />
        },
        {
            title: 'Readings',
            dataIndex: 'pageviews',
            key: 'pageviews',
        },
        {
            title: 'Status',
            dataIndex: 'status',
            key: 'status',
            render: (text: any) => text === 'published' ? <Tag color="cyan">{text}</Tag> : <Tag>{text}</Tag>
        },
    ]
    return <div className='tab-contains'>
        <Tag color='blue'>mounted times:{showTimes}</Tag>
        <div className='card-container'>
        <Tabs type="card" activeKey={type} onChange={handleTabs}>
            {tabOption.map(item => {
                return <TabPane tab={item.title} key={item.key} >
                    <Tab dataSource={data} columns={columns} forceRender={forceRender} />
                </TabPane>
            })}
        </Tabs>
        </div>
    </div>
}