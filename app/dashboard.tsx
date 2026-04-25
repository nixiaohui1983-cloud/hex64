import { View, Text, StyleSheet, ScrollView } from 'react-native';

export default function Dashboard() {
  const stats = [
    { label: '用户总数', value: '1,234', positive: false },
    { label: '活跃用户', value: '567', positive: false },
    { label: '总收入', value: '¥89,000', positive: false },
    { label: '增长率', value: '+12.5%', positive: true },
  ];

  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>控制面板</Text>
        <Text style={styles.subtitle}>查看应用数据概览</Text>
      </View>

      <View style={styles.statsGrid}>
        {stats.map((stat, index) => (
          <View key={index} style={styles.statCard}>
            <Text style={styles.statLabel}>{stat.label}</Text>
            <Text style={[styles.statValue, stat.positive && styles.statPositive]}>
              {stat.value}
            </Text>
          </View>
        ))}
      </View>

      <View style={styles.chartPlaceholder}>
        <Text style={styles.chartIcon}>📊</Text>
        <Text style={styles.chartText}>图表区域</Text>
        <Text style={styles.chartSubtext}>数据可视化组件</Text>
      </View>

      <View style={styles.recentActivity}>
        <Text style={styles.sectionTitle}>最近活动</Text>
        <View style={styles.activityItem}>
          <View style={styles.activityDot} />
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>新用户注册</Text>
            <Text style={styles.activityTime}>2 分钟前</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <View style={[styles.activityDot, styles.activityDotGreen]} />
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>订单完成</Text>
            <Text style={styles.activityTime}>15 分钟前</Text>
          </View>
        </View>
        <View style={styles.activityItem}>
          <View style={[styles.activityDot, styles.activityDotYellow]} />
          <View style={styles.activityContent}>
            <Text style={styles.activityText}>系统更新</Text>
            <Text style={styles.activityTime}>1 小时前</Text>
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
    marginBottom: 4,
  },
  subtitle: {
    fontSize: 16,
    color: 'rgba(255,255,255,0.8)',
  },
  statsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  statCard: {
    width: '48%',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 20,
    margin: '1%',
    alignItems: 'center',
  },
  statLabel: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  statValue: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#646cff',
  },
  statPositive: {
    color: '#4ade80',
  },
  chartPlaceholder: {
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 40,
    margin: 16,
    alignItems: 'center',
  },
  chartIcon: {
    fontSize: 48,
    marginBottom: 12,
  },
  chartText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 4,
  },
  chartSubtext: {
    fontSize: 14,
    color: 'rgba(255,255,255,0.5)',
  },
  recentActivity: {
    padding: 16,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 16,
  },
  activityItem: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#1a1a1a',
    borderRadius: 12,
    padding: 16,
    marginBottom: 12,
  },
  activityDot: {
    width: 12,
    height: 12,
    borderRadius: 6,
    backgroundColor: '#646cff',
    marginRight: 16,
  },
  activityDotGreen: {
    backgroundColor: '#4ade80',
  },
  activityDotYellow: {
    backgroundColor: '#fbbf24',
  },
  activityContent: {
    flex: 1,
  },
  activityText: {
    fontSize: 16,
    color: '#fff',
    marginBottom: 4,
  },
  activityTime: {
    fontSize: 13,
    color: 'rgba(255,255,255,0.5)',
  },
});