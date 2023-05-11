import {createAppContainer, createSwitchNavigator} from 'react-navigation';
import HomeContainer from '../../containers/home/home.container';
import CaseContainer from '../../containers/case/case.container';

const AppNavigator = createSwitchNavigator(
  {
    Home: HomeContainer,
    Case: CaseContainer,
  },
  {
    initialRouteName: 'Home',
  },
);
const AppContainer = createAppContainer(AppNavigator);
export default AppContainer;
