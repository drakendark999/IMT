import React from 'react';
import {View, Text, StyleSheet, ScrollView, Dimensions} from 'react-native';

import {pxToPercentage} from '../../core/libs/utils';
const win = Dimensions.get('window');
import DataByDateComponent from '../../components/data-by-date.component';
import {textStyle} from '../../components/text-styles';
interface CaseData {
  id: number;
  case: string;
  demo: string;
}

const CaseComponent = (): JSX.Element => {
  return (
    <View
      style={{
        flex: 1,
      }}>
      <Text style={styles.h1}>Your case</Text>
      <ScrollView>
        <View style={styles.container}>
          <DataByDateComponent />
          <DataByDateComponent />
          {/* <DataRenderByDate/> */}
        </View>
      </ScrollView>
      <View style={styles.footer}>
        <View style={styles.footerContainer}>
          <Text style={styles.footerText}>Share case to Leo Levin</Text>
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
  h1: {
    ...textStyle.proTextBlack,
    fontWeight: '700',
    fontSize: pxToPercentage(18),
    marginTop: pxToPercentage(57),
    textAlign: 'center',
    color: '#3C3775',
  },

  container: {
    paddingTop: pxToPercentage(16),
    paddingRight: pxToPercentage(16),
    paddingLeft: pxToPercentage(16),
    // backgroundColor: "#1E1E1E",
  },
  footer: {
    marginTop: 'auto',
    minHeight: pxToPercentage(69),
    alignItems: 'center',
    paddingTop: pxToPercentage(10),
  },
  footerContainer: {
    paddingLeft: pxToPercentage(27.5),
    paddingRight: pxToPercentage(27.5),
    paddingBottom: pxToPercentage(9),
    paddingTop: pxToPercentage(9),
    backgroundColor: '#D7D7D7',
    borderRadius: pxToPercentage(8),
  },
  footerText: {
    ...textStyle.proTextBlack,
    fontWeight: '500',
    fontSize: pxToPercentage(16),
    lineHeight: pxToPercentage(17),
    color: '#FFFFFF',
  },
});
export default CaseComponent;
