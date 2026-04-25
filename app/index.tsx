import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Linking } from 'react-native';
import { Link } from 'expo-router';

export default function Home() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.hero}>
        <Text style={styles.heroTitle}>Welcome to Hex64</Text>
        <Text style={styles.heroSubtitle}>A modern mobile application</Text>
      </View>

      <View style={styles.features}>
        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🚀</Text>
          <Text style={styles.featureTitle}>快速开发</Text>
          <Text style={styles.featureDesc}>
            使用 React Native 和 Expo，提供流畅的开发体验
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>📱</Text>
          <Text style={styles.featureTitle}>跨平台</Text>
          <Text style={styles.featureDesc}>
            一套代码，同时支持 iOS 和 Android 系统
          </Text>
        </View>

        <View style={styles.featureCard}>
          <Text style={styles.featureIcon}>🛣️</Text>
          <Text style={styles.featureTitle}>路由管理</Text>
          <Text style={styles.featureDesc}>
            内置 expo-router，轻松管理页面导航
          </Text>
        </View>
      </View>

      <View style={styles.quickLinks}>
        <Text style={styles.sectionTitle}>快速链接</Text>
        <Link href="/dashboard" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>控制面板 →</Text>
          </TouchableOpacity>
        </Link>
        <Link href="/about" asChild>
          <TouchableOpacity style={styles.linkButton}>
            <Text style={styles.linkText}>关于我们 →</Text>
          </TouchableOpacity>
        </Link>
      </View>

      <View style={styles.footer}>
        <Text style={styles.footerText}>© 2026 Hex64 App. All rights reserved.</Text>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  },
  hero: {
    backgroundColor: '#667eea',
    paddingVertical: 60,
    paddingHorizontal: 20,
    alignItems: 'center',
  },
  heroTitle: {
    fontSize: 32,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 8,
  },
  heroSubtitle: {
    fontSize: 18,
    color: 'rgba(255,255,255,0.9)',
  },
  features: {
    padding: 20,
  },
  featureCard: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  featureIcon: {
    fontSize: 40,
    marginBottom: 12,
  },
  featureTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#646cff',
    marginBottom: 8,
  },
  featureDesc: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
    lineHeight: 22,
  },
  quickLinks: {
    padding: 20,
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  linkButton: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: '#333',
  },
  linkText: {
    fontSize: 16,
    color: '#646cff',
    fontWeight: '600',
  },
  footer: {
    padding: 20,
    alignItems: 'center',
    borderTopWidth: 1,
    borderTopColor: '#333',
    marginTop: 20,
  },
  footerText: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
  },
});
