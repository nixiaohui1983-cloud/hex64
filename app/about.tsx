import { View, Text, StyleSheet, ScrollView, Linking } from 'react-native';

export default function About() {
  const techStack = [
    { name: 'React Native', desc: '跨平台移动开发框架' },
    { name: 'Expo', desc: 'React Native 开发平台' },
    { name: 'TypeScript', desc: '类型安全的 JavaScript' },
    { name: 'expo-router', desc: '文件系统路由方案' },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>关于我们</Text>
      </View>

      <View style={styles.content}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Hex64 App</Text>
          <Text style={styles.description}>
            这是一个使用 React Native 和 Expo 构建的现代化移动应用。
            我们致力于提供流畅、专业的用户体验。
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>技术栈</Text>
          {techStack.map((tech, index) => (
            <View key={index} style={styles.techItem}>
              <Text style={styles.techName}>{tech.name}</Text>
              <Text style={styles.techDesc}>{tech.desc}</Text>
            </View>
          ))}
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>版本信息</Text>
          <View style={styles.versionRow}>
            <Text style={styles.versionLabel}>应用版本</Text>
            <Text style={styles.versionValue}>1.0.0</Text>
          </View>
          <View style={styles.versionRow}>
            <Text style={styles.versionLabel}>React Native</Text>
            <Text style={styles.versionValue}>0.76.5</Text>
          </View>
          <View style={styles.versionRow}>
            <Text style={styles.versionLabel}>Expo SDK</Text>
            <Text style={styles.versionValue}>52.0.0</Text>
          </View>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>联系支持</Text>
          <Text style={styles.description}>
            如有问题或建议，请通过以下方式联系我们：
          </Text>
          <View style={styles.contactInfo}>
            <Text style={styles.contactText}>📧 nixiaohui1983@gmail.com</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#242424',
  },
  header: {
    backgroundColor: '#667eea',
    paddingVertical: 30,
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#fff',
  },
  content: {
    padding: 20,
  },
  section: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    marginBottom: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#646cff',
    marginBottom: 12,
  },
  description: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.8)',
    lineHeight: 24,
  },
  techItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 12,
    borderBottomWidth: 1,
    borderBottomColor: '#333',
  },
  techName: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  techDesc: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
  },
  versionRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 10,
  },
  versionLabel: {
    fontSize: 15,
    color: 'rgba(255,255,255,0.7)',
  },
  versionValue: {
    fontSize: 15,
    color: '#fff',
    fontWeight: '500',
  },
  contactInfo: {
    marginTop: 12,
    backgroundColor: '#242424',
    borderRadius: 8,
    padding: 16,
  },
  contactText: {
    fontSize: 15,
    color: '#fff',
  },
});