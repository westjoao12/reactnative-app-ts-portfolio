import {Text, View} from 'react-native'
import {styles} from './MainScreenStyle'
import { StatusBar } from 'expo-status-bar';
import { ImageProfile } from '../../components/ImageProfile/ImageProfile';
import { ButtonSocialMedia } from '../../components/ButtonSocialMedia/ButtonSocialMedia';


const myProfile = {
    nome: 'WEST JOÃO',
    socialMedia: {
        linkedin:{
            nome: 'LINKEDIN',
            lnk: 'https://www.linkedin.com/in/westjoao12'
        },
         github:{
            nome: 'GITHUB',
            lnk: 'https://github.com/westjoao12'
        },
         email:{
            nome: 'FACEBOOK',
            lnk: 'https://www.facebook.com/westjoao.afonso'
        }
    }
}

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