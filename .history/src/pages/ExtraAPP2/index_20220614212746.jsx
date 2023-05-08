import React, { memo } from 'react'
// import './index.less'
import img1 from '../../assets/img/AppIcon/优化控制/新建文件夹/多回路参数整定.png'
import img2 from '../../assets/img/AppIcon/优化控制/新建文件夹/自适应PID控制.png'
import img3 from '../../assets/img/AppIcon/生产管控/新建文件夹/数据预处理.png'
import img4 from '../../assets/img/AppIcon/生产管控/新建文件夹/数据计算分析.png'
import img5 from '../../assets/img/AppIcon/生产管控/新建文件夹/生产调度优化.png'
import img6 from '../../assets/img/AppIcon/能源管控/新建文件夹/能源供需平衡.png'
import img7 from '../../assets/img/AppIcon/能源管控/新建文件夹/能源分析预测.png'
import img8 from '../../assets/img/AppIcon/能源管控/新建文件夹/能效指标管理.png'
const ExtraApp2 = memo(() => {
    return (
        <div id="mainbox">
            <div className="topApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img1} alt="1" />
                    <div className="apptitle">
                        多回路参数整
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img2} alt="1" />
                    <div className="apptitle">
                        自适应PID
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img3} alt="1" />
                    <div className="apptitle">
                        数据预处理
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img4} alt="1" />
                    <div className="apptitle">
                        数据计算分析
                    </div>
                </div>
            </div>
            <div className="bottomApp">
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img5} alt="1" />
                    <div className="apptitle">
                        生产调度优化
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img6} alt="1" />
                    <div className="apptitle">
                        能源供需平衡
                    </div>
                </div>
                <div className="appitem">
                    {/* <div className="img"></div> */}
                    <img src={img7} alt="1" />
                    <div className="apptitle">
                        能源分析预测
                    </div>
                </div>
                {/* <div className="appitem">
                    <img src={img8} alt="1" />
                    <div className="apptitle">
                        能效指标管理
                    </div>
                </div> */}
            </div>
        </div>
    )
})

export default ExtraApp2