import date1 from '../child/cmd/json/cmds.json'
import React from "react";
import ReactDOM from "react-dom";
import Link from 'next/link';

function MakeNum() {
    let num1 = Math.round(Math.random() * date1.length);
    return num1
}

export default function RandomCard() {
    return (
        <>
            <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                <div className="card border-primary h-100">
                    <div className="card-header">
                        <Link href={date1[MakeNum()].url} passHref><a><h5 className="card-title">{date1[MakeNum()].title}</h5></a></Link>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{date1[MakeNum()].description}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                <div className="card border-primary h-100">
                    <div className="card-header">
                        <Link href={date1[MakeNum()].url} passHref><a><h5 className="card-title">{date1[MakeNum()].title}</h5></a></Link>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{date1[MakeNum()].description}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                <div className="card border-primary h-100">
                    <div className="card-header">
                        <Link href={date1[MakeNum()].url} passHref><a><h5 className="card-title">{date1[MakeNum()].title}</h5></a></Link>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{date1[MakeNum()].description}</p>
                    </div>
                </div>
            </div>
            <div className="col-sm-3 mb-3 mb-sm-0" style={{ marginTop: 10 }}>
                <div className="card border-primary h-100">
                    <div className="card-header">
                        <Link href={date1[MakeNum()].url} passHref><a><h5 className="card-title">{date1[MakeNum()].title}</h5></a></Link>
                    </div>
                    <div className="card-body">
                        <p className="card-text">{date1[MakeNum()].description}</p>
                    </div>
                </div>
            </div>
        </>
    )

}