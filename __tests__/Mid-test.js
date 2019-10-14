/**
 * @format
 */

import 'react-native';
import React from 'react';
import Mid from '../comps/Mid';

// Note: test renderer must be required after react-native.
import renderer from 'react-test-renderer';

it('Mid renders correctly', () => {
  renderer.create(<Mid />);
});
