import React from 'react';
import { render } from '@testing-library/react';
import '@testing-library/react/cleanup-after-each';
import PlayerCard from './PlayerCard';

// describe('<PlayerCard />', () => {
//     it ('should render PlayerCard', () => {
//         const player = render(<PlayerCard />);

//         player.getAllByTestId('player');
//     });
// });

test('contains player data', () => {
    const { getByTestId } = render(<PlayerCard />);
    getByTestId(/player/i);
  });