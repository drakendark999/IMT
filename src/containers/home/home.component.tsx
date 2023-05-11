import React, {useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {HomeComponentPropsModel} from '../../core/models/home/home.model';
import {useDispatch, useSelector} from 'react-redux';
import {AppState} from '../../core/store';
import {onThunkCase} from '../case/store/thunk';

const HomeComponent = (
  props: HomeComponentPropsModel & {navigation: any},
): JSX.Element => {
  const dispatch = useDispatch();
  const {data} = useSelector((state: AppState) => state.case);

  useEffect(() => {
    onGetCase();
  }, []);
  const onGetCase = (): void => {
    dispatch(onThunkCase() as any);
  };
  console.log('data',data)

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
      }}>
      <Text>{props.number}</Text>
      <TouchableOpacity
        onPress={(): any => props.setNumber(props.number + 1)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'blue',
        }}>
        <Text>+</Text>
      </TouchableOpacity>
      <TouchableOpacity
        onPress={(): any => props.setNumber(props.number - 1)}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'red',
        }}>
        <Text>-</Text>
      </TouchableOpacity>
      <TouchableOpacity
        style={{marginTop: 50}}
        onPress={() => props.navigation.navigate('Case')}>
        <Text>Chuyển sang màn hình case</Text>
      </TouchableOpacity>
      {/* <View>
        <Button
          title="Chuyển sang màn hình case"
          onPress={() => handleClick()}
        ></Button>
      </View> */}
    </View>
  );
};

// const styles = StyleSheet.create({
//   button: {
//     marginTop:'50px'
//   },
// });

export default HomeComponent;
