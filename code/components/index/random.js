import date1 from '../child/cmd/json/cmds.json'
import React from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
// import { useEffect, useState, useLayoutEffect } from 'react'
import { Card, Avatar, Typography, Space, Button } from '@arco-design/web-react';
import { IconThumbUp, IconShareInternal, IconMore } from '@arco-design/web-react/icon';
import "@arco-design/web-react/dist/css/arco.css";
import Image from 'next/image'
import img1 from '../../public/坐标-1.png'
import img2 from '../../public/toggledownfall-1.png'
import img3 from '../../public/clone-1.svg'

const { Meta } = Card;

export default function Recommend() {
    return (
        <>
            <Card
                className='card-with-icon-hover'
                style={{ width: 300, marginLeft: 30 }}
                hoverable
                title='2022/7/15'
                extra={<Link href='/commands/坐标'>More</Link>}
                cover={
                    <div style={{ height: 104, overflow: 'hidden' }}>
                        <Image
                            quality={30}
                            style={{ width: '100%', transform: 'translateY(-120px)' }}
                            alt='我的世界坐标'
                            src={img1}
                        />
                    </div>
                }
                actions={[
                    <Button type='outline' shape='round' href='/commands/坐标'>Read More</Button >
                ]}
            >
                <Meta
                    avatar={
                        <Space>
                            <Avatar size={24}>联</Avatar>
                            <Typography.Text>联安</Typography.Text>
                        </Space>
                    }
                    title='坐标'
                    description='概况 坐标的表达形式大体可以分为三种：绝对坐标、相对坐标、偏移坐标。 在世界中，玩家所处位置的坐标是以玩家下半身为准。绝对坐标 绝对坐标就是指当前所处纬度的坐标。如下图所示，则绝对坐标为-49 83 58'
                />
            </Card>
            <Card
                className='card-with-icon-hover'
                style={{ width: 300, marginLeft: 30 }}
                hoverable
                extra={<Link href='/commands/toggledownfall'>More</Link>}
                title='2022/7/18'
                cover={
                    <div style={{ height: 104, overflow: 'hidden' }}>
                        <Image
                            quality={30}
                            style={{ width: '100%' }}
                            alt='我的世界命令toggledownfall'
                            src={img2}
                        />
                    </div>
                }
                actions={[
                    <Button type='outline' shape='round' href='/commands/toggledownfall'>Read More</Button >
                ]}
            >
                <Meta
                    avatar={
                        <Space>
                            <Avatar size={24}>联</Avatar>
                            <Typography.Text>联安</Typography.Text>
                        </Space>
                    }
                    title='命令toggledownfall'
                    description='用途 命令toggledownfall。执行权限 权限等级：1有关权限等级的定义和来源参考此处。参数列表 /toggledownfall 参数说明 无，每次输入该指令会切换当前天气。切换顺序如下图所示  当前天气晴朗会转换为'
                />
            </Card>
            <Card
                className='card-with-icon-hover'
                style={{ width: 300, marginLeft: 30 }}
                hoverable
                title='2022/7/11'
                extra={<Link href='/commands/clone'>More</Link>}
                cover={
                    <div style={{ height: 104, overflow: 'hidden' }}>
                        <Image
                            quality={30}
                            style={{ width: '100%' }}
                            alt='我的世界命令clone'
                            src={img3}
                        />
                    </div>
                }
                actions={[
                    <Button type='outline' shape='round' href='/commands/clone'>Read More</Button >
                ]}
            >
                <Meta
                    avatar={
                        <Space>
                            <Avatar size={24}>联</Avatar>
                            <Typography.Text>联安</Typography.Text>
                        </Space>
                    }
                    title='命令clone'
                    description='用途 用于对指定区域内的方块进行复制到另一区域这一操作。执行权限 权限等级：1有关权限等级的定义和来源参考此处。参数列表 /clone <起点坐标> <终点坐标> <目标位置坐标> 「填充区域的操作模式」 「源区域的操作模式'
                />
            </Card>
        </>
    )
}
