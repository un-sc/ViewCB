import Link from 'next/link'
import React from 'react';
const MyButton = React.forwardRef(({ onClick }, ref) => {
    return (
        <a className="btn btn-primary" onClick={onClick} ref={ref}>
            Go
        </a>
    )
})


export default function CmdList() {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/alwaysday</h5>
                            <p className="card-text">是否锁定昼夜更替，等效于/daylock。</p>
                            <Link href="/commands/alwaysday" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/clear</h5>
                            <p className="card-text">清除玩家物品栏中的物品（无法对除玩家以外实体生效）。</p>
                            <Link href="/commands/clear">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/clone</h5>
                            <p className="card-text">用于对指定区域内的方块进行复制到另一区域这一操作。</p>
                            <Link href="/commands/clone">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/daylock</h5>
                            <p className="card-text">是否锁定昼夜更替，等效于/alwaysday。</p>
                            <Link href="/commands/daylock" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/deop</h5>
                            <p className="card-text">撤销玩家管理员权限。</p>
                            <Link href="/commands/deop" passHref>
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/fill</h5>
                            <p className="card-text">该指令可对指定区域进行方块填充。</p>
                            <Link href="/commands/fill">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/gamemode</h5>
                            <p className="card-text">用于更改玩家的游戏模式。</p>
                            <Link href="/commands/gamemode">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/gamerule</h5>
                            <p className="card-text">用于更改或查询当前世界的游戏规则。</p>
                            <Link href="/commands/gamerule">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/kill</h5>
                            <p className="card-text">对实体进行清除。</p>
                            <Link href="/commands/kill">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/list</h5>
                            <p className="card-text">列出服务器当前在线的所有玩家的名称。</p>
                            <Link href="/commands/list">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/locate</h5>
                            <p className="card-text">向命令发出者显示距离最近的指定结构的坐标。</p>
                            <Link href="/commands/locate">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/op</h5>
                            <p className="card-text">给予玩家管理员权限。</p>
                            <Link href="/commands/op">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/playsound</h5>
                            <p className="card-text">向玩家播放指定声音。</p>
                            <Link href="/commands/playsound">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/say</h5>
                            <p className="card-text">在聊天栏向所有玩家发送文本消息。</p>
                            <Link href="/commands/say">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/title</h5>
                            <p className="card-text">title指令可以用于在玩家屏幕上显示文字。</p>
                            <Link href="/commands/title">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="col-sm-3">
                    <div className="card" style={{ height: 160 }}>
                        <div className="card-body">
                            <h5 className="card-title">/xp</h5>
                            <p className="card-text">给予或扣除玩家的经验。</p>
                            <Link href="/commands/xp">
                                <MyButton />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
} 