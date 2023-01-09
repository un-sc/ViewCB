import date1 from '../child/cmd/json/cmds.json'
import React from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';
import { useEffect, useState } from 'react'

function MakeNum(List) {
    const [num1, setNum1] = useState(Math.round(Math.random() * date1.length))
    const [num2, setNum2] = useState(Math.round(Math.random() * date1.length))
    const [num3, setNum3] = useState(Math.round(Math.random() * date1.length))
    const [num4, setNum4] = useState(Math.round(Math.random() * date1.length))
    useEffect(() => setNum1(Math.round(Math.random() * date1.length)), [])
    useEffect(() => setNum2(Math.round(Math.random() * date1.length)), [])
    useEffect(() => setNum3(Math.round(Math.random() * date1.length)), [])
    useEffect(() => setNum4(Math.round(Math.random() * date1.length)), [])
    switch (List) {
        case 1:
            return (
                <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                    <div className="card border-primary h-100">
                        <div className="card-header">
                            <Link href={date1[num1].url} passHref><a><h5 className="card-title">{date1[num1].title}</h5></a></Link>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{date1[num1].description}</p>
                        </div>
                    </div>
                </div>
            )
            break
        case 2:
            return (
                <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                    <div className="card border-primary h-100">
                        <div className="card-header">
                            <Link href={date1[num2].url} passHref><a><h5 className="card-title">{date1[num2].title}</h5></a></Link>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{date1[num2].description}</p>
                        </div>
                    </div>
                </div>
            )
            break
        case 3:
            return (
                <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                    <div className="card border-primary h-100">
                        <div className="card-header">
                            <Link href={date1[num3].url} passHref><a><h5 className="card-title">{date1[num3].title}</h5></a></Link>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{date1[num3].description}</p>
                        </div>
                    </div>
                </div>
            )
            break
        case 4:
            return (
                <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                    <div className="card border-primary h-100">
                        <div className="card-header">
                            <Link href={date1[num4].url} passHref><a><h5 className="card-title">{date1[num4].title}</h5></a></Link>
                        </div>
                        <div className="card-body">
                            <p className="card-text">{date1[num4].description}</p>
                        </div>
                    </div>
                </div>
            )
            break
    }
}

export default function RandomCard() {
    return (
        <>
            {MakeNum(1)}
            {MakeNum(2)}
            {MakeNum(3)}
            {MakeNum(4)}
        </>
    )

}