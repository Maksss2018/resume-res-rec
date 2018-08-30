import React, { Component } from "react";
import { Pie, PieChart, Sector } from "recharts";

const renderActiveShape = (props) => {
    const RADIAN = Math.PI / 180;
    const {
        cx,
        cy,
        midAngle,
        innerRadius,
        outerRadius,
        startAngle,
        endAngle,
        fill,
        payload,
        percent,
        //    value
    } = props;
    const sin = Math.sin(-RADIAN * midAngle);
    const cos = Math.cos(-RADIAN * midAngle);
    const sx = cx + (outerRadius + 10) * cos;
    const sy = cy + (outerRadius + 10) * sin;
    const mx = cx + (outerRadius + 30) * cos;
    const my = cy + (outerRadius + 30) * sin;
    const ex = mx + (cos >= 0 ? 1 : -1) * 22;
    const ey = my;
    const textAnchor = cos >= 0 ? 'start' : 'end';

    return (
        <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}></text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
      <Sector
        cx={cx}
        cy={cy}
        startAngle={startAngle}
        endAngle={endAngle}
        innerRadius={outerRadius + 6}
        outerRadius={outerRadius + 10}
        fill={fill}
      />
      <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none"/>
      <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none"/>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${payload.name}`}</text>
      <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
        {`(${(percent * 100).toFixed(2)}%)`}
      </text>
    </g>
    );
};


class SkillsPieContainer extends Component {
    constructor() {
        super();
        this.state = {
            activeIndex: 0
        };

        this.onPieEnter = this.onPieEnter.bind(this)
    }
    componentWillUnmount() {
        this.onPieEnter;
    }
    onPieEnter(data, index) {
        this.setState({
            activeIndex: index,
        });
    }

    render() {
        let width = window.innerWidth ||
            document.documentElement.clientWidth ||
            document.body.clientWidth;

        return (<PieChart key={"pie"+this.props.index} width={400} height={300}>
                <Pie
                    activeIndex={this.state.activeIndex}
                    activeShape={renderActiveShape}
                    data={this.props.item}
                    cx={width <= 450 ? width <= 410 ? width <= 320 ? "30%" : "40%" : "36%" : "56%"}
                    cy={width <= 450 ? width <= 410 ? "40%" : "40%" : "50%"}
            innerRadius={20}
            outerRadius={40}
            fill="#8884d8"
            onMouseEnter={this.onPieEnter}
            />
       </PieChart>

        );
    }
}

export default SkillsPieContainer;