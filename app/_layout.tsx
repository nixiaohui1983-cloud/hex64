import { Stack } from 'expo-router';
import { StatusBar } from 'expo-status-bar';

export default function RootLayout() {
  return (
    <>
      <StatusBar style="light" />
      <Stack
        screenOptions={{
          headerStyle: {
            backgroundColor: '#1a1a1a',
          },
          headerTintColor: '#646cff',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          contentStyle: {
            backgroundColor: '#242424',
          },
        }}
      >
        <Stack.Screen name="index" options={{ title: 'Hex64' }} />
        <Stack.Screen name="dashboard" options={{ title: '控制面板' }} />
        <Stack.Screen name="about" options={{ title: '关于我们' }} />
      </Stack>
    </>
  );
}
