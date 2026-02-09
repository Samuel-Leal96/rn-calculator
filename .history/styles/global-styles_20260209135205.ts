import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({

    Background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'center',
    }

})