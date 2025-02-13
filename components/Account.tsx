import { useState, useEffect } from 'react'
import { supabase } from '../lib/supabase'
import { StyleSheet, Alert } from 'react-native'
import { Container } from './elements/Container'
import { TextType } from './elements/TextType'
import { ImageView } from './elements/ImageView'
import { Box } from './elements/Box'
import { Logo } from './elements/Logo'
import { Header } from './Header'
import { Tables } from '@/database.types'
import { useGlobalContext } from '@/lib/GlobalProvider'
import { Button } from './elements/Button'
import { Input } from './elements/Input'

export default function Account() {

  const { session } = useGlobalContext()
  const [userData, setUserData] = useState<Tables<'user_information'> | null>(null)
  const [loading, setLoading] = useState(true)

  const [editing, setEditing] = useState(false)

  const [name, setName] = useState(userData?.name)

  useEffect(() => {
    if (session) getProfile()
  }, [session])

  async function getProfile() {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const { data, error, status } = await supabase
        .from('user_information')
        .select('*')
        .eq('user_id', session?.user.id)
        .single()

      if (error) {
        if (status === 406) {
          console.log('No data found for the user.')
        } else {
          throw error
        }
      }

      if (data) {
        setUserData(data)
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  async function updateProfile(data: any) {
    try {
      setLoading(true)
      if (!session?.user) throw new Error('No user on the session!')

      const updates = {


      }

      const { error } = await supabase.from('user_information').update(data).eq('user_id', session.user.id)

      if (error) {
        throw error
      }
    } catch (error) {
      if (error instanceof Error) {
        Alert.alert(error.message)
      }
    } finally {
      setLoading(false)
    }
  }

  return (
    <Container col>
      <Container style={styles.profile}>
        <Container style={styles.user}>
          <ImageView
            type='round'
            image='https://toppng.com/uploads/preview/stock-person-png-stock-photo-man-11563049686zqeb9zmqjd.png'
          />
          <Container col={true} style={{ paddingLeft: 10 }}>
            <TextType type='subtitle'>Hi!, {userData?.name}</TextType>
            <TextType >{session?.user.email}</TextType>
          </Container>
        </Container>
        {/* {editing && <Button type='filled' style={{ fontWeight: '600' }} name='Update' link />} */}
      </Container>
      <Header title='Personal Details' link={editing ? 'Done' : 'Edit'} onPress={() => {
        if (editing) {
          updateProfile({ name: name })
        }
        setEditing(!editing)
      }} />
      <Box style={styles.details}>
        {editing ?
          <Input placeholder='Enter name to modify...' onChangeText={setName} value={name} />
          : <TextType>{userData?.name} </TextType>
        }
      </Box>
      <Header title='Address' link='Edit' />
      <Box style={styles.details}>
        <TextType>{userData?.address}</TextType>
      </Box>
      <Header title='Contact Details' link='Edit' />
      <Box style={styles.details}>
        <TextType type='default'>{userData?.mobile_number}</TextType>
        <TextType type='default'>{userData?.email_address}</TextType>
      </Box>
      <Container>
        <Container style={styles.social}>
          <Logo name='logo-facebook' size={28} />
          <Logo name='logo-twitter' size={28} />
          <Logo name='logo-instagram' size={28} />
        </Container>
      </Container>
    </Container>
  )
}

const styles = StyleSheet.create({
  profile: {
    paddingLeft: 15,
    marginTop: 30,
    marginBottom: 10,
    justifyContent: 'space-between',
    alignItems: 'center'
  },
  details: {
    marginHorizontal: 15,
    // marginTop: 10,
    borderRadius: 7,
    // paddingVertical: 10,
    // paddingLeft: 10
  },
  social: {
    marginTop: 20,
    marginHorizontal: 'auto',
    gap: 20
  },
  user: {
    alignItems: 'center'
  },
  header: {
    justifyContent: 'space-between',
  },
  logout: {
    marginVertical: 20,
    marginHorizontal: 15,
    borderRadius: 10,
    paddingVertical: 10,
  }
})