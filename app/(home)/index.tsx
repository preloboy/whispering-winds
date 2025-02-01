import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Container } from '@/components/Container'
import Title from '@/components/Title'
import { Box } from '@/components/Box'
import { Card } from '@/components/Card'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextType } from '@/components/TextType'
import { Button } from '@/components/Button'
import { Places } from '@/constants/Places'
import { ButtonWithIcon } from '@/components/ButtonWithIcon'
import { Services } from '@/constants/Services'

export default function index() {
  return (
    <SafeAreaView>
      <Box style={styles.container}>
        <TextType type='title'>What's new today?</TextType>
        <Container style={styles.service}>
          {Services.map((service, index) => (
            <ButtonWithIcon key={index} title={service.name} icon={service.icon} />
          ))}
        </Container>
      </Box>
      <Box style={styles.container}>
        <Box style={styles.inline}>
          <TextType type='subtitle'>Famous tourist places </TextType>
          <Button type='filled'>View all</Button>
        </Box>
        <ScrollView horizontal={true} style={styles.list} showsHorizontalScrollIndicator={false}>
          {Places.map((place, index) => (
            <Card
              key={index}
              image='https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0'
              title={place.name}
              desc='this is a description. you can write anything in here...'

            />
          ))}
        </ScrollView>
      </Box>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'column',
    justifyContent: 'flex-start',
    paddingHorizontal: 10,
    paddingBottom: 15,
    marginHorizontal: 10,
    marginVertical: 5,
    borderRadius: 10
  },
  list: {
    flexDirection: 'row',
    overflowX: 'scroll',
  },
  'list::-webkit-scrollbar': {
    display: 'none', // For Chrome, Safari, and Opera
  },
  inline: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 10
  },
  service: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  }
});