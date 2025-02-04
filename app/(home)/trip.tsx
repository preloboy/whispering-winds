import { View, Text, TextInput, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextType } from '@/components/TextType'
import { Input } from '@/components/Input'
import { Box } from '@/components/Box'
import { Scroll } from '@/components/Scroll'
import { Container } from '@/components/Container'
import { CardWithDetails } from '@/components/CardWithDetails'
import { Packages } from '@/constants/Packages'
import { Button } from '@/components/Button'

export default function trip() {
  const [destination, setDestination] = useState('')
  return (
    <SafeAreaView>
      <Input placeholder='Search for Destinations ...' onChangeText={setDestination} />
      <Box>
        <Scroll horizontal={true}>
          <TextType type='defaultSemiBold' header={true}>Trending</TextType>
          <TextType type='defaultSemiBold' header={true}>Seasonal</TextType>
          <TextType type='defaultSemiBold' header={true}>Weekend</TextType>
          <TextType type='defaultSemiBold' header={true}>Holidays</TextType>
        </Scroll>
      </Box>
      <Container style={styles.cardWithDetails}>
        <Scroll horizontal={true}>
          {Packages.map((item, index) => (
            <CardWithDetails
              style={styles.card}
              key={index}
              image='https://cubanvr.com/wp-content/uploads/2023/07/ai-image-generators.webp'
            >
              <TextType type='subtitle'>{item.name}</TextType>
              <TextType>{item.duration}</TextType>
              <TextType>{item.maxPeople} Person |<TextType type='defaultSemiBold'>₹ {item.price}</TextType></TextType>
              <Container col={false} style={styles.inclusions}>
                {item.inclusions.slice(0, 5).map((inclusion, index) => (
                  <TextType key={index} type='smallBold' color='white' style={{ paddingHorizontal: 5, paddingVertical: 2, backgroundColor: 'indigo', borderRadius: 2 }} >{inclusion}</TextType>
                ))}
              </Container>
            </CardWithDetails>
          ))}
        </Scroll>
      </Container>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  cardWithDetails: {
    marginTop: 10,
  },
  card: {
    // flexGrow:1,
    // flexBasis: 0,
    // marginHorizontal: 10,
    // marginVertical: 10,
    // borderRadius: 10,
    // overflow: 'hidden',
    // backgroundColor: 'white',
    // shadowColor: '#000',
    // shadowOffset: { width: 0, height: 2 },
    // shadowOpacity: 0.25,
    // shadowRadius: 3.84,
    // elevation: 5,
  },
  inclusions: {
    flexWrap: 'wrap',
    paddingLeft: 15,
    gap: 2

  }
})