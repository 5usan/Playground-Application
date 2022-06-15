import {Text} from 'react-native';
import React from 'react';
import Layout from './Layout';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {faHome} from '@fortawesome/free-solid-svg-icons';
import {faHockeyPuck} from '@fortawesome/free-solid-svg-icons/faHockeyPuck';
import {faTShirt} from '@fortawesome/free-solid-svg-icons/faTShirt';
import {faKaaba} from '@fortawesome/free-solid-svg-icons/faKaaba';
import {faHamburger} from '@fortawesome/free-solid-svg-icons/faHamburger';

const Icon = ({route}) => {
  const {backgroundColor, icon} = route.params;
  return (
    <Layout backgroundColor={backgroundColor} icon={icon}>
      <FontAwesomeIcon icon={faHome} size={40} />
      <FontAwesomeIcon icon={faHockeyPuck} size={40} />
      <FontAwesomeIcon icon={faHamburger} size={40} />
      <FontAwesomeIcon icon={faKaaba} size={40} />
    </Layout>
  );
};

export default Icon;
