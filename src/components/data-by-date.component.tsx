import React, {useEffect} from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {datafake} from '../core/data/datafake';
import {CaseData} from '../core/models/case/case.model';

import ItemComponent from './item-case.component';
import {pxToPercentage} from '../core/libs/utils';
import {useDispatch, useSelector} from 'react-redux';
import {onThunkCase} from '../containers/case/store/thunk';
import {AppState} from '../core/store';

import {textStyle} from './text-styles';


const DataByDateComponent = (): JSX.Element => {
  const dispatch = useDispatch();
  const data: CaseData[] = useSelector((state: AppState) => state.case.data);

  useEffect(() => {
    onGetCase();
  }, []);
  const onGetCase = (): void => {
    dispatch(onThunkCase() as any);
  };
  //   console.log('data 22',data)
  return (
    <View style={{marginBottom: pxToPercentage(20)}}>
      <Text style={styles.textYear}>2022</Text>
      {/* Box test */}
      <View>
        <Text style={styles.textContent}>14 September</Text>
        <View style={styles.dataContent}>
          {data.map((e: CaseData) => {
            return <ItemComponent key={e.id} case={e.case} demo={e.demo} />;
          })}
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  dataContent: {
    display: 'flex',
    justifyContent: 'space-between',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  textContent: {
    ...textStyle.proTextBlack,
    fontWeight: '500',
    fontSize: pxToPercentage(14),
    marginTop: pxToPercentage(12),
    color: '#3C3775',
  },
  textYear: {
    ...textStyle.proTextBlack,
    fontWeight: '700',
    fontSize: pxToPercentage(16),

    color: '#3C3775',
  },
});
export default DataByDateComponent;
