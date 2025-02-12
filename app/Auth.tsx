import React, { useEffect } from 'react'
import { supabase } from '@/lib/supabase';
import { useGlobalContext } from '@/lib/GlobalProvider';
import { Stack } from 'expo-router';
import { Login } from '@/components/Login';
import { AppState } from 'react-native';

export default function Auth() {

  const { session, setSession } = useGlobalContext()

  const {getSession} = useGlobalContext()

  useEffect(() => {
    getSession()
    supabase.auth.onAuthStateChange((_event, session) => {
      setSession(session)
    })
  }, []);

  

  

  return (
    <>
      {
        session && session.user ?
          <Stack screenOptions={{ headerShown: false }} >
            <Stack.Screen name="(home)" options={{ headerShown: false }} />
          </Stack> : <Login />
      }
    </>

  )
}

