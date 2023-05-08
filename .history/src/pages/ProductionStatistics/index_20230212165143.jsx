import React, { memo } from 'react'
import './index.less'
import O2 from '../../assets/img/氧气.svg';
import DMOpurity from '../../assets/img/产品纯度.svg'
import H2 from '../../assets/img/氢气.svg'
import productionyield from '../../assets/img/DMO产量.svg'
import CO from "../../assets/img/一氧化碳.svg"
const ProductionStatistics = memo((props) => {
    const info = {
        'DMO合成': ['水', '蒸汽', '一氧化碳', '氧气'],
        'DMO精馏': ['水', '蒸汽', 'DMO纯度',],
        'EG合成': ['水', '蒸汽', '氢气', 'DMO产量'],
        'EG精馏': ['水', '蒸汽', '乙二醇产量', '乙二醇纯度'],
    }
    const style1 = {
        'DMO合成': [{ backgroundImage: `url(${CO})` }, { backgroundImage: `url(${O2})` }],
        'DMO精馏': [{ backgroundImage: `url(${productionyield})` }],
        'EG合成': [{ backgroundImage: `url(${H2})` }, { backgroundImage: `url(${productionyield})` }],
        'EG精馏': [{ backgroundImage: `url(${productionyield})` }, { backgroundImage: `url(${DMOpurity})` }]
    }

    const data = {
        'DMO合成': ['4.55万吨', '13425吨', '38.3万立方米', '9.13万立方米'],
        'DMO精馏': ['9.61万吨', '6520吨', '89.925%'],
        'EG合成': ['0', '8647吨', '32.74万立方米', '9617吨/天'],
        'EG精馏': ['5.21万吨', '1798吨', '5.4万吨/天', '99.96%']
    }
    return (
        <div className='ProductionStatistics_container'>
            <div className="content">
                <div className="picture1"></div>
                <div className="content-title">{info[props.workSpace][0]}</div>
                <div className="content-number">{data[props.workSpace][0]}</div>
            </div>
            <div className="content">
                <div className="picture2"></div>
                <div className="content-title">{info[props.workSpace][1]}</div>
                <div className="content-number">{data[props.workSpace][1]}</div>
            </div>
            <div className="content">
                <div className="picture3" style={style1[props.workSpace][0]}></div>
                <div className="content-title">{info[props.workSpace][2]}</div>
                <div className="content-number">{data[props.workSpace][2]}</div>
            </div>
            {
                props.workSpace === 'DMO精馏' ? null : <div className="content">
                    <div className="picture4" style={style1[props.workSpace][1]}></div>
                    <div className="content-title">{info[props.workSpace][3]}</div>
                    <div className="content-number">{data[props.workSpace][3]}</div>
                </div>
            }

        </div>
    )
})

export default ProductionStatistics