import {Text, View} from 'react-native'
import {styles} from './MainScreenStyle'
import { StatusBar } from 'expo-status-bar';
import { ImageProfile } from '../../components/ImageProfile/ImageProfile';
import { ButtonSocialMedia } from '../../components/ButtonSocialMedia/ButtonSocialMedia';

export const MainScreen = () =>{

    const lnk = "https://www.linkedin.com/in/westjoao12";
    
    return(
        <View style={styles.container}>
            <ImageProfile/>
            <Text style={styles.txt}>Seu nome</Text>

            <ButtonSocialMedia linkSocial='httpsss://www.linkedin.com/in/westjoao12' texto='LINKEDIN' />
            <StatusBar style='auto'/>
        </View>
    );
}