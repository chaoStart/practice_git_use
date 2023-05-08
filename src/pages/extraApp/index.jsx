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
    // const [optimationURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_6b43a56ff3274bb09bd37267ac8f3091')
    const [optimationURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_3be6231f176e456bb3eb291fb36f27b0')

    // const [productionControlURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_8d2792ad184446a28ef3b8e38572043c')
    const [productionControlURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_d3837e0531ce485b9fe626dbc1fa4d7b')

    // const [equipmentURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_808a0139349d4b078e20a60763ba51a6')
    const [equipmentURL] = useState('http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_f7854ba61ddc48de824e21c552474da8')
    const [safeURL] = useState('http://niim.com.cn:8080/#/application-runtime/Page_7f846c906066417690be99940930edd1')
    return (
        <div id="mainbox">
            <div className="topApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img1} alt="1" onClick={() => { window.open(optimationURL, "target", ""); }} />
                    <div className="apptitle">
                        设备运维域
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img2} alt="1" onClick={() => { window.open(productionControlURL, "target", ""); }} />
                    <div className="apptitle">
                        生产过程域
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img3} alt="1" onClick={() => { window.open(equipmentURL, "target", ""); }} />
                    <div className="apptitle">
                        质量管理域
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img4} alt="1" onClick={() => { window.open(safeURL, "target", ""); }} />
                    <div className="apptitle">
                        仓储物流域
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