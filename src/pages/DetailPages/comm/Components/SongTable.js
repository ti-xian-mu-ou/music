import React, {useState, useEffect, Fragment} from 'react';
import {Icon, Table} from 'antd';

// 暂时没用到
function SongTable({ tableData }) {
    const [data, setData] = useState([]);

    useEffect(() => {
        setData(tableData)
    }, [tableData]);

    const columns = [
        {
            title: '序号',
            dataIndex: 'order',
            render: (value, row) => 1
        }, {
            title: '操作',
            dataIndex: 'action',
            render: (value, row) => (
                <Fragment>
                    <Icon type="heart"/>
                    <Icon type="download"/>
                </Fragment>
            )
        }, {
            title: '音乐标题',
            dataIndex: 'name',
            render: (value, row) => value
        }, {
            title: '歌手',
            dataIndex: 'ar',
            render: (value, row) => value.map(item => item.name).join('/')
        }, {
            title: '专辑',
            dataIndex: 'al',
            render: (value, row) => value.name
        }, {
            title: '时长',
            dataIndex: 'dt',
            render: (value, row) => value
        }
    ];
    return (
        <Fragment>
            <Table columns={columns} className='song-list-table' dataSource={data} pagination={false}
                   rowKey={(record => record.id)}/>
        </Fragment>
    );
}

export default SongTable;
