import {Text, View} from 'react-native'
import {styles} from './MainScreenStyle'
import { StatusBar } from 'expo-status-bar';
import { ImageProfile } from '../../components/ImageProfile/ImageProfile';
import { ButtonSocialMedia } from '../../components/ButtonSocialMedia/ButtonSocialMedia';
import * as repository from '../../Services/myProfileData';

const myProfile =  repository.getProfileData();

export const MainScreen = () =>{

    
    return(
        <View style={styles.container}>
            <ImageProfile/>
            <Text style={styles.txt}>{myProfile.nome}</Text>

            {myProfile.socialMedia.map((mp) => 
                (
                    <ButtonSocialMedia key={mp.type} linkSocial={mp.lnk} texto={mp.nome} />
                )
            )}
            
            <StatusBar style='auto'/>
        </View>
    );
}