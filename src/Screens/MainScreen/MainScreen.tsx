import {Text, View} from 'react-native'
import {styles} from './MainScreenStyle'
import { StatusBar } from 'expo-status-bar';

export const MainScreen = () =>{
    return(
        <View style={styles.container}>
            <Text>Main Screen</Text>
            <StatusBar style='auto'/>
        </View>
    );
}