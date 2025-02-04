import { View, Text, Image, StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import { Container } from '@/components/elements/Container'
import { Box } from '@/components/elements/Box'
import { Card } from '@/components/elements/Card'
import { SafeAreaView } from 'react-native-safe-area-context'
import { TextType } from '@/components/elements/TextType'
import { Button } from '@/components/elements/Button'
import { Places } from '@/constants/Places'
import { Services } from '@/constants/Services'
import { Packages } from '@/constants/Packages'
import { Tabbar } from '@/components/elements/Tabbar'
import { Scroll } from '@/components/elements/Scroll'
import { Ionicons } from '@expo/vector-icons'

export default function index() {
  return (
    <SafeAreaView style={{ flex: 1 }}>
      <Scroll
        horizontal={false}
      >
        <TextType type='title' header={true}>What's new today?</TextType>
        <Container>
          {Services.map((service, index) => (
            <Button key={index} col={true} round align='center'>
              <Ionicons name={service.icon as keyof typeof Ionicons.glyphMap} size={22} />
              <TextType type='defaultSemiBold'>{service.name}</TextType>
            </Button>
          ))}
        </Container>
        <View style={styles.inline}>
          <TextType type='subtitle' header={true}>Popular Packages</TextType>
          <Button type='normal'>View all</Button>
        </View>
        <Box>
          <Scroll horizontal={true}>
            {Packages.map((packageItem, index) => (
              <Tabbar key={index}>
                {packageItem.name}
              </Tabbar>
            ))}
          </Scroll>
        </Box>
        <Container>
          <Scroll horizontal={true}>
            {Packages.map((item, index) => (
              <Card
                landscape
                key={index}
                image='https://th.bing.com/th/id/OIP.yeveYKVrulCwFOTANK3R-AHaEo?rs=1&pid=ImgDetMain'
              >
                <TextType type='subtitle' style={{ paddingHorizontal: 10 }}>{item.name}</TextType>
                <TextType type='defaultSemiBold' style={{ paddingHorizontal: 10 }}>
                  ₹ {item.price} |
                  <TextType style={{ paddingHorizontal: 10 }}> {item.maxPeople} Person</TextType>
                </TextType>
                <TextType type='default' style={{ paddingHorizontal: 10 }}>{item.description}</TextType>
              </Card>
            ))}
          </Scroll>
        </Container>
        <View style={styles.inline}>
          <TextType type='subtitle' header={true}>Famous tourist places</TextType>
          <Button type='filled'><TextType>View all</TextType></Button>
        </View>
        <Container>
          <Scroll horizontal={true} style={styles.list} >
            {Places.map((place, index) => (
              <Card
                portrait
                key={index}
                image='https://th.bing.com/th/id/R.80048c94faacac8b7ff6af18efa3d92a?rik=Ac82coHKVHLVyg&riu=http%3a%2f%2fwonderfulengineering.com%2fwp-content%2fuploads%2f2016%2f01%2fnature-wallpapers-8.jpg&ehk=GoUR7nA3jNm0gIdWFJoMVL1iu%2bJuWOU7Nu7KkgKZzeQ%3d&risl=&pid=ImgRaw&r=0'
              >
                <TextType type="defaultSemiBold">{place.name}</TextType>
              </Card>
            ))}
          </Scroll>
        </Container>
      </Scroll>
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
    marginTop: 20
  },
  tabbar: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  cardLanscape: {
    flexDirection: 'row',
    marginVertical: 10,
    marginHorizontal: 10,
    borderRadius: 10,
    paddingVertical: 10,
    paddingHorizontal: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  packages: {
    marginVertical: 10,
    marginHorizontal: 10,
    paddingHorizontal: 10,
    paddingVertical: 10,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  }
});