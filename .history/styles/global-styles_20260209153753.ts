import { Colors } from "@/constants/theme";
import { StyleSheet } from "react-native";


export const globalStyles = StyleSheet.create({

    Background: {
        flex: 1,
        backgroundColor: Colors.background,
    },

    calculatorContainer: {
        flex: 1,
        justifyContent: 'flex-end',
        paddingBottom: 10,
    },

    mainResult: {
        color: Colors.textPrimary,
        fontSize: 70,
        textAlign: 'right',
        fontWeight: '400',
    },

    subResult: {
        color: Colors.textSecondary,
        fontSize: 30,
        textAlign: 'right',
        fontWeight: '300',
    }

})