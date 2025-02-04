import { View, Text } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { Input } from '@/components/Input'
import { Box } from '@/components/Box'
import { TextType } from '@/components/TextType'

export default function search() {
  const [destination, setDestination] = useState('')
  return (
    <SafeAreaView>
      <Input placeholder='Search for Destinations ...' onChangeText={setDestination} />
      <Box>
        <TextType type='defaultSemiBold'>Search results ...</TextType>
      </Box>
      <TextType>{destination}</TextType>
    </SafeAreaView>
  )
}