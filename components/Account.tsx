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
import { InputEditable } from './InputEditable'

export default function Account() {

  const { session } = useGlobalContext()
  const [userData, setUserData] = useState<Tables<'user_information'> | null>(null)
  const [loading, setLoading] = useState(true)

  const [edit1, setEdit1] = useState(false)
  const [edit2, setEdit2] = useState(false)
  const [edit3, setEdit3] = useState(false)

  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [mobile, setMobile] = useState('')
  const [address, setAddress] = useState('')

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
        // console.log(data);

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
            <TextType type='title'>Hi!, {userData?.name}</TextType>
            <TextType >{session?.user.email}</TextType>
          </Container>
        </Container>
        {/* {editing && <Button type='filled' style={{ fontWeight: '600' }} name='Update' link />} */}
      </Container>
      <Header title='Personal Details' link={edit1 ? 'Done' : 'Edit'} onPress={() => {
        if (edit1 && name!=='') {
          updateProfile({ name: name })
        }
        setEdit1(!edit1)
      }} />
      <Box style={styles.details}>
        <InputEditable onchangeText={setName} placeHolder={userData?.name ?? 'Enter your name ...'} editing={edit1} >{userData?.name}</InputEditable>
        <InputEditable onchangeText={setName} placeHolder='Enter your name ...' editing={edit1} >{userData?.name}</InputEditable>
      </Box>
      <Header title='Address' link={edit2 ? 'Done' : 'Edit'} onPress={() => {
        if (edit2 && address!== '') {
          updateProfile({ address: address })
        }
        setEdit2(!edit2)
      }} />
      <Box style={styles.details}>
        <InputEditable onchangeText={setAddress} placeHolder={address} editing={edit2} >{userData?.address}</InputEditable>
      </Box>
      <Header title='Contact Details' link={edit3 ? 'Done' : 'Edit'} onPress={() => {
        if (edit3 && mobile!=='') {
          updateProfile({ mobile_number: mobile })
        }
        setEdit3(!edit3)
      }} />
      <Box style={styles.details}>
        <InputEditable onchangeText={setMobile} placeHolder={mobile} editing={edit3} >{userData?.mobile_number}</InputEditable>
        <InputEditable onchangeText={setEmail} placeHolder={email} editing={edit3} >{userData?.email_address}</InputEditable>
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
    paddingVertical: 5,
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