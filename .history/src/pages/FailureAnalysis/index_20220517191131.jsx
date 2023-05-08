import React, { memo, useState } from 'react'
import { Table, Button } from 'antd'
import './index.less'
const FailureAnalysis = memo(() => {
    const [type, settype] = useState('productionUnit');
    const table = [];
    const titleList = [
        "设备",
        "工段",
        '原因',
    ];
    const titleIndex = [
        'equipment',
        'controlVariable',
        "controller",
    ];
    const widthIndex = [100, 100]
    const dataParam = [
        {
            equipment: 'M1',
            controlVariable: '丙烯酸流量',
        },
        {
            equipment: 'M1',
            controlVariable: '水流量',
        },
        {
            equipment: 'M1',
            controlVariable: '空气1流量',
        },
        {
            equipment: 'R1-A',
            controlVariable: '反应器1压力',
        },
    ];
    function tableMergeCellsRender(value, record, columns) {
        const obj = {
            children: value,
            props: {},
        }
        obj.props.rowSpan = mergeCells(record.equipment, dataParam, columns);
        // 第一个参数传入指定条件的数据，用于比较
        return obj
    }
    const temp = {} // 当前重复的值,支持多列
    function mergeCells(text, data, columns) {
        let i = 0;
        let isContinuous = false;// 判断是否连续
        // 判断text值与上一次保存的值是否相等
        if (text !== temp[columns]) {

            temp[columns] = text;
            try {
                data.forEach((item) => {
                    if (item.equipment === temp[columns]) {
                        i += 1;
                        isContinuous = true;// 数据连续时，i一直累加
                    } else {
                        // 当isContinuous为真时，证明已经断续了，报错一个错误跳出循环，这样将不会遍历断续后的相同的数据（导致表格变形）
                        if (isContinuous) throw new Error("finish");
                    }
                });
            } catch (e) {
            }
        }
        // 如果这次的值与上次的值相等，返回i，并且i = 0。
        return i
    }
    const tableInit = () => {
        // table.push({
        //     title: '设备',
        //     dataIndex: 'equipment',
        //     key: 'equipment',
        //     width: 10,
        //     render: (value, record) => tableMergeCellsRender(value, record, 'equipment')
        // });
        titleList.forEach((item, index) => {
            table.push({
                title: item,
                dataIndex: titleIndex[index],
                key: titleIndex[index],
                width: widthIndex[index],
                className: titleIndex[index]
            });
        });
        return table
    }
    const handleClick = () => {
        console.log('[ ref ] >', optimizationref.current.rcSelect.state.value[0]);
    }
    return (
        <div className="circuitTabl" style={{ width: '100%', height: '100%' }}>
            <Table
                columns={tableInit()}
                dataSource={dataParam}
                size='middle'
                pagination={false}
                scroll={{ y: 100 }}
            />
            {/* <Button type='primary'>Primary Button</Button> */}
        </div>
    )
})

export default FailureAnalysis