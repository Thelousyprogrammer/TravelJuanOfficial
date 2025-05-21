import { Slot, usePathname, useRouter, useSegments } from 'expo-router';
import { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { auth } from '../data/config/firebase';

function RootLayout() {
  const [user, setUser] = useState(auth.currentUser);
  const [isLoading, setIsLoading] = useState(true);
  const segments = useSegments();
  const router = useRouter();
  const pathname = usePathname();

  // First useEffect for auth state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged(async (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        setUser(null);
      }
      setIsLoading(false);
    });
    return unsubscribe; // Cleanup function
  }, []); // Empty dependency array is correct

  // Second useEffect for navigation logic
  useEffect(() => {
    if (isLoading) {
      return; // Early return, hooks are already called above
    }

    const isRootPath = pathname === '/' || pathname === '';
    const inAuthGroup = segments.length > 0 && segments[0] === '(auth)';

    console.log('Navigation check:', { user: !!user, inAuthGroup, isRootPath, pathname, segments });

    if (user) {
      if (inAuthGroup || isRootPath) { // Simplified condition for redirecting to home
        console.log('User authenticated, redirecting to /tabs/home.');
        router.replace('/(tabs)/home');
      }
    } else { // User is not authenticated
      if (!inAuthGroup) {
        console.log('User not authenticated, not on auth page. Redirecting to /(auth)/login.');
        router.replace('/(auth)/login');
      }
    }
  }, [user, isLoading, segments, router, pathname]);

  // Conditional rendering based on isLoading - This is correct
  if (isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <Text>Loading...</Text>
      </View>
    );
  }

  // Render Slot wrapped in SafeAreaProvider
  return (
    <SafeAreaProvider>
      <Slot />
    </SafeAreaProvider>
  );
}
export default RootLayout;