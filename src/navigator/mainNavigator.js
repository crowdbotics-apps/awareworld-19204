import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import Settings84832Navigator from '../features/Settings84832/navigator';
import ArticleList84813Navigator from '../features/ArticleList84813/navigator';
import ArticleList84812Navigator from '../features/ArticleList84812/navigator';
import ArticleList84811Navigator from '../features/ArticleList84811/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
Settings84832: { screen: Settings84832Navigator },
ArticleList84813: { screen: ArticleList84813Navigator },
ArticleList84812: { screen: ArticleList84812Navigator },
ArticleList84811: { screen: ArticleList84811Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
