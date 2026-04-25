import { Tabs } from 'expo-router';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { View, StyleSheet } from 'react-native';

export default function RootLayout() {
  return (
    <Tabs
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: '#b45309',
        tabBarInactiveTintColor: '#78716c',
        tabBarLabelStyle: styles.tabBarLabel,
      }}
    >
      <Tabs.Screen
        name="index"
        options={{
          title: '八字',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="calendar-text-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="quming"
        options={{
          title: '取名',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="signature-freehand" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="bugua"
        options={{
          title: '卜卦',
          tabBarIcon: ({ color, size }) => (
            <View style={styles.centerTab}>
              <MaterialCommunityIcons name="yin-yang" size={24} color="#f59e0b" />
            </View>
          ),
          tabBarLabel: () => null,
        }}
      />
      <Tabs.Screen
        name="xueyi"
        options={{
          title: '学易',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="book-open-page-variant-outline" size={size} color={color} />
          ),
        }}
      />
      <Tabs.Screen
        name="mine"
        options={{
          title: '我的',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account-outline" size={size} color={color} />
          ),
        }}
      />
    </Tabs>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    height: 80,
    paddingTop: 8,
    paddingBottom: 20,
    backgroundColor: 'rgba(255,255,255,0.9)',
    borderTopWidth: 1,
    borderTopColor: '#e7e5e4',
  },
  tabBarLabel: {
    fontSize: 10,
    fontWeight: '500',
  },
  centerTab: {
    width: 48,
    height: 48,
    backgroundColor: '#1c1917',
    borderRadius: 24,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: -16,
  },
});
