import Link from 'next/link'
import React from 'react';
// const MyButton = React.forwardRef(({ onClick }, ref) => {
//     return (
//         <a className="btn btn-primary" onClick={onClick} ref={ref}>
//             Go
//         </a>
//     )
// })


export default function CmdList() {
    return (
        <div className='col-12'>
            <div className="row">
                <div className="col-sm-3">
                    <Link href="/commands/alwaysday" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/alwaysday</h5>
                                    <p className="card-text" style={{ color: "black" }}>是否锁定昼夜更替，等效于/daylock。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/clear" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/clear</h5>
                                    <p className="card-text" style={{ color: "black" }}>清除玩家物品栏中的物品（无法对除玩家以外实体生效）。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/clearspawnpoint" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/clearspawnpoint</h5>
                                    <p className="card-text" style={{ color: "black" }}>清除玩家的重生点。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/clone" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/clone</h5>
                                    <p className="card-text" style={{ color: "black" }}>用于对指定区域内的方块进行复制到另一区域这一操作。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/daylock" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/daylock</h5>
                                    <p className="card-text" style={{ color: "black" }}>是否锁定昼夜更替，等效于/alwaysday。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/deop" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/deop</h5>
                                    <p className="card-text" style={{ color: "black" }}>撤销玩家管理员权限。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/difficulty" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/difficulty</h5>
                                    <p className="card-text" style={{ color: "black" }}>设置游戏的难度。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/enchant" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/enchant</h5>
                                    <p className="card-text" style={{ color: "black" }}>给实体手持物品进行附魔。</p>


                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/fill" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/fill</h5>
                                    <p className="card-text" style={{ color: "black" }}>该指令可对指定区域进行方块填充。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/gamemode" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/gamemode</h5>
                                    <p className="card-text" style={{ color: "black" }}>用于更改玩家的游戏模式。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/gamerule" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/gamerule</h5>
                                    <p className="card-text" style={{ color: "black" }}>用于更改或查询当前世界的游戏规则。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/give" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/give</h5>
                                    <p className="card-text" style={{ color: "black" }}>给予玩家物品。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/kill" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/kill</h5>
                                    <p className="card-text" style={{ color: "black" }}>对实体进行清除。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/list" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/list</h5>
                                    <p className="card-text" style={{ color: "black" }}>列出服务器当前在线的所有玩家的名称。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/locate" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/locate</h5>
                                    <p className="card-text" style={{ color: "black" }}>向命令发出者显示距离最近的指定结构的坐标。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/msg" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/msg</h5>
                                    <p className="card-text" style={{ color: "black" }}>对其他玩家发送私聊消息。此命令等效于/tell和/w。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/op" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/op</h5>
                                    <p className="card-text" style={{ color: "black" }}>给予玩家管理员权限。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/particle" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/particle</h5>
                                    <p className="card-text" style={{ color: "black" }}>在某位置生成粒子效果。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/playsound" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/playsound</h5>
                                    <p className="card-text" style={{ color: "black" }}>向玩家播放指定声音。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/say" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/say</h5>
                                    <p className="card-text" style={{ color: "black" }}>在聊天栏向所有玩家发送文本消息。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/scoreboard" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/scoreboard</h5>
                                    <p className="card-text" style={{ color: "black" }}>记录某一目标对应的分数信息并提供相应的查询、更改等操作。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/spreadplayers" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/spreadplayers</h5>
                                    <p className="card-text" style={{ color: "black" }}>将实体随机传送至某一指定区域内的随机位置。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/structure" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/structure</h5>
                                    <p className="card-text" style={{ color: "black" }}>其功能类似于结构方块，可对结构进行保存、加载、删除等操作。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/tell" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/tell</h5>
                                    <p className="card-text" style={{ color: "black" }}>对其他玩家发送私聊消息。此命令等效于/msg和/w。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/testfor" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/testfor</h5>
                                    <p className="card-text" style={{ color: "black" }}>检测指定目标的存在与否。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/tickingarea" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/tickingarea</h5>
                                    <p className="card-text" style={{ color: "black" }}>对常加载区块进行操作。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/toggledownfall" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/title</h5>
                                    <p className="card-text" style={{ color: "black" }}>设置当前世界的天气。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/title" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/toggledownfall</h5>
                                    <p className="card-text" style={{ color: "black" }}>title指令可以用于在玩家屏幕上显示文字。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/w" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/w</h5>
                                    <p className="card-text" style={{ color: "black" }}>对其他玩家发送私聊消息。此命令等效于/msg和/tell。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/weather" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/weather</h5>
                                    <p className="card-text" style={{ color: "black" }}>设置当前世界的天气。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
                <div className="col-sm-3">
                    <Link href="/commands/xp" passHref>
                        <a>
                            <div className="card" style={{ height: 160 }}>
                                <div className="card-body">
                                    <h5 className="card-title">/xp</h5>
                                    <p className="card-text" style={{ color: "black" }}>给予或扣除玩家的经验。</p>



                                </div>
                            </div>

                        </a>
                    </Link>
                </div>
            </div>
        </div>
    )
} 