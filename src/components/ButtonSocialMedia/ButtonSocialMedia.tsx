import { Pressable, Text } from "react-native";
import { styles } from "./ButtonSocialMediaStyles";
import { IProps } from "../../Model/Interfaces/IProps";


export const ButtonSocialMedia = (props: IProps)=>{
    return(
        <Pressable style={styles.btn}>
            <Text>
                <a href={props.linkSocial}>
                    {props.texto}
                </a>
            </Text>
        </Pressable>
    )
}