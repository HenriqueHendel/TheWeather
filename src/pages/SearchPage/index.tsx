import React, {useState} from 'react'
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity, TextInput } from 'react-native'

import {Feather} from '@expo/vector-icons'

const SearchPage: React.FC = () => {
    const [textInput, setTextInput] = useState('')
    return (
        <SafeAreaView style={styles.container} >
            <TouchableOpacity style={styles.backButton} >
                <Feather 
                    name='chevron-left'
                    size={32}
                    color='#000'
                />
                <Text style={{fontSize: 22}} >Voltar</Text>
            </TouchableOpacity>

            <View style={styles.searchInput} > 
                <TextInput 
                    value={textInput}
                    onChangeText={text => setTextInput(text)}
                    placeholder='Ex. Campinas, SP'
                    style={styles.input}
                />

                <TouchableOpacity style={styles.iconButtom} >
                    <Feather name='search' size={22} color='#FFF' />
                </TouchableOpacity>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingTop: '10%',
        backgroundColor: '#E8F0FF'
    },
    backButton: {
        flexDirection: 'row',
        marginLeft: 15,
        alignSelf: 'flex-start',
        alignItems: 'center',
        marginBottom: 10
    },
    searchInput: {
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: '#DDD',
        width: '90%',
        height: 50,
        borderRadius: 8
    },
    input: {
        width: '85%',
        height: 50,
        backgroundColor: '#FFF',
        borderTopLeftRadius: 8,
        borderBottomLeftRadius: 8,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 7
    },
    iconButtom: {
        width: '15%',
        backgroundColor: '#1eD6ff',
        alignItems: 'center',
        justifyContent: 'center',
        height: 50,
        borderTopRightRadius: 8,
        borderBottomRightRadius: 8
    }
})

export default SearchPage;
