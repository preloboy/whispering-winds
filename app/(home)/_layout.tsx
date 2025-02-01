import { View, Text } from 'react-native'
import React from 'react'
import { Tabs } from 'expo-router'
import { Ionicons } from '@expo/vector-icons'

export default function _layout() {
    return (
        <Tabs
            screenOptions={{
                headerShown: false,
                tabBarStyle: {
                    height: 60,
                    borderRadius: 30,
                    marginHorizontal: 20,
                    paddingHorizontal:20,
                    marginBottom:10
                },
                tabBarItemStyle:{
                    borderRadius:50,
                    marginHorizontal:10,
                    alignSelf:'center',
                    height: 50
                },
            }}
        >
            <Tabs.Screen
                name='index'
                options={{
                    title: 'Home',
                    tabBarIcon: ({ color = 'black' }) => (
                        <Ionicons name='home' size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name='explore'
                options={{
                    title: 'Explore',
                    tabBarIcon: ({ color = 'black' }) => (
                        <Ionicons name='compass' size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="search"
                options={{
                    title: 'Search',
                    tabBarIcon: ({ color = 'black' }) => (
                        <Ionicons name='search' size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="trip"
                options={{
                    title: 'Trip',
                    tabBarIcon: ({ color = 'black' }) => (
                        <Ionicons name='car' size={24} color={color} />
                    )
                }}
            />
            <Tabs.Screen
                name="profile"
                options={{
                    title: 'Profile',
                    tabBarIcon: ({ color = 'black' }) => (
                        <Ionicons name='person' size={24} color={color} />
                    )
                }}
            />
        </Tabs>
    )
}