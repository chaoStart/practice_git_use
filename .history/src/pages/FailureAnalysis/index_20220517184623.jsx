import React, { memo, useState } from 'react'
import { Table, Button } from 'antd'
const FailureAnalysis = memo(() => {
    const [type, settype] = useState('productionUnit');
    const table = [];
    const titleList = [
        // "设备",
        "控制变量",
        '控制器',
        '当前值',
        '单位'
    ];
    const titleIndex = [
        // 'equipment',
        'controlVariable',
        "controller",
        "currentvalue",
        'unit',
    ];
    const widthIndex = [200, 130, 130, 130]
    const ProductiondataParam = [
        {
            equipment: 'M1',
            controlVariable: '丙烯酸流量',
            controller: "FC1-A",
            currentvalue: 5698,
            unit: 'Kg/h',
        },
        {
            equipment: 'M1',
            controlVariable: '水流量',
            controller: "FC2-A",
            currentvalue: 12688,
            unit: 'Kg/h',
        },
        {
            equipment: 'M1',
            controlVariable: '空气1流量',
            controller: "FC3-A",
            currentvalue: 5642,
            unit: 'Kg/h',
        },
        {
            equipment: 'R1-A',
            controlVariable: '反应器1压力',
            controller: "PC1-RA",
            currentvalue: 5.4,
            unit: 'atm',
        },
        {
            equipment: 'R2-A',
            controlVariable: '反应器2压力',
            controller: "PC2-RA",
            currentvalue: 4.5,
            unit: 'atm',
        },
        {
            equipment: 'FLASH1',
            controlVariable: '闪蒸罐1液位',
            controller: "LC-F1",
            currentvalue: 2.3,
            unit: 'm',
        },
        {
            equipment: 'FLASH1',
            controlVariable: '闪蒸罐1压力',
            controller: "PC-F1",
            currentvalue: 4,
            unit: 'atm',
        },
    ];
    const PurifyUnitdataParam = [
        {
            equipment: 'RAD1',
            controlVariable: '甲苯进料',
            controller: "FC-B",
            currentvalue: 1523,
            unit: 'Kg/h',
        },
        {
            equipment: 'RAD1',
            controlVariable: '灵敏板温度',
            controller: "TC-RAD1",
            currentvalue: 80.5,
            unit: '℃',
        },
        {
            equipment: 'RAD1',
            controlVariable: '塔釜液位',
            controller: "LC-RAD1",
            currentvalue: 1.2,
            unit: 'm',
        },
        {
            equipment: 'FLASH2',
            controlVariable: '闪蒸罐2液位',
            controller: "LC-F2",
            currentvalue: 2.3,
            unit: 'm',
        },
        {
            equipment: 'FLASH2',
            controlVariable: '闪蒸罐2压力',
            controller: "PC-F2",
            currentvalue: 20,
            unit: 'kPa',
        },
        {
            equipment: 'FLASH2',
            controlVariable: '闪蒸罐2温度',
            controller: "TC-F2",
            currentvalue: 62,
            unit: '℃',
        },
        {
            equipment: 'RAD2',
            controlVariable: '灵敏板温度',
            controller: "TC-RAD2",
            currentvalue: 75,
            unit: '℃',
        },
        {
            equipment: 'RAD2',
            controlVariable: '冷凝器液位',
            controller: "LC1-RAD2",
            currentvalue: 0.356,
            unit: 'm',
        },
        {
            equipment: 'RAD2',
            controlVariable: '塔釜液位',
            controller: "LC2-RAD2",
            currentvalue: 16,
            unit: 'kPa',
        },
    ];
    const GovernanceUnitdataParam = [
        {
            equipment: 'R2-C',
            controlVariable: '温度',
            controller: "TC2-RC",
            currentvalue: 356.3,
            unit: '℃',
        },
        {
            equipment: 'R2-C',
            controlVariable: '压力',
            controller: "PC2-RC",
            currentvalue: 3.5,
            unit: 'atm',
        },
        {
            equipment: 'R3-C',
            controlVariable: '温度',
            controller: "TC3-RC",
            currentvalue: 465.3,
            unit: '℃',
        },
        {
            equipment: 'R3-C',
            controlVariable: '压力',
            controller: "PC3-RC",
            currentvalue: 2.68,
            unit: 'atm',
        },
        {
            equipment: 'FLASH3',
            controlVariable: '闪蒸罐3压力',
            controller: "PC-F3",
            currentvalue: 1.5,
            unit: 'atm',
        },
        {
            equipment: 'FLASH3',
            controlVariable: '闪蒸罐3液位',
            controller: "LC-F3",
            currentvalue: 0.65,
            unit: 'm',
        },
        {
            equipment: 'FLASH3',
            controlVariable: '闪蒸罐1温度',
            controller: "TC-F3",
            currentvalue: 25,
            unit: '℃',
        },
    ];
    function tableMergeCellsRender(value, record, columns) {
        const obj = {
            children: value,
            props: {},
        }
        obj.props.rowSpan = mergeCells(record.equipment, (type === 'productionUnit' ? ProductiondataParam : type === 'PurifyUnit' ? PurifyUnitdataParam : GovernanceUnitdataParam), columns);
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
        table.push({
            title: '设备',
            dataIndex: 'equipment',
            key: 'equipment',
            width: 150,
            render: (value, record) => tableMergeCellsRender(value, record, 'equipment')
        });
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
                dataSource={(type === 'productionUnit' ? ProductiondataParam : type === 'PurifyUnit' ? PurifyUnitdataParam : GovernanceUnitdataParam)}
                size='middle'
                pagination={false}
                scroll={{ y: 100 }}
            />
            {/* <Button type='primary'>Primary Button</Button> */}
        </div>
    )
})

export default FailureAnalysis