import React, { memo, useState } from 'react'
import './App2.less'
import ExtraApp from './pages/extraApp/index';
import ProductionSituation from './pages/ProductionSituation'
import FailureAnalysis from './pages/FailureAnalysis';
import EnergyIndicator from './pages/energyIndicator';
import APCPerformanceMonitor from './pages/APCvalues/index'
import PIDPerformanceEvaluation from './pages/PID性能评估板块';
import EnergySupply_demand from './pages/能源供需平衡';
import ExtraApp2 from './pages/ExtraAPP2';
import { Select, Tabs, Empty } from 'antd'
const App = memo(() => {
    const { TabPane } = Tabs;
    const { Option } = Select;
    let items = ['水煤浆', '一氧化碳']
    let SelectItems = [];
    for (let i of items) {
        SelectItems.push(<Option key={i} value={i}>{i}</Option>)
    }
    const [selectContent, setselectContent] = useState('水煤浆');
    return (
        <>
            <div className="title">
                <span>煤制乙二醇测试验证平台</span>
            </div>
            <div className="content">
                <div className="content-left">
                    <div className="otherApp">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            相关APP入口
                        </div>
                        <div id="item">
                            <ExtraApp></ExtraApp>
                        </div>
                    </div>
                    <div className="Apccontent">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            优化控制域
                        </div>
                        <div id="item">
                            <Tabs defaultActiveKey='1' tabBarStyle={{ borderBottom: 'unset' }} className='tabscontent'>
                                <TabPane tab='APC性能监控' key='1'>
                                    <APCPerformanceMonitor></APCPerformanceMonitor>
                                </TabPane>
                                <TabPane tab='PID性能评估' key='2'>
                                    {/* <div className="pid" style={{ width: '100%', height: '100%', backgroundColor: 'red' }} >
                                        
                                    </div> */}
                                    <PIDPerformanceEvaluation></PIDPerformanceEvaluation>
                                </TabPane>
                                <TabPane tab='协同操作优化' key='3'>
                                    <Empty></Empty>
                                </TabPane>
                            </Tabs>
                        </div>
                    </div>
                    <div className="enengy">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            能源供需
                        </div>
                        {/* <div id="item"></div> */}
                        <EnergySupply_demand></EnergySupply_demand>
                    </div>
                    {/* <div className="energycontent">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            能效指标
                            <div className="rest1"></div>
                            <div className="rest">
                                <Select
                                    size='large'
                                    // ref={selectRef}
                                    // mode='multiple'
                                    // value={selectContent}
                                    defaultValue='水煤浆'
                                    style={{ width: '100%' }}
                                // onChange={handleChange}
                                >
                                    {SelectItems}
                                </Select>
                            </div>
                        </div>
                        <EnergyIndicator></EnergyIndicator>
                    </div> */}
                </div>
                <div className="content-middle">
                    <div className="productionStatistics">
                        <div className="productionToday">
                            <div className="number">39</div>
                            <span className="productionTitle">今日产量</span>
                        </div>
                        <div className="productionMonth">
                            <div className="number">471</div>
                            <span className="productionTitle">今月产量</span>
                        </div>
                        <div className="productionYear">
                            <div className="number">637</div>
                            <span className="productionTitle">今年产量</span>
                        </div>
                    </div>
                    <div className="flowChart">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            乙二醇流程图
                        </div>
                        <div id="item" className="yierchunflowChart">
                            <iframe
                                src="http://218.94.19.58:8080/#/runtime-fullscreen/runtime-fullscreen/Page_38c3736d90f1485caab22655e988f496"
                                frameborder="0"
                                style={{ width: '100%', height: '100%' }}
                            >
                            </iframe>
                        </div>
                    </div>
                    <div id="yield">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            产量情况
                        </div>
                        {/* <span>产量情况</span>
            <div id="item">
              <ProductionSituation></ProductionSituation>
            </div> */}
                        <ProductionSituation></ProductionSituation>
                    </div>
                </div>
                <div className="content-right">
                    <div className="troubleForm">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            相关APP入口
                        </div>
                        <div id="item">
                            {/* <FailureAnalysis></FailureAnalysis> */}
                            <ExtraApp2></ExtraApp2>
                        </div>
                    </div>
                    <div className="safeGeneration">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            生产管控域
                        </div>
                        <Tabs defaultActiveKey='1' tabBarStyle={{ borderBottom: 'unset' }} className='tabscontent'>
                            <TabPane tab='数据预处理' key='1'>
                                <APCPerformanceMonitor></APCPerformanceMonitor>
                            </TabPane>
                            <TabPane tab='PID性能评估' key='2'>
                                <PIDPerformanceEvaluation></PIDPerformanceEvaluation>
                            </TabPane>
                            <TabPane tab='协同操作优化' key='3'>
                                <div className="safeGenerationContent">
                                    <div className="safeImg"></div>
                                    <div className="picture1">0</div>
                                    <div className="picture2">3</div>
                                    <div className="picture3">1</div>
                                    <div className="picture4">1</div>
                                    <span className="tian">小时</span>
                                </div>
                            </TabPane>
                        </Tabs>
                    </div>
                    <div className="alarm">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            报警信息
                        </div>
                        <div id="item">
                            <div className="alarmContent1">
                                <div className="alarmImg"></div>
                                <span className="alarmtitle">全场监测点数</span>
                                <span className="alarmNumber">28</span>
                            </div>
                            <div className="alarmContent2">
                                <div className="alarmImg"></div>
                                <span className="alarmtitle">当前实时报警数</span>
                                <span className="alarmNumber">19</span>
                            </div>
                            <div className="alarmContent3">
                                <div className="alarmImg"></div>
                                <span className="alarmtitle">24小时报警数</span>
                                <span className="alarmNumber">35</span>
                            </div>
                        </div>
                    </div>
                    {/* <div className="PIDcontent">
                        <div className="middleTitle">
                            <span className="emptyIcon"></span>
                            PID性能评估
                        </div>
                        <PIDPerformanceEvaluation></PIDPerformanceEvaluation>
                    </div> */}
                </div>
            </div>
        </>
    )
})

export default App