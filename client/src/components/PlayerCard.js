import React from 'react';

export default class PlayerCard extends React.Component {

    render() {
        return (
            <div className="player-card">
                {this.props.player.name}
                {this.props.player.country}
                {this.props.player.searches}
            </div>
        )
    }
}