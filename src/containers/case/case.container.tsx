import React from 'react';
import CaseComponent from './case.component';

const CaseContainer = ({navigation}: any): JSX.Element => {
    console.log('navigate',navigation)
  return <CaseComponent />;
};

export default CaseContainer;
