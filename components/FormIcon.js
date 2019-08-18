import React from 'react';

import { Icon } from 'react-native-elements';

export const FormIcon = (name, theme = null) => {
  return (
    <Icon
      iconStyle={theme}
      name={name}
      size={24}
      color='white'
    />
  );
}
