import React from 'react';
import { SafeAreaView, ScrollView } from 'react-native';
import { Entypo } from '@expo/vector-icons';

import colors from '../constants/colors';
import { RowItem, RowSeparator } from '../components/Row';

export default () => {
    // ScrollView is good for a few items, not efficient for 1000s of items

    // set SafeAreaView to flex: 1 to take up all available space
    return (
        <SafeAreaView style={{flex: 1}}>
            <ScrollView>
            <RowItem 
                text='Themes'
                onPress={() => alert('pressed')}
                rightIcon={<Entypo name='chevron-right' size={20} color={colors.blue} />}
            />

            <RowSeparator />

            <RowItem 
                text='React Native Basics'
                onPress={() => alert('pressed')}
                rightIcon={<Entypo name='export' size={20} color={colors.blue} />}
            />

            <RowSeparator />

            <RowItem 
                text='React Native by Example'
                onPress={() => alert('pressed')}
                rightIcon={<Entypo name='export' size={20} color={colors.blue} />}
            />
            </ScrollView>
        </SafeAreaView>
    )
}