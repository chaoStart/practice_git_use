import React, { memo, useState } from 'react'
import './index.less'
import img1 from '../../assets/img/AppIcon/优化控制/新建文件夹/协同操作优化.png'
import img2 from '../../assets/img/AppIcon/优化控制/新建文件夹/模型预测控制.png'
import img3 from '../../assets/img/AppIcon/优化控制/新建文件夹/APC性能监控.png'
import img4 from '../../assets/img/AppIcon/优化控制/新建文件夹/PID性能评估.png'
import img5 from '../../assets/img/AppIcon/生产管控/新建文件夹/装置收率模型.png'
import img6 from '../../assets/img/AppIcon/生产管控/新建文件夹/生产统计模型.png'
import img7 from '../../assets/img/AppIcon/设备运维/新建文件夹/故障定位分析.png'
import img8 from '../../assets/img/AppIcon/能源管控/新建文件夹/能效指标管理.png'
const ExtraApp = memo(() => {
    const [optimationURL, setoptimationURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/optimation/dist/index.html#/cooperation')
    const [SettingURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/optimation/dist/index.html#/setting')
    const [HeatExchangerURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/equipment/dist/index.html#/HeatExchanger')
    const [overhaulURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/equipment/dist/index.html#/overhaul')
    const [yieldlURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/productionControl/dist/index.html#/yield')
    const [statisticslURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/productionControl/dist/index.html#/statistics')
    const [riskAssessmentURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/safeAndEnvironment/dist/index.html#/risk-assessment')
    const [EmergencyplanURL] = useState('http://218.94.19.58:8080/resource/App_3069cb5da25daed008faa0ff6d84a5fb/safeAndEnvironment/dist/index.html#/Emergency-plan')
    return (
        <div id="mainbox">
            <div className="topApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img1} alt="1" onClick={() => { window.open(optimationURL, "target", ""); }} />
                    <div className="apptitle">
                        协同操作优化
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img2} alt="1" onClick={() => { window.open(SettingURL, "target", ""); }} />
                    <div className="apptitle">
                        多回路参数整定
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img3} alt="1" onClick={() => { window.open(HeatExchangerURL, "target", ""); }} />
                    <div className="apptitle">
                        设备运行能效
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img4} alt="1" onClick={() => { window.open(overhaulURL, "target", ""); }} />
                    <div className="apptitle">
                        设备检修维护
                    </div>
                </div>
            </div>
            {/* <div className="bottomApp">
                <div className="appitem">
   
                    <img src={img5} alt="1" onClick={() => { window.open(yieldlURL, "target", ""); }} />
                    <div className="apptitle">
                        装置收率模型
                    </div>
                </div>
                <div className="appitem">

                    <img src={img6} alt="1" onClick={() => { window.open(statisticslURL, "target", ""); }} />
                    <div className="apptitle">
                        生产统计模型
                    </div>
                </div>
                <div className="appitem">

                    <img src={img7} alt="1" onClick={() => { window.open(riskAssessmentURL, "target", ""); }} />
                    <div className="apptitle">
                        风险评估模型
                    </div>
                </div>
                <div className="appitem">

                    <img src={img8} alt="1" onClick={() => { window.open(EmergencyplanURL, "target", ""); }} />
                    <div className="apptitle">
                        应急预案管理
                    </div>
                </div>
            </div> */}
        </div>
    )
})

export default ExtraApp