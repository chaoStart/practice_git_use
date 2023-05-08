import React from 'react';
const getTime = (date, type) => {
    let time = null;
    switch (type) {
        case 'hour':
            time = date.getHours();
            time = time.toString().length === 2 ? time : `0${time}`;
            break;
        case 'minute':
            time = date.getMinutes();
            time = time.toString().length === 2 ? time : `0${time}`;
            break;
        case 'second':
            time = date.getSeconds();
            time = time.toString().length === 2 ? time : `0${time}`;
            break;
        default:
    }
    return time;
};
// 周映射
const weekDays = ['日', '一', '二', '三', '四', '五', '六'];
// 格式化时间
const formatDate = currrentDate => {
    const year = currrentDate.getFullYear();
    const month = currrentDate.getMonth() + 1;
    const date = currrentDate.getDate();
    const day = weekDays[currrentDate.getDay()];
    const time = `${getTime(currrentDate, 'hour')}:${getTime(
        currrentDate,
        'minute'
    )}:${getTime(currrentDate, 'second')}`;
    return `${year}年${month}月${date}日 周${day} ${time}`;
};
export default class ClockTimerCom extends React.Component {
    constructor(props) {
        super(props);
        this.timer = null;
        this.state = {
            currentTime: new Date(),
        };
    }
    componentDidMount() {
        this.timer = setInterval(() => {
            this.setState({
                currentTime: new Date(),
            });
        }, 1000);
    }
    componentWillUnmount() {
        if (this.timer !== null) {
            clearInterval(this.timer);
        }
    }
    render() {
        const { currentTime } = this.state;
        return (
            <div style={{ fontSize: '30px', color: 'white', fontWeight: '50', textAlign: 'right', }}>
                {formatDate(currentTime)}
            </div>
        );
    }
}