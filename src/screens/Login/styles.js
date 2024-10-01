import { StyleSheet } from "react-native";
import { Metrics } from "../../theme";

const styles = StyleSheet.create({
    mainScrollViewStyle: {
        flex: 1,
    },

    contentContainerStyle:{
        alignItems: 'center',
    },

    inputFieldContainer:{
        marginHorizontal: Metrics.screenWidth * 0.2
    }
})

export default styles;