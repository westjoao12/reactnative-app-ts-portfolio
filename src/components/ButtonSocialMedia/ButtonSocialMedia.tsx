import { Pressable, Text , Linking, Alert} from "react-native";
import { styles } from "./ButtonSocialMediaStyles";
import { IProps } from "../../Model/Interfaces/IProps";

async function openLinkSocial(urlLink: string){
    let url = urlLink;
    const supported = await Linking.canOpenURL(url);

    if(supported) 
        await Linking.openURL(url);
    else
        Alert.alert('Erro ⚠', 'Link invalido!');
}

export const ButtonSocialMedia = (props: IProps)=>{
    return(
        <Pressable style={styles.btn} onPress={()=> openLinkSocial(props.linkSocial)}>
            <Text style={styles.txt}>
                {props.texto}
            </Text>
        </Pressable>
    )
}