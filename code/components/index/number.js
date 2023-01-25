import React from "react";
import ReactDOM from "react-dom";
import { Statistic } from '@arco-design/web-react';
import { IconArrowRise, IconArrowFall } from '@arco-design/web-react/icon';
import "@arco-design/web-react/dist/css/arco.css";
import date1 from "../child/cmd/json/cmds.json"
import date2 from "../child/cmd/json/other.json"

const IndexNumList = () => {
  return (
    <div style={{ height: 400 }}>
      <Statistic title='累计指令详解' countUp value={date1.length} groupSeparator style={{ marginRight: 60 }} suffix={<IconArrowRise style={{ color: '#0fbf60' }} />} />
      <Statistic extra='累计页面数' countUp value={4 + date1.length + date2.length} prefix={<IconArrowFall style={{ color: '#ee4d38' }} />} /> {/*groupSeparator precision={2}   可以指定小数保留*/}
    </div>
  );
};

export default IndexNumList;
