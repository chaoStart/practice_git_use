import React, { memo, useState, useEffect } from 'react'
import './App.less'
import ExtraApp from './pages/extraApp/index';
import ProductionSituation from './pages/ProductionSituation'
import FailureAnalysis from './pages/FailureAnalysis';
import EnergyIndicator from './pages/energyIndicator';
import APCPerformanceMonitor from './pages/APCvalues/index'
import PIDPerformanceEvaluation from './pages/PID性能评估板块';
import EnergySupply_demand from './pages/能源供需平衡';
import ExtraApp2 from './pages/ExtraAPP2';
import ModelPredictiveControl from './pages/ModelPredicateControl'
import ProductionStatistics from './pages/ProductionStatistics'
import Optimization from './pages/协调操作优化'
import { setToken } from './util/TokenAction';
import { Select, Tabs } from 'antd'
const App = memo(() => {
  const { Option } = Select;
  let items = ['水煤浆', '一氧化碳']
  let SelectItems = [];
  for (let i of items) {
    SelectItems.push(<Option key={i} value={i}>{i}</Option>)
  }
  let device_yield_item = ['日收率', '实时收率']
  let device_yieldSelectItems = [];
  for (let i of device_yield_item) {
    device_yieldSelectItems.push(<Option key={i} value={i}>{i}</Option>)
  }
  let workshopSection = ['DMO合成', 'DMO精馏', 'EG合成', 'EG精馏']
  let workshopSectiontItems = [];
  for (let i of workshopSection) {
    workshopSectiontItems.push(<Option key={i} value={i}>{i}</Option>)
  }
  const [selectContent, setselectContent] = useState('水煤浆');
  const [device_yield, setdevice_yield] = useState('实时收率');
  const [workspace_section, setworkspace_section] = useState('EG精馏');
  const handleChang_edevice_yieldSelectItems = (value) => {
    setdevice_yield(value)
  }
  const handleChangeworkshopSectiontItems = (value) => {
    setworkspace_section(value)
  }

  /**
   * 本地测试使用，上传supos要注释掉
   */
  // useEffect(() => {
  //   setToken()
  // })

  return (
    <>
      <div className="title">
        {/* <span className="theme">工业互联网+危化品安全生产应急管理部重点实验室</span> */}
        <span className="platformTitle">煤制乙二醇测试验证系统</span>
        {/* <span className='team'>研发团队：薄翠梅 张泉灵 金晓明 张登峰等</span> */}
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
          {/* <div className="Apccontent">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              APC
            </div>
            <div id="item">
              <APCPerformanceMonitor></APCPerformanceMonitor>
            </div>
          </div> */}

          <div className="alarm">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              生产统计信息
              <div className="rest1" style={{ width: '20%', height: '90%' }}></div>
              <div className="rest">
                <Select
                  size='large'
                  // ref={selectRef}
                  // mode='multiple'
                  // value={selectContent}
                  defaultValue={workspace_section}
                  style={{ width: '90%', height: '50%' }}
                  onChange={handleChangeworkshopSectiontItems}
                >
                  {workshopSectiontItems}
                </Select>
              </div>
            </div>
            {/* <div id="item">
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
            </div> */}
            <ProductionStatistics workSpace={workspace_section}></ProductionStatistics>
          </div>

          <div className="enengy">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              DMO加氢反应器收率
              <div className="rest1" style={{ width: '5%', height: '90%' }}></div>
              <div className="rest">
                <Select
                  size='large'
                  // ref={selectRef}
                  // mode='multiple'
                  // value={selectContent}
                  defaultValue={device_yield}
                  style={{ width: '100%' }}
                  onChange={handleChang_edevice_yieldSelectItems}
                >
                  {device_yieldSelectItems}
                </Select>
              </div>
            </div>
            {/* <div id="item"></div> */}
            <EnergySupply_demand type={device_yield}></EnergySupply_demand>
          </div>
          <div className="energycontent">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              装置能耗对比
              {/* <div className="rest1"></div>
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
              </div> */}
            </div>
            <EnergyIndicator></EnergyIndicator>
          </div>
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

          <div className="safeGeneration">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              安全生产
            </div>
            <div className="safeGenerationContent">
              <div className="safeImg"></div>
              <div className="picture1">0</div>
              <div className="picture2">0</div>
              <div className="picture3">2</div>
              <div className="picture4">3</div>
              <span className="tian">小时</span>
            </div>

          </div>
          <div className="troubleForm">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              协同操作优化
              <div className="rest1" style={{ width: '20%', height: '90%' }}></div>
              <div className="rest">
                <Select
                  size='large'
                  // ref={selectRef}
                  // mode='multiple'
                  // value={selectContent}
                  defaultValue={workspace_section}
                  style={{ width: '100%', height: '50%' }}
                // onChange={handleChangeworkshopSectiontItems}
                >
                  {workshopSectiontItems}
                </Select>
              </div>
            </div>
            <div id="item">
              {/* <FailureAnalysis></FailureAnalysis> */}
              {/* <ModelPredictiveControl></ModelPredictiveControl> */}
              <Optimization></Optimization>
            </div>
          </div>
          {/* <div className="alarm">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              生产统计信息
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
            <ProductionStatistics></ProductionStatistics>
          </div> */}
          <div className="Apccontent">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              APC
            </div>
            <div id="item">
              <APCPerformanceMonitor></APCPerformanceMonitor>
            </div>
          </div>
          <div className="PIDcontent">
            <div className="middleTitle">
              <span className="emptyIcon"></span>
              PID性能评估
            </div>
            <PIDPerformanceEvaluation></PIDPerformanceEvaluation>
          </div>
        </div>
      </div>
    </>
  )
})

export default App