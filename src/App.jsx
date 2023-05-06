import React, { memo } from 'react'
// import './index.less'
const MiddleProcess = memo(() => {
  // const img = <img src="./assets/img/加工实物图.png" alt="" />;
  /**
   * 本地测试使用，上传supos要注释掉
   */
  // useEffect(() => {
  //   setToken()
  // })
  return (
    <div className="process">
      <div className="process0">
        <div className="processTitle">加工实物照片</div>
        <div className="processImg"></div>
      </div>
      <div className="process1">
        <div className="processTitle">加工订单信息</div>
        <div className="processText0">当前加工任务：</div>
        <div className="processText1">航空叶轮加工</div>
      </div>
      <div className="process2">
        <span className="processTitle">加工状态追踪</span>
        <table className="tableList0">
          <tr>
            <th>所有状态</th>
            <th>加工工序</th>
            <th>加工耗时</th>
          </tr>
        </table>
        <table className="tableList1">
          <tr className="tr1">
            <td>当前状态</td>
            <td>车外圆</td>
            <td>3分钟</td>
          </tr>
          <tr className="tr2">
            <td>未来状态</td>
            <td>铣阶梯孔</td>
            <td>5分钟</td>
          </tr>
          <tr className="tr3">
            <td>历史状态</td>
            <td>物料运输</td>
            <td>1分钟</td>
          </tr>
        </table>
      </div>

      <i className="top-left"></i>
      <i className="top-right"></i>
      <i className="bottom-left"></i>
      <i className="bottom-right"></i>
    </div>
  )
})

export default MiddleProcess
let css = document.createElement('style');
css.innerHTML =
  `
  .process {
    width: 700px;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    border: 0.5px solid #116bb7;
    // background-color: pink;
    position: relative;
  }
  .process .process0 {
    width: 30%;
    height: 100%;
    left: 20px;
    top: 20px;
    margin-right: 31.46px;
    position: relative;
  }
  .process .process0 .processTitle {
    width: auto;
    height: 25px;
    position: absolute;
    top: 5px;
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #39d3ff;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0 0 10px #004bff;
    font-weight: 600;
    border-left: 5px solid #33f8cd;
    padding-left: 10px;
  }
  .process .process0 .processImg {
    width: 250px;
    height: 230px;
    position: absolute;
    top: 50px;
    background-image: url("http://218.94.19.58:8080/resource/App_8f4cc82543cade465a3d58f1ecaade5c/%E5%9B%BE%E7%89%87/%E5%8A%A0%E5%B7%A5%E5%AE%9E%E7%89%A9%E5%9B%BE1.png");
    background-repeat: no-repeat;
  }
  .process .process1 {
    width: 30%;
    height: 100%;
    top: 20px;
    position: relative;
  }
  .process .process1 .processTitle {
    width: auto;
    height: 25px;
    position: absolute;
    top: 5px;
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #39d3ff;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0 0 10px #004bff;
    font-weight: 600;
    border-left: 5px solid #1689ce;
    padding-left: 10px;
  }
  .process .process1 .processText0 {
    width: auto;
    height: 47px;
    position: absolute;
    top: 90px;
    font-family: DINAlternate-Bold;
    font-size: 18px;
    color: white;
    text-align: center;
    text-shadow: 0 0 11px #59ceff;
    font-weight: 700;
  }
  .process .process1 .processText1 {
    width: auto;
    height: 47px;
    position: absolute;
    top: 115px;
    font-family: DINAlternate-Bold;
    font-size: 25px;
    color: #39d3ff;
    text-align: center;
    text-shadow: 0 0 11px #59ceff;
    font-weight: 700;
  }
  .process .process2 {
    flex: 2;
    width: 35%;
    height: 100%;
    top: 20px;
    left: -20px;
    position: relative;
  }
  .process .process2 .processTitle {
    width: auto;
    height: 25px;
    position: absolute;
    top: 5px;
    font-family: PingFangSC-Semibold;
    font-size: 18px;
    color: #39d3ff;
    letter-spacing: 0;
    text-align: center;
    text-shadow: 0 0 10px #004bff;
    font-weight: 600;
    border-left: 5px solid #8d273f;
    padding-left: 10px;
  }
  .process .process2 .processTop {
    width: 100%;
    height: 47px;
    position: absolute;
    top: 35px;
    left: 98.36px;
    font-family: DINAlternate-Bold;
    font-size: 18px;
    color: white;
    text-align: center;
    text-shadow: 0 0 11px #59ceff;
    font-weight: 700;
  }
  .process .process2 td {
    width: 100px;
  }
  .process .process2 .tr1 {
    color: #39d3ff;
  }
  .process .process2 .tableList0 {
    width: 100%;
    position: absolute;
    top: 50px;
    color: white;
    text-align: center;
  }
  .process .process2 .tableList1 {
    width: 100%;
    position: absolute;
    top: 80px;
    color: white;
    text-align: center;
  }
  .process .process2 .tableList1 td {
    border: 2px solid #39d3ff;
  }
  .process .top-left {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    left: 0;
    border-left: 1px solid yellow;
    border-top: 1px solid yellow;
  }
  .process .top-right {
    position: absolute;
    width: 12px;
    height: 12px;
    top: 0;
    right: 0;
    border-right: 1px solid yellow;
    border-top: 1px solid yellow;
  }
  .process .bottom-left {
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 0;
    left: 0;
    border-left: 1px solid yellow;
    border-bottom: 1px solid yellow;
  }
  .process .bottom-right {
    position: absolute;
    width: 12px;
    height: 12px;
    bottom: 0;
    right: 0;
    border-right: 1px solid yellow;
    border-bottom: 1px solid yellow;
  }
  
`
document.getElementsByTagName('head')[0].appendChild(css)