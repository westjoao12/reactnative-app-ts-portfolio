import {Text, View} from 'react-native'
import {styles} from './MainScreenStyle'
import { StatusBar } from 'expo-status-bar';
import { ImageProfile } from '../../components/ImageProfile/ImageProfile';
import { ButtonSocialMedia } from '../../components/ButtonSocialMedia/ButtonSocialMedia';
import { myProfileData } from '../../Services/myProfileData';

const myProfile = myProfileData;

export const MainScreen = () =>{

    
    return(
        <View style={styles.container}>
            <ImageProfile/>
            <Text style={styles.txt}>{myProfile.nome}</Text>

            <ButtonSocialMedia linkSocial={myProfile.socialMedia.linkedin.lnk} texto={myProfile.socialMedia.linkedin.nome} />
            <ButtonSocialMedia linkSocial={myProfile.socialMedia.github.lnk} texto={myProfile.socialMedia.github.nome} />
            <ButtonSocialMedia linkSocial={myProfile.socialMedia.email.lnk} texto={myProfile.socialMedia.email.nome} />
            <StatusBar style='auto'/>
        </View>
    );
}