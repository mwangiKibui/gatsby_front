import React, { Component } from 'react';
import {ListGroup,ListGroupItem} from "reactstrap";
import BlockHeader from "../blocks/BlockHeader";

/** we show the music here */

export class mixes extends Component {
    notify = () => {
        return alert("everything shall be solved from here")
    }
    render() {        
        return (
            <div className="row">
                <div className="header col-sm-12 col-12">
                    <BlockHeader title="Latest Mixes" />
                </div>
                <div className="col-sm-12 col-12">
                    <ListGroup>
                        <ListGroupItem active action={this.notify}> available mixes </ListGroupItem>
                        <ListGroupItem action={this.notify}> dummy mix2 </ListGroupItem>
                        <ListGroupItem action={this.notify}> dummy mix3 </ListGroupItem>
                        <ListGroupItem action={this.notify}> dummy mix4 </ListGroupItem>
                    </ListGroup>
                </div>
            </div>
        )
    }
}

export default mixes
