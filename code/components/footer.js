import React from 'react';
// import { Divider } from 'antd';
import Link from 'next/link';
import { Divider, Menu, Grid } from '@arco-design/web-react';
import { Typography } from 'antd';
const Paragraph = Typography
import "@arco-design/web-react/dist/css/arco.css";
const MenuItem = Menu.Item;
const SubMenu = Menu.SubMenu;
const Row = Grid.Row;
const Col = Grid.Col;



export default function Footer() {
    return (
        <div style={{ backgroundColor: "#0b0b0b", padding: 0, width: 100 + '%' }}>
            <Menu style={{ width: 100 + '%', backgroundColor: "#0b0b0b" }} >
                <Row>
                    <Col lg={3} xs={24}>
                        <MenuItem key='0' style={{ padding: 0, marginRight: 38, backgroundColor: "#0b0b0b" }} disabled>
                            <img src="https://public.viewcb.net/images/viewcb-logo-light.png" height={60 + "px"} />
                        </MenuItem>
                    </Col>
                    <Col lg={12} xs={23}>
                        <Paragraph>
                            <blockquote style={{ color: "white", marginTop: 10, }}>我的世界基岩版的命令百科全书，为您带来无障碍、易于理解的基岩版指令百科。</blockquote>
                        </Paragraph>
                        {/* <Typography.Title heading={5} style={{ color: "white", marginTop: 10 }}>我的世界基岩版的命令百科全书，为您带来无障碍、易于理解的基岩版指令百科。</Typography.Title> */}
                    </Col>
                </Row>
            </Menu>
            <Row style={{ marginLeft: 20 }}>
                <Col lg={8} xs={24}>
                    <Divider />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link active" id="deleteColor" style={{ color: "white" }}>
                                Copyright © 2022-2023 ViewCB. All rights reserved.
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='http://beian.miit.gov.cn/' target="_blank" style={{ color: "white" }}>
                                冀ICP备 2022016585号
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='http://www.beian.gov.cn/portal/registerSystemInfo?recordcode=13108202000849' target="_blank" style={{ color: "white" }}>
                                <img src='https://public.viewcb.net/images/beian.png' />
                                冀公网安备 13108202000849号
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='https://www.12377.cn/' target="_blank" style={{ color: "white" }}>
                                中国互联网举报中心
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col lg={3} xs={24}>
                    <Divider />
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0" style={{ width: "auto" }}>
                        <li className="nav-item">
                            <Link href="/">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    首页
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/commands">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    命令详解
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/about">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    关于
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <Link href="/contribute">
                                <a className="nav-link active" aria-current="page" style={{ color: "white" }}>
                                    贡献
                                </a>
                            </Link>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='https://www.baidu.com/s?wd=ViewCB' target='_blank' aria-current="page" style={{ color: "white" }}>
                                百度一下本站
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='https://www.wenjuan.com/s/UZBZJv18XE3/' target='_blank' aria-current="page" style={{ color: "white" }}>
                                提出反馈/建议
                            </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link active" href='https://jq.qq.com/?_wv=1027&k=yYM18Myn' target='_blank' aria-current="page" style={{ color: "white" }}>
                                加入QQ群
                            </a>
                        </li>
                    </ul>
                </Col>
                <Col lg={10} xs={24}>
                    <Divider />
                    <Row style={{ marginLeft: 20 }}>
                        <Col><p id="time" style={{ color: "white" }}></p></Col>
                        <Col><p style={{ color: "white" }}>路漫漫其修远兮，吾将上下而求索</p></Col>
                    </Row>

                </Col>
            </Row>
        </div>

    )
}