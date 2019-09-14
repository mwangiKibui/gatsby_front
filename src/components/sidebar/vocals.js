import React, { Component } from 'react';
import {vocals as data} from '../../data';
import {FaPlayCircle} from "react-icons/fa";
import '../../styles/components.css';
import BlockHeader from "../blocks/BlockHeader";

/** we shall present some dummy vocal data here */

export class vocals extends Component {
    render() {
        const vocal_list = data.map((elem,index) => {
            return (
                <li className="vocals_card_li_holder">
                    <p><FaPlayCircle /></p>
                    <p>{elem.name}</p>
                    <p className="text-muted">{elem.duration}</p>
                </li>
            )
        })
        return (
            <div className="row vocals_card">
                <div className="header col-sm-12">
                    <BlockHeader title="Vocals"/>
                </div>
                <div className="col-sm-12 col-12">
                    <ul className="vocals_card_ul">
                        {vocal_list}
                    </ul>
                </div>
            </div>
        )
    }
}

export default vocals
