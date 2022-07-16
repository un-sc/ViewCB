import Link from 'next/link'
import React from 'react';
const MyButton = React.forwardRef(({ onClick }, ref) => {
    return (
        <a className="btn btn-primary" onClick={onClick} ref={ref}>
            Go
        </a>
    )
})


export default function OtherList() {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">目标选择器</h5>
                            <p className="card-text">它可以指定命令的执行体、条件信息等内容。</p>
                            <Link href="/commands/目标选择器" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">权限等级</h5>
                            <p className="card-text">权限等级用于控制命令执行者可以执行什么命令。</p>
                            <Link href="/commands/权限等级" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">声音列表</h5>
                            <p className="card-text">我的世界可用的声音ID列表。</p>
                            <Link href="/commands/声音列表" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">坐标</h5>
                            <p className="card-text">我的世界坐标简介。</p>
                            <Link href="/commands/坐标" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 