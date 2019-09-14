import React, { Component } from 'react';
import Mixes from './mixes';
import Vocals from './vocals'
import Tracks from "./tracks";

/** this shall include everything that dennis does for a living and djing...  */

export class music extends Component {
    render() {
        return (
            <div className="col-sm-12 col-12">
                <Tracks />
                <Mixes />
                <Vocals />
            </div>
        )
    }
}

export default music
