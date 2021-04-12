import React from 'react'
import { StyleSheet, Text, TextInput, View } from 'react-native'

const Masukan = ({label,placeholder, ...rest}) => {
    return (
        <View>
            <Text style = {style.label}> {label} </Text>
            <TextInput style= {style.input} placeholder = {placeholder} {...rest}/>  
        </View>
    )
}

export default Masukan;

const styles = StyleSheet.create({
    label : {
        fontSize: 14,
        fontWeight :'500',
        marginBottom: 8
    },
    
    input: {
        borderWidth: 1,
        borderRadius: 10,
        borderColor: '#C5C5C5'
    },
})
