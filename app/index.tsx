import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Pressable, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

interface PillarsData {
  nian: { ganZhi: string; wuXing: string };
  yue: { ganZhi: string; wuXing: string };
  ri: { ganZhi: string; wuXing: string };
  shi: { ganZhi: string; wuXing: string };
}

interface WuxingData {
  name: string;
  value: number;
  color: string;
}

export default function BaziPage() {
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [showResults, setShowResults] = useState(false);
  const [birthDate] = useState('2026年02月05日');
  const [birthTime] = useState('子时 (23:00 - 01:00)');

  const pillars: PillarsData = {
    nian: { ganZhi: '丙午', wuXing: '火火' },
    yue: { ganZhi: '庚寅', wuXing: '金木' },
    ri: { ganZhi: '庚申', wuXing: '金金' },
    shi: { ganZhi: '丙子', wuXing: '水火' },
  };

  const wuxingData: WuxingData[] = [
    { name: '金', value: 85, color: '#d97706' },
    { name: '木', value: 40, color: '#16a34a' },
    { name: '水', value: 20, color: '#2563eb' },
    { name: '火', value: 65, color: '#dc2626' },
    { name: '土', value: 30, color: '#92400e' },
  ];

  const maxValue = 100;

  const handleCalculate = () => {
    setShowResults(true);
  };

  const renderWuxingRadar = () => {
    const size = 160;
    const center = size / 2;
    const maxRadius = size / 2 - 20;
    
    return (
      <View style={styles.radarContainer}>
        <View style={[styles.radarChart, { width: size, height: size }]}>
          {/* 背景圆环 */}
          {[1, 0.75, 0.5, 0.25].map((scale, i) => (
            <View
              key={i}
              style={{
                position: 'absolute',
                width: maxRadius * scale * 2,
                height: maxRadius * scale * 2,
                borderRadius: maxRadius * scale,
                borderWidth: 1,
                borderColor: 'rgba(99, 102, 241, 0.1)',
                left: (size - maxRadius * scale * 2) / 2,
                top: (size - maxRadius * scale * 2) / 2,
              }}
            />
          ))}
          
          {/* 五边形数据区域 */}
          <View style={[styles.radarShape, { width: size, height: size, position: 'absolute' }]}>
            {wuxingData.map((item, index) => {
              const angle = (index * 72 - 90) * (Math.PI / 180);
              const radius = (item.value / maxValue) * maxRadius;
              const x = center + radius * Math.cos(angle);
              const y = center + radius * Math.sin(angle);
              return (
                <View
                  key={index}
                  style={{
                    position: 'absolute',
                    width: 8,
                    height: 8,
                    borderRadius: 4,
                    backgroundColor: item.color,
                    left: x - 4,
                    top: y - 4,
                  }}
                />
              );
            })}
          </View>
          
          {/* 五行标签 */}
          {wuxingData.map((item, index) => {
            const angle = (index * 72 - 90) * (Math.PI / 180);
            const labelRadius = maxRadius + 16;
            const x = center + labelRadius * Math.cos(angle);
            const y = center + labelRadius * Math.sin(angle);
            return (
              <Text
                key={index}
                style={[
                  styles.radarLabel,
                  {
                    left: x - 10,
                    top: y - 8,
                    color: item.color,
                  },
                ]}
              >
                {item.name}
              </Text>
            );
          })}
        </View>
        <Text style={styles.chartTitle}>五行能量分布</Text>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.headerBtn}>
          <Ionicons name="arrow-back" size={24} color="#1c1917" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>八字精批</Text>
        <TouchableOpacity style={styles.headerBtn}>
          <Ionicons name="share-outline" size={24} color="#1c1917" />
        </TouchableOpacity>
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 输入区域 */}
        {!showResults && (
          <View style={styles.inputSection}>
            {/* 个人信息录入卡片 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="calendar-outline" size={20} color="#6366f1" />
                <Text style={styles.cardTitle}>个人信息录入</Text>
              </View>
              
              {/* 性别选择 */}
              <View style={styles.genderContainer}>
                <Pressable
                  style={[
                    styles.genderBtn,
                    gender === 'male' && styles.genderBtnActive,
                    gender === 'male' && { borderColor: '#6366f1', backgroundColor: '#eef2ff' },
                  ]}
                  onPress={() => setGender('male')}
                >
                  <Ionicons 
                    name="male" 
                    size={18} 
                    color={gender === 'male' ? '#6366f1' : '#78716c'} 
                  />
                  <Text style={[
                    styles.genderText,
                    gender === 'male' && { color: '#6366f1' }
                  ]}>
                    乾造 (男)
                  </Text>
                </Pressable>
                
                <Pressable
                  style={[
                    styles.genderBtn,
                    gender === 'female' && styles.genderBtnActive,
                    gender === 'female' && { borderColor: '#f43f5e', backgroundColor: '#fff1f2' },
                  ]}
                  onPress={() => setGender('female')}
                >
                  <Ionicons 
                    name="female" 
                    size={18} 
                    color={gender === 'female' ? '#f43f5e' : '#78716c'} 
                  />
                  <Text style={[
                    styles.genderText,
                    gender === 'female' && { color: '#f43f5e' }
                  ]}>
                    坤造 (女)
                  </Text>
                </Pressable>
              </View>

              {/* 日期时间选择 */}
              <View style={styles.inputGroup}>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputText}>{birthDate}</Text>
                  <Ionicons name="calendar-outline" size={20} color="#a8a29e" />
                </View>
                <View style={styles.inputWrapper}>
                  <Text style={styles.inputText}>{birthTime}</Text>
                  <Ionicons name="time-outline" size={20} color="#a8a29e" />
                </View>
              </View>

              {/* 测算按钮 */}
              <TouchableOpacity style={styles.calculateBtn} onPress={handleCalculate}>
                <Text style={styles.calculateBtnText}>开始遣支测算</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        {/* 结果展示区域 */}
        {showResults && (
          <View style={styles.resultsSection}>
            {/* 先天命盘布局 */}
            <View style={styles.card}>
              <View style={styles.cardHeaderRow}>
                <View style={styles.sectionTitle}>
                  <View style={styles.titleIndicator} />
                  <Text style={styles.sectionTitleText}>先天命盘布局</Text>
                </View>
                <Text style={styles.resultDate}>{birthDate} 23时</Text>
              </View>
              
              {/* 四柱展示 */}
              <View style={styles.pillarsGrid}>
                <View style={styles.pillarItem}>
                  <Text style={styles.pillarLabel}>年柱</Text>
                  <Text style={[styles.pillarGanZhi, { color: '#dc2626' }]}>{pillars.nian.ganZhi}</Text>
                </View>
                <View style={styles.pillarItem}>
                  <Text style={styles.pillarLabel}>月柱</Text>
                  <Text style={[styles.pillarGanZhi, { color: '#16a34a' }]}>{pillars.yue.ganZhi}</Text>
                </View>
                <View style={[styles.pillarItem, styles.pillarItemActive]}>
                  <Text style={[styles.pillarLabel, { color: '#6366f1' }]}>日主</Text>
                  <Text style={[styles.pillarGanZhi, { color: '#6366f1' }]}>{pillars.ri.ganZhi}</Text>
                </View>
                <View style={styles.pillarItem}>
                  <Text style={styles.pillarLabel}>时柱</Text>
                  <Text style={[styles.pillarGanZhi, { color: '#0891b2' }]}>{pillars.shi.ganZhi}</Text>
                </View>
              </View>

              {/* 五行雷达图 */}
              {renderWuxingRadar()}
            </View>

            {/* 核心格局分析 */}
            <View style={styles.darkCard}>
              <View style={styles.darkCardHeader}>
                <Ionicons name="analytics-outline" size={20} color="#fff" />
                <Text style={styles.darkCardTitle}>核心格局分析</Text>
              </View>
              
              <View style={styles.analysisItem}>
                <Text style={styles.analysisLabel}>日主能量</Text>
                <Text style={styles.analysisHighlight}>身强</Text>
                <Text style={styles.analysisDesc}>
                  天干庚金生于寅月，得月令之助，地支申金强根支持。
                </Text>
              </View>
              
              <View style={styles.analysisItem}>
                <Text style={styles.analysisLabel}>格神局象</Text>
                <Text style={[styles.analysisHighlight, { color: '#c7d2fe' }]}>正官格</Text>
                <Text style={styles.analysisDesc}>
                  格局高远，天生具备领导力与责任感，适合考取功名。
                </Text>
              </View>
            </View>

            {/* 人生领域 */}
            <View style={styles.domainGrid}>
              <View style={styles.domainCard}>
                <View style={[styles.domainIcon, { backgroundColor: '#dcfce7' }]}>
                  <Ionicons name="cash-outline" size={22} color="#16a34a" />
                </View>
                <Text style={styles.domainTitle}>财运财富</Text>
                <Text style={styles.domainDesc}>正财稳固，偏财隐约，晚年财丰。</Text>
              </View>
              
              <View style={styles.domainCard}>
                <View style={[styles.domainIcon, { backgroundColor: '#ffe4e6' }]}>
                  <Ionicons name="heart-outline" size={22} color="#f43f5e" />
                </View>
                <Text style={styles.domainTitle}>婚姻感情</Text>
                <Text style={styles.domainDesc}>配偶宫坐禄，伴侣能干，感情和谐。</Text>
              </View>
            </View>

            {/* 十年大运 */}
            <View style={styles.card}>
              <View style={styles.cardHeader}>
                <Ionicons name="bar-chart-outline" size={20} color="#f59e0b" />
                <Text style={styles.cardTitle}>2026-2035 十年大运</Text>
              </View>
              
              <View style={styles.daYunItem}>
                <View style={styles.daYunLeft}>
                  <Text style={styles.daYunTitle}>丁卯大运</Text>
                  <Text style={styles.daYunDate}>2026年 - 2035年</Text>
                </View>
                <View style={styles.daYunBadge}>
                  <Text style={styles.daYunBadgeText}>转折机遇期</Text>
                </View>
              </View>
              
              <View style={styles.daYunQuote}>
                <Text style={styles.daYunQuoteText}>
                  "此运木火相生，利于官场晋升，职场表现亮眼，但需注意心脏与肝脏负荷。"
                </Text>
              </View>
            </View>

            {/* 神煞与建议 */}
            <View style={styles.shenshaCard}>
              <View style={styles.cardHeader}>
                <Ionicons name="star-outline" size={20} color="#6366f1" />
                <Text style={styles.cardTitle}>神煞与建议</Text>
              </View>
              <View style={styles.shenshaTags}>
                <View style={[styles.shenshaTag, { borderColor: '#c7d2fe', backgroundColor: '#eef2ff' }]}>
                  <Text style={[styles.shenshaTagText, { color: '#6366f1' }]}>天乙贵人</Text>
                </View>
                <View style={[styles.shenshaTag, { borderColor: '#fef3c7', backgroundColor: '#fffbeb' }]}>
                  <Text style={[styles.shenshaTagText, { color: '#d97706' }]}>文昌入命</Text>
                </View>
                <View style={[styles.shenshaTag, { borderColor: '#ffe4e6', backgroundColor: '#fff1f2' }]}>
                  <Text style={[styles.shenshaTagText, { color: '#f43f5e' }]}>红鸾星动</Text>
                </View>
              </View>
            </View>

            {/* 操作按钮 */}
            <View style={styles.actionButtons}>
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="download-outline" size={22} color="#78716c" />
                <Text style={styles.actionBtnText}>保存记录</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="mail-outline" size={22} color="#78716c" />
                <Text style={styles.actionBtnText}>发至邮箱</Text>
              </TouchableOpacity>
              
              <TouchableOpacity style={styles.actionBtn}>
                <Ionicons name="share-social-outline" size={22} color="#78716c" />
                <Text style={styles.actionBtnText}>分享好友</Text>
              </TouchableOpacity>
            </View>
          </View>
        )}

        <View style={{ height: 100 }} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  header: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomWidth: 1,
    borderBottomColor: '#f1f5f9',
  },
  headerBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1e293b',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  inputSection: {
    gap: 16,
  },
  resultsSection: {
    gap: 16,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  cardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: '600',
    color: '#1e293b',
  },
  cardHeaderRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 16,
  },
  sectionTitle: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  titleIndicator: {
    width: 3,
    height: 18,
    backgroundColor: '#6366f1',
    borderRadius: 2,
    marginRight: 8,
  },
  sectionTitleText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  resultDate: {
    fontSize: 12,
    color: '#94a3b8',
  },
  genderContainer: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  genderBtn: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    borderRadius: 12,
    borderWidth: 2,
    borderColor: '#e2e8f0',
    backgroundColor: '#fff',
    gap: 6,
  },
  genderBtnActive: {
    borderWidth: 2,
  },
  genderText: {
    fontSize: 14,
    fontWeight: '500',
    color: '#78716c',
  },
  inputGroup: {
    gap: 12,
    marginBottom: 16,
  },
  inputWrapper: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 14,
  },
  inputText: {
    fontSize: 15,
    fontWeight: '500',
    color: '#1e293b',
  },
  calculateBtn: {
    backgroundColor: '#6366f1',
    borderRadius: 12,
    paddingVertical: 16,
    alignItems: 'center',
    shadowColor: '#6366f1',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.3,
    shadowRadius: 8,
    elevation: 4,
  },
  calculateBtnText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
    letterSpacing: 2,
  },
  pillarsGrid: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 20,
  },
  pillarItem: {
    alignItems: 'center',
    backgroundColor: '#f8fafc',
    paddingVertical: 12,
    paddingHorizontal: 8,
    borderRadius: 10,
    minWidth: 70,
  },
  pillarItemActive: {
    borderWidth: 2,
    borderColor: '#c7d2fe',
    backgroundColor: '#eef2ff',
  },
  pillarLabel: {
    fontSize: 12,
    color: '#94a3b8',
    marginBottom: 4,
  },
  pillarGanZhi: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  radarContainer: {
    alignItems: 'center',
    paddingVertical: 8,
  },
  radarChart: {
    position: 'relative',
    justifyContent: 'center',
    alignItems: 'center',
  },
  radarShape: {
    justifyContent: 'center',
    alignItems: 'center',
  },
  radarLabel: {
    position: 'absolute',
    fontSize: 14,
    fontWeight: 'bold',
  },
  chartTitle: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 8,
  },
  darkCard: {
    backgroundColor: '#1e3a5f',
    borderRadius: 16,
    padding: 16,
  },
  darkCardHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 16,
    gap: 8,
  },
  darkCardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  analysisItem: {
    backgroundColor: 'rgba(255, 255, 255, 0.1)',
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
    borderWidth: 1,
    borderColor: 'rgba(255, 255, 255, 0.2)',
  },
  analysisLabel: {
    fontSize: 13,
    color: 'rgba(255, 255, 255, 0.7)',
    marginBottom: 4,
  },
  analysisHighlight: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbbf24',
    marginBottom: 6,
  },
  analysisDesc: {
    fontSize: 12,
    color: 'rgba(255, 255, 255, 0.6)',
    lineHeight: 18,
  },
  domainGrid: {
    flexDirection: 'row',
    gap: 12,
  },
  domainCard: {
    flex: 1,
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  domainIcon: {
    width: 48,
    height: 48,
    borderRadius: 24,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 12,
  },
  domainTitle: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1e293b',
    marginBottom: 6,
  },
  domainDesc: {
    fontSize: 12,
    color: '#94a3b8',
    textAlign: 'center',
    lineHeight: 18,
  },
  daYunItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderLeftWidth: 4,
    borderLeftColor: '#f59e0b',
    paddingLeft: 12,
    marginBottom: 12,
  },
  daYunLeft: {},
  daYunTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1e293b',
  },
  daYunDate: {
    fontSize: 12,
    color: '#94a3b8',
    marginTop: 2,
  },
  daYunBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 12,
  },
  daYunBadgeText: {
    fontSize: 10,
    fontWeight: 'bold',
    color: '#b45309',
  },
  daYunQuote: {
    backgroundColor: '#f8fafc',
    padding: 14,
    borderRadius: 12,
  },
  daYunQuoteText: {
    fontSize: 13,
    color: '#64748b',
    lineHeight: 20,
    fontStyle: 'italic',
  },
  shenshaCard: {
    backgroundColor: '#f1f5f9',
    borderRadius: 16,
    padding: 16,
    borderWidth: 1,
    borderColor: '#e2e8f0',
    borderStyle: 'dashed',
  },
  shenshaTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
    marginTop: 8,
  },
  shenshaTag: {
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 20,
    borderWidth: 1,
  },
  shenshaTagText: {
    fontSize: 13,
    fontWeight: '500',
  },
  actionButtons: {
    flexDirection: 'row',
    gap: 10,
  },
  actionBtn: {
    flex: 1,
    flexDirection: 'column',
    alignItems: 'center',
    paddingVertical: 14,
    backgroundColor: '#fff',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e2e8f0',
  },
  actionBtnText: {
    fontSize: 11,
    color: '#78716c',
    marginTop: 4,
  },
});
