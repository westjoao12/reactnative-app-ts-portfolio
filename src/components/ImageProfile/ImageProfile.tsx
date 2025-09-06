import {View, Image} from 'react-native'
import {styles} from './ImageProfileStyles';
const profilePicture = require('../../../assets/profile.jpeg')

export const ImageProfile = () =>{
    return(
        <View style={styles.container}>
            <Image source={profilePicture}  style={styles.imgProfile}/>
        </View>
    )
}