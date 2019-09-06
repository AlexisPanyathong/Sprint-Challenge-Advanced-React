import React from 'react';
import { Card, Name, Country, Searches } from '../components/StyledWidgets';

export default class PlayerCard extends React.Component {

    render() {
        return (

            <Card>
                <div className="player-card" data-testid="player">
                    <Name>
                        {this.props.player.name}
                    </Name>

                    <Country>
                        {this.props.player.country}
                    </Country>

                    <Searches>
                        Searches: {this.props.player.searches}
                    </Searches>
                </div>
            </Card>
        )
    }
}