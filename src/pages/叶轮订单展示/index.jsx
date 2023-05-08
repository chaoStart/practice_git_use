import React, { memo } from 'react'
import './index.less'
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
          </div>

  )
})

export default MiddleProcess