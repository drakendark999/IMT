import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';
interface ItemComponentProps {
  case: string;
  demo: string;
}
import { pxToPercentage } from '../core/libs/utils';
import {imageAbc} from '../../assets';
import { textStyle } from './text-styles';

const ItemComponent = (props: ItemComponentProps): JSX.Element => {
  return (
    <ImageBackground source={imageAbc} style={styles.itemContainer}>
      <TouchableOpacity
        style={styles.itemButton}
      />
      <View style={{marginTop: 'auto'}}>
        <Text style={styles.textCase}>{props.case}</Text>
        {/* <Text style={styles.textCase}>Case : KGBT59F4</Text> */}
        <View style={styles.itemDetail}>
          {/* <Text
              style={{
                ...styles.textCaseContent,
                marginRight: 13,
              }}>
              Pigmetation Disoders
            </Text> */}
          <Text style={styles.textCaseContent}>{props.demo}</Text>
          <Text
            style={{
              ...styles.textCaseContent,
              flex: 1,
            }}>
            0.42
          </Text>
        </View>
      </View>
    </ImageBackground>
  );
};
const styles = StyleSheet.create({
  itemContainer: {
    width: pxToPercentage(164),
    height: pxToPercentage(164),
    borderRadius: pxToPercentage(12),
    overflow: 'hidden',
    position: 'relative',
    paddingBottom: pxToPercentage(12),
    paddingLeft: pxToPercentage(8),
    paddingRight: pxToPercentage(8),
    marginTop: pxToPercentage(8),
  },
  itemButton: {
    width: pxToPercentage(24),
    height:  pxToPercentage(24),
    borderRadius:  pxToPercentage(20),
    borderColor: 'white',
    borderWidth:  pxToPercentage(2),
    position: 'absolute',
    top:  pxToPercentage(8),
    right: pxToPercentage(8)
  },
  itemDetail: {
    flexDirection: 'row',
    marginTop:  pxToPercentage(2),
    display: 'flex',
  },

  textYear: {
    ...textStyle.proTextBlack,
    fontWeight: '700',
    fontSize: 16,

    color: '#3C3775',
  },
  textContent: {
    ...textStyle.proTextBlack,
    fontWeight: '500',
    fontSize:  pxToPercentage(14),
    marginRight:  pxToPercentage(13),
    color: '#3C3775',
  },
  textCase: {
    ...textStyle.proTextBlack,
    fontWeight: '600',
    fontSize:  pxToPercentage(12),

    color: '#FFFFFF',
  },
  textCaseContent: {
    ...textStyle.proTextLight,
    fontWeight: '100',
    fontSize:  pxToPercentage(10),
    color: '#FFFFFF',
  },
});
export default ItemComponent;
