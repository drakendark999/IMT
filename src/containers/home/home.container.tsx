import React, {useState} from 'react';
import HomeComponent from './home.component';

const HomeContainer = ({navigation}: any): JSX.Element => {
  const [number, setNumber] = useState(0);
  const props = {number, setNumber, navigation};

  return <HomeComponent  {...props}/>;
};

export default HomeContainer;
