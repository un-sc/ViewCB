import React from "react";
import ReactDOM from "react-dom";
import Head from 'next/head';
import Link from 'next/link';
import date1 from './cmd/json/cmds.json'
import date2 from './cmd/json/other.json'
import Script from "next/script";
import { Divider } from '@arco-design/web-react';

export default function Commands() {
    return (
        <div className='row gy-5'>
            <Head>
                <title>命令详解列表 - ViewCB 我的世界指令百科全书</title>
            </Head>
            <Divider />
            <h2>内容增添统计</h2>
            <div id='chartCmds' style={{ height: 200, width: 100 + '%' }}></div>
            <Script
                id='chartIndex'
                onReady={() => {
                    var chartDom = document.getElementById('chartCmds');
                    var myChart = echarts.init(chartDom);
                    var option;

                    // prettier-ignore
                    const hours = [
                        'Jul', '', '', '', '', 'Aug', '', '', '', '', 'Sep', '', '', '', '', 'Oct', '', '', '', '', 'Nov', '', '', '', '', 'Dec', '', '', '', '', 'Jan', '', '', '', '',];
                    // prettier-ignore
                    const days = [
                        'Saturday', 'Friday', 'Thursday', 'Wednesday', 'Tuesday', 'Monday', 'Sunday'
                    ];
                    // prettier-ignore
                    const data = [[5, 2, 4], [3, 2, 9], [1, 2, 5], [0, 2, 1], [6, 3, 3], [5, 3, 4], [4, 5, 2], [4, 6, 1], [6, 17, 2], [4, 17, 3], [3, 28, 1], [0, 30, 1]]
                        .map(function (item) {
                            return [item[1], item[0], item[2] || '-'];
                        });
                    option = {
                        tooltip: {
                            position: 'top'
                        },
                        grid: {
                            height: '50%',
                            top: '10%'
                        },
                        xAxis: {
                            type: 'category',
                            data: hours,
                            splitArea: {
                                show: true
                            }
                        },
                        yAxis: {
                            type: 'category',
                            data: days,
                            splitArea: {
                                show: true
                            }
                        },
                        visualMap: {
                            min: 0,
                            max: 10,
                            calculable: true,
                            orient: 'horizontal',
                            left: 'center',
                            bottom: '15%'
                        },
                        series: [
                            {
                                name: 'Punch Card',
                                type: 'heatmap',
                                data: data,
                                label: {
                                    show: true
                                },
                                emphasis: {
                                    itemStyle: {
                                        shadowBlur: 10,
                                        shadowColor: 'rgba(0, 0, 0, 0.5)'
                                    }
                                }
                            }
                        ]
                    };

                    option && myChart.setOption(option);

                }}
                dangerouslySetInnerHTML={{
                    __html: ``,
                }}
            />
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
            <h2>命令详解</h2>
            <div className='col-12'>
                <div className="row">
                    {/* <CardListFirst/> */}
                    {date1.map(function (item, index) {
                        return (
                            <div className="col-sm-3 mb-3 mb-sm-0" key={index} style={{ marginTop: 10 }}>
                                <div className="card border-primary h-100">
                                    <div className="card-header">
                                        <Link href={item.url} passHref><a><h5 className="card-title">{item.title}</h5></a></Link>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
            <h2>其他内容</h2>
            <div className='col-12'>
                <div className="row">
                    {date2.map(function (item, index) {
                        return (
                            <div className="col-sm-3 mb-3 mb-sm-0" key={index} style={{ marginTop: 10 }}>
                                <div className="card border-primary h-100">
                                    <div className="card-header">
                                        <Link href={item.url} passHref><a><h5 className="card-title">{item.title}</h5></a></Link>
                                    </div>
                                    <div className="card-body">
                                        <p className="card-text">{item.description}</p>
                                    </div>
                                </div>
                            </div>
                        )
                    })}
                </div>
            </div >
            <Divider
                style={{
                    borderBottomStyle: 'dashed',
                }}
            />
            <div className="alert alert-primary" role="alert">
                更多指令正在编写中，如果您有意参与编写请<Link href="/contribute"><a className='redText' style={{ color: "aqua" }}>参考此处</a></Link>
            </div>
        </div>
    )
}