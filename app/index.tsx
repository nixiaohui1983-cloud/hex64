import { View, Text, StyleSheet, ScrollView } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

export default function BaziPage() {
  const pillars = [
    { name: '年柱', ganZhi: '丙午', wuxing: '火火', color: '#d97706' },
    { name: '月柱', ganZhi: '庚寅', wuxing: '金木', color: '#16a34a' },
    { name: '日柱', ganZhi: '庚子', wuxing: '金水', color: '#2563eb' },
    { name: '时柱', ganZhi: '辛巳', wuxing: '金火', color: '#d97706' },
  ];

  const wuxingData = [
    { name: '金', value: 85 },
    { name: '木', value: 40 },
    { name: '水', value: 20 },
    { name: '火', value: 75 },
    { name: '土', value: 45 },
  ];

  const maxValue = 100;

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.headerContent}>
          <Text style={styles.headerTitle}>八字排盘</Text>
          <View style={styles.headerIcons}>
            <MaterialCommunityIcons name="history" size={22} color="#78716c" style={{ marginRight: 16 }} />
            <MaterialCommunityIcons name="share-variant-outline" size={22} color="#78716c" />
          </View>
        </View>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 八字卡片 */}
        <View style={styles.card}>
          <View style={styles.birthRow}>
            <Text style={styles.birthLabel}>出生日期</Text>
            <Text style={styles.birthValue}>2026年02月05日 10:30</Text>
          </View>
          <View style={styles.pillarsGrid}>
            {pillars.map((pillar, index) => (
              <View key={index} style={styles.pillarItem}>
                <Text style={styles.pillarLabel}>{pillar.name}</Text>
                <Text style={[styles.pillarGanZhi, { color: pillar.color }]}>{pillar.ganZhi}</Text>
                <Text style={[styles.pillarWuxing, { color: pillar.color }]}>{pillar.wuxing}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 五行强弱 */}
        <View style={styles.card}>
          <View style={styles.sectionTitle}>
            <View style={styles.titleIndicator} />
            <Text style={styles.sectionTitleText}>五行强弱</Text>
          </View>
          
          {/* 雷达图替代 - 横向柱状图 */}
          <View style={styles.wuxingChart}>
            {wuxingData.map((item, index) => (
              <View key={index} style={styles.wuxingItem}>
                <Text style={styles.wuxingLabel}>{item.name}</Text>
                <View style={styles.progressContainer}>
                  <View style={[styles.progressBar, { width: `${item.value}%` }]} />
                </View>
                <Text style={styles.wuxingValue}>{item.value}</Text>
              </View>
            ))}
          </View>
        </View>

        {/* 每日建议 */}
        <View style={styles.adviceCard}>
          <Text style={styles.adviceText}>
            "今日庚金坐子，水气较重。宜稳守，不宜大动干戈。"
          </Text>
        </View>

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f4',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e7e5e4',
  },
  headerContent: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1917',
    letterSpacing: 2,
  },
  headerIcons: {
    flexDirection: 'row',
  },
  content: {
    flex: 1,
    padding: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  birthRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f4',
    paddingBottom: 12,
    marginBottom: 12,
  },
  birthLabel: {
    fontSize: 14,
    color: '#a8a29e',
  },
  birthValue: {
    fontSize: 14,
    fontWeight: '500',
    color: '#1c1917',
  },
  pillarsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 8,
  },
  pillarItem: {
    alignItems: 'center',
  },
  pillarLabel: {
    fontSize: 12,
    color: '#a8a29e',
    marginBottom: 4,
  },
  pillarGanZhi: {
    fontSize: 28,
    fontWeight: 'bold',
  },
  pillarWuxing: {
    fontSize: 10,
    marginTop: 2,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
  },
  titleIndicator: {
    width: 4,
    height: 16,
    backgroundColor: '#b45309',
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  wuxingChart: {
    gap: 12,
  },
  wuxingItem: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  wuxingLabel: {
    width: 24,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  progressContainer: {
    flex: 1,
    height: 12,
    backgroundColor: '#f5f5f4',
    borderRadius: 6,
    marginHorizontal: 12,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
    backgroundColor: '#b45309',
    borderRadius: 6,
  },
  wuxingValue: {
    width: 30,
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b45309',
    textAlign: 'right',
  },
  adviceCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 12,
    padding: 16,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  adviceText: {
    fontSize: 14,
    color: '#78350f',
    lineHeight: 22,
    fontStyle: 'italic',
  },
});
