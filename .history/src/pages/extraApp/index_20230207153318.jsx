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
    const [optimationURL, setoptimationURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_6b43a56ff3274bb09bd37267ac8f3091')
    const [productionControlURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_515c8c7046c4489f98da0ca87773c26f')
    const [equipmentURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_808a0139349d4b078e20a60763ba51a6')
    const [safeURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_71abddf6ccc44317a4d596b6417853b0')
    return (
        <div id="mainbox">
            <div className="topApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img1} alt="1" onClick={() => { window.open(optimationURL, "target", ""); }} />
                    <div className="apptitle">
                        优化控制域
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img2} alt="1" onClick={() => { window.open(productionControlURL, "target", ""); }} />
                    <div className="apptitle">
                        生产管控域
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img3} alt="1" onClick={() => { window.open(equipmentURL, "target", ""); }} />
                    <div className="apptitle">
                        设备运维域
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img4} alt="1" onClick={() => { window.open(safeURL, "target", ""); }} />
                    <div className="apptitle">
                        安全环保域
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