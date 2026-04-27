import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Dimensions } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { useState } from 'react';

const { width: SCREEN_WIDTH } = Dimensions.get('window');

// 卦爻类型：1=阳爻 0=阴爻 2=动爻
type YaoType = 0 | 1 | 2;

interface GuaYao {
  type: YaoType; // 1: 阳爻, 0: 阴爻, 2: 动爻(阴爻动)
}

interface GuaData {
  name: string;
  gua: GuaYao[]; // 从上到下6爻
}

// 本卦：火地晋 (上卦离火，下卦坤地)
// 卦爻从上到下：上六、五四、三三、二、初九
const benGua: GuaData = {
  name: '火地晋',
  gua: [
    { type: 0 }, // 上六 - 阴
    { type: 0 }, // 六五 - 阴
    { type: 1 }, // 九四 - 阳
    { type: 2 }, // 九三 - 阳动（变为阴）
    { type: 0 }, // 六二 - 阴
    { type: 0 }, // 初六 - 阴
  ],
};

// 变卦：火风鼎 (上卦离火，下卦巽风)
const bianGua: GuaData = {
  name: '火风鼎',
  gua: [
    { type: 0 }, // 上九 - 阴
    { type: 0 }, // 六五 - 阴
    { type: 1 }, // 九四 - 阳
    { type: 1 }, // 九三 - 阳（动爻变阳）
    { type: 1 }, // 九二 - 阳
    { type: 0 }, // 初六 - 阴
  ],
};

const liuQinData = [
  { name: '妻财', value: 85, color: '#d97706' },
  { name: '子孙', value: 70, color: '#16a34a' },
  { name: '官鬼', value: 40, color: '#dc2626' },
  { name: '父母', value: 60, color: '#78716c' },
  { name: '兄弟', value: 30, color: '#6366f1' },
];

export default function BuguaPage() {
  const [isShaking, setIsShaking] = useState(false);
  const [step, setStep] = useState(0);
  const [showResult, setShowResult] = useState(false);

  const handleShake = () => {
    if (isShaking || showResult) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      if (step < 2) {
        setStep(step + 1);
      } else {
        // 完成三次摇卦，显示结果
        setShowResult(true);
      }
    }, 1500);
  };

  const handleBack = () => {
    setShowResult(false);
    setStep(0);
  };

  const steps = [
    { dots: [false, false, false] },
    { dots: [false, false, false] },
    { dots: [false, false, true] },
  ];

  // 绘制卦爻
  const renderYao = (yao: GuaYao, index: number, isLeft: boolean = true) => {
    const isYang = yao.type === 1;
    const isChange = yao.type === 2;
    
    return (
      <View 
        key={`${isLeft ? 'left' : 'right'}-${index}`} 
        style={[styles.yaoContainer, isLeft ? {} : styles.yaoContainerRight]}
      >
        {isYang ? (
          <View style={[styles.yaoYang, isChange && styles.yaoChange]} />
        ) : (
          <View style={[styles.yaoYin, isChange && styles.yaoYinChange]}>
            <View style={styles.yaoYinHalf} />
            <View style={styles.yaoYinHalf} />
          </View>
        )}
      </View>
    );
  };

  // 绘制雷达图
  const renderRadarChart = () => {
    const size = 160;
    const center = size / 2;
    const maxRadius = size / 2 - 25;
    const sides = liuQinData.length;
    const angleStep = (2 * Math.PI) / sides;

    // 计算各点坐标
    const points = liuQinData.map((item, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const radius = (item.value / 100) * maxRadius;
      return {
        x: center + radius * Math.cos(angle),
        y: center + radius * Math.sin(angle),
      };
    });

    // 背景圆环
    const rings = [1, 0.75, 0.5, 0.25].map((scale, i) => (
      <View
        key={i}
        style={[
          styles.radarRing,
          {
            width: maxRadius * scale * 2,
            height: maxRadius * scale * 2,
            borderRadius: maxRadius * scale,
            left: center - maxRadius * scale,
            top: center - maxRadius * scale,
          },
        ]}
      />
    ));

    // 数据区域点
    const dataPoints = points.map((point, index) => (
      <View
        key={`point-${index}`}
        style={[
          styles.radarPoint,
          {
            left: point.x - 5,
            top: point.y - 5,
            backgroundColor: liuQinData[index].color,
          },
        ]}
      />
    ));

    // 标签
    const labels = liuQinData.map((item, index) => {
      const angle = angleStep * index - Math.PI / 2;
      const labelRadius = maxRadius + 18;
      return (
        <Text
          key={`label-${index}`}
          style={[
            styles.radarLabel,
            {
              left: center + labelRadius * Math.cos(angle) - 20,
              top: center + labelRadius * Math.sin(angle) - 8,
              color: item.color,
            },
          ]}
        >
          {item.name}
        </Text>
      );
    });

    return (
      <View style={[styles.radarContainer, { width: size, height: size }]}>
        {rings}
        {dataPoints}
        {labels}
      </View>
    );
  };

  // 结果页面
  if (showResult) {
    return (
      <View style={styles.container}>
        {/* Header */}
        <View style={styles.headerDark}>
          <TouchableOpacity style={styles.headerBtn} onPress={handleBack}>
            <Ionicons name="arrow-back" size={24} color="#fafaf9" />
          </TouchableOpacity>
          <Text style={styles.headerTitleDark}>卦象分析报告</Text>
          <TouchableOpacity style={styles.headerBtn}>
            <Ionicons name="share-outline" size={24} color="#fafaf9" />
          </TouchableOpacity>
        </View>

        {/* Content */}
        <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
          {/* 基础信息卡片 */}
          <View style={styles.infoCard}>
            <View style={styles.infoRow}>
              <View style={styles.questionTag}>
                <Text style={styles.questionTagText}>求测事项：投资吉凶</Text>
              </View>
              <Text style={styles.infoDate}>2026年02月05日</Text>
            </View>
            <View style={styles.infoDetails}>
              <View style={styles.infoItem}>
                <Ionicons name="person-outline" size={16} color="#a8a29e" />
                <Text style={styles.infoLabel}>求测人：</Text>
                <Text style={styles.infoValue}>张先生</Text>
              </View>
              <View style={styles.infoItem}>
                <Ionicons name="calendar-outline" size={16} color="#a8a29e" />
                <Text style={styles.infoLabel}>干支：</Text>
                <Text style={styles.infoValue}>丙午年 庚寅月</Text>
              </View>
            </View>
          </View>

          {/* 卦盘展示区 */}
          <View style={styles.guaBoard}>
            <View style={styles.guaBoardHeader}>
              <View style={styles.guaTitle}>
                <Text style={styles.guaTitleLabel}>本卦</Text>
                <Text style={styles.guaTitleName}>{benGua.name}</Text>
              </View>
              <Ionicons name="swap-horizontal" size={24} color="#57534e" />
              <View style={styles.guaTitle}>
                <Text style={styles.guaTitleLabel}>变卦</Text>
                <Text style={[styles.guaTitleName, { color: '#d6d3d1' }]}>{bianGua.name}</Text>
              </View>
            </View>

            {/* 卦爻展示 */}
            <View style={styles.guaYaoContainer}>
              {/* 本卦 */}
              <View style={styles.guaYaoLeft}>
                {benGua.gua.map((yao, index) => renderYao(yao, index, true))}
              </View>
              {/* 变卦 */}
              <View style={styles.guaYaoRight}>
                {bianGua.gua.map((yao, index) => renderYao(yao, index, false))}
              </View>
            </View>

            <Text style={styles.guaFooter}>世爻在四 · 应爻在初</Text>
          </View>

          {/* 用神旺衰分析 */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <View style={styles.sectionIndicator} />
              <Text style={styles.sectionTitle}>用神旺衰分析</Text>
            </View>
            {renderRadarChart()}
            <Text style={styles.analysisNote}>
              <Text style={styles.noteHighlight}>用神（妻财）：</Text>
              处于旺相状态，月令生扶，财源根基稳固。
            </Text>
          </View>

          {/* 卦辞总断 */}
          <View style={styles.guaCiCard}>
            <View style={styles.guaCiHeader}>
              <Ionicons name="document-text-outline" size={20} color="#d97706" />
              <Text style={styles.guaCiTitle}>卦辞总断</Text>
            </View>
            <Text style={styles.guaCiQuote}>"晋：康侯用锡马蕃庶，昼日三接。"</Text>
            <View style={styles.guaCiExplanation}>
              <Text style={styles.guaCiText}>
                此卦象征阳光普照大地，万物进展迅速。求测投资主事业处于上升期，多得贵人照拂，利于大规模扩张。
              </Text>
            </View>
          </View>

          {/* 动爻影响 */}
          <View style={styles.card}>
            <View style={styles.sectionHeader}>
              <Ionicons name="star-outline" size={20} color="#6366f1" />
              <Text style={styles.sectionTitle}>动爻影响</Text>
            </View>
            
            <View style={styles.dongYaoItem}>
              <Text style={styles.dongYaoTitle}>二爻动：晋如愁如</Text>
              <Text style={styles.dongYaoDesc}>
                提示在前进初期会有短暂的资金周转压力，心生忧虑，但坚守正道可化险为夷。
              </Text>
            </View>

            <View style={styles.yingQiContainer}>
              <Text style={styles.yingQiTitle}>应期预判</Text>
              <View style={styles.yingQiGrid}>
                <View style={styles.yingQiBox}>
                  <Text style={styles.yingQiLabel}>最佳时期</Text>
                  <Text style={styles.yingQiValue}>辰月 / 辰日</Text>
                </View>
                <View style={styles.yingQiDivider} />
                <View style={styles.yingQiBox}>
                  <Text style={styles.yingQiLabel}>避让周期</Text>
                  <Text style={styles.yingQiValue}>戌月 / 戌日</Text>
                </View>
              </View>
            </View>
          </View>

          {/* 专家建议 */}
          <View style={styles.adviceCard}>
            <View style={styles.adviceHeader}>
              <Ionicons name="medal-outline" size={22} color="#fbbf24" />
              <Text style={styles.adviceTitle}>专家趋避策略</Text>
            </View>
            <View style={styles.adviceList}>
              <View style={styles.adviceItem}>
                <View style={styles.adviceBullet} />
                <Text style={styles.adviceText}>
                  建议避开与生肖属狗、属龙的人士进行直接合同签署，利于属虎贵人相助。
                </Text>
              </View>
              <View style={styles.adviceItem}>
                <View style={styles.adviceBullet} />
                <Text style={styles.adviceText}>
                  办公室东南方位可摆放常青植物以催旺子孙爻（财源）。
                </Text>
              </View>
              <View style={styles.adviceItem}>
                <View style={styles.adviceBullet} />
                <Text style={styles.adviceText}>
                  资金宜快进快出，切忌贪大求全，以免错失"昼日三接"之良机。
                </Text>
              </View>
            </View>
          </View>

          {/* 免责声明 */}
          <Text style={styles.disclaimer}>
            本报告基于《周易》六爻逻辑推演，仅供参考之用。命运受多种环境因素共同影响，预测不代表必然结果，请结合实际、科学决策。
          </Text>
        </ScrollView>
      </View>
    );
  }

  // 摇卦页面
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>周易卜卦</Text>
      </View>

      {/* Content */}
      <View style={styles.content}>
        {/* 太极背景 */}
        <View style={styles.yinYangContainer}>
          <Ionicons
            name="logo-octocat"
            size={240}
            color="#1c1917"
            style={styles.yinYangBg}
          />
        </View>

        {/* 标题和说明 */}
        <View style={styles.textContainer}>
          <Text style={styles.title}>诚心求问</Text>
          <Text style={styles.subtitle}>
            静心三秒，心中默念所求之事，摇晃手机或点击下方开始卜卦
          </Text>
        </View>

        {/* 摇卦按钮 */}
        <View style={styles.buttonContainer}>
          <TouchableOpacity
            style={[styles.shakeButton, isShaking && styles.shakeButtonActive]}
            onPress={handleShake}
            activeOpacity={0.8}
          >
            <Ionicons
              name="hand-left"
              size={48}
              color="#fbbf24"
            />
          </TouchableOpacity>

          <TouchableOpacity style={styles.startButton} onPress={handleShake}>
            <Text style={styles.startButtonText}>开始摇卦</Text>
          </TouchableOpacity>
        </View>

        {/* 进度指示器 */}
        <View style={styles.progressContainer}>
          {steps[step].dots.map((active, index) => (
            <View
              key={index}
              style={[
                styles.dot,
                active ? styles.dotActive : styles.dotInactive,
              ]}
            />
          ))}
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
  },
  // Header
  header: {
    backgroundColor: '#fff',
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 20,
    borderBottomWidth: 1,
    borderBottomColor: '#e7e5e4',
  },
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1917',
    letterSpacing: 2,
    textAlign: 'center',
  },
  headerDark: {
    backgroundColor: '#292524',
    paddingTop: 50,
    paddingBottom: 12,
    paddingHorizontal: 16,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  headerBtn: {
    width: 40,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  headerTitleDark: {
    fontSize: 18,
    fontWeight: '600',
    color: '#fafaf9',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  // 摇卦页面
  yinYangContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
    opacity: 0.06,
  },
  yinYangBg: {
    transform: [{ rotate: '45deg' }],
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 40,
    marginTop: 40,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#1c1917',
    marginBottom: 12,
  },
  subtitle: {
    fontSize: 14,
    color: '#78716c',
    textAlign: 'center',
    lineHeight: 22,
  },
  buttonContainer: {
    alignItems: 'center',
    gap: 24,
  },
  shakeButton: {
    width: 160,
    height: 160,
    borderRadius: 80,
    backgroundColor: '#1c1917',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.3,
    shadowRadius: 12,
    elevation: 8,
  },
  shakeButtonActive: {
    transform: [{ rotate: '10deg' }],
  },
  startButton: {
    paddingHorizontal: 40,
    paddingVertical: 14,
    borderRadius: 30,
    borderWidth: 2,
    borderColor: '#1c1917',
    backgroundColor: '#fff',
  },
  startButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  progressContainer: {
    flexDirection: 'row',
    gap: 8,
    marginTop: 40,
  },
  dot: {
    height: 8,
    borderRadius: 4,
  },
  dotActive: {
    width: 32,
    backgroundColor: '#b45309',
  },
  dotInactive: {
    width: 8,
    backgroundColor: '#d6d3d1',
  },
  // 结果页面样式
  infoCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 12,
  },
  questionTag: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
  },
  questionTagText: {
    fontSize: 12,
    color: '#92400e',
    fontWeight: '500',
  },
  infoDate: {
    fontSize: 11,
    color: '#a8a29e',
  },
  infoDetails: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  infoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
    flex: 1,
    minWidth: '45%',
  },
  infoLabel: {
    fontSize: 13,
    color: '#a8a29e',
  },
  infoValue: {
    fontSize: 13,
    color: '#1c1917',
    fontWeight: '500',
  },
  // 卦盘
  guaBoard: {
    backgroundColor: '#292524',
    borderRadius: 16,
    padding: 20,
    marginBottom: 16,
  },
  guaBoardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    marginBottom: 20,
  },
  guaTitle: {
    alignItems: 'center',
    width: '35%',
  },
  guaTitleLabel: {
    fontSize: 11,
    color: '#78716c',
    marginBottom: 4,
  },
  guaTitleName: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#fbbf24',
  },
  guaYaoContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  guaYaoLeft: {
    gap: 12,
  },
  guaYaoRight: {
    gap: 12,
  },
  yaoContainer: {
    width: 80,
    height: 8,
  },
  yaoContainerRight: {
    width: 80,
    height: 8,
  },
  yaoYang: {
    width: '100%',
    height: 8,
    backgroundColor: '#b45309',
    borderRadius: 4,
  },
  yaoYin: {
    width: '100%',
    height: 8,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  yaoYinHalf: {
    width: '46%',
    height: 8,
    backgroundColor: '#d97706',
    borderRadius: 4,
  },
  yaoChange: {
    borderWidth: 2,
    borderColor: '#ef4444',
  },
  yaoYinChange: {
    borderWidth: 2,
    borderColor: '#ef4444',
  },
  guaFooter: {
    fontSize: 11,
    color: '#78716c',
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 2,
  },
  // 雷达图
  radarContainer: {
    position: 'relative',
    alignSelf: 'center',
    marginVertical: 8,
  },
  radarRing: {
    position: 'absolute',
    borderWidth: 1,
    borderColor: '#e7e5e4',
  },
  radarPoint: {
    position: 'absolute',
    width: 10,
    height: 10,
    borderRadius: 5,
  },
  radarLabel: {
    position: 'absolute',
    fontSize: 11,
    fontWeight: '600',
    width: 40,
    textAlign: 'center',
  },
  // 通用卡片
  card: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  sectionHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 12,
    gap: 8,
  },
  sectionIndicator: {
    width: 4,
    height: 16,
    backgroundColor: '#d97706',
    borderRadius: 2,
  },
  sectionTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  analysisNote: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 20,
    marginTop: 8,
  },
  noteHighlight: {
    color: '#d97706',
    fontWeight: '600',
  },
  // 卦辞
  guaCiCard: {
    backgroundColor: '#fef3c7',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
    borderWidth: 1,
    borderColor: '#fde68a',
  },
  guaCiHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  guaCiTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  guaCiQuote: {
    fontSize: 15,
    color: '#78350f',
    fontWeight: '500',
    marginBottom: 12,
    fontStyle: 'italic',
  },
  guaCiExplanation: {
    backgroundColor: 'rgba(255, 255, 255, 0.6)',
    padding: 12,
    borderRadius: 12,
  },
  guaCiText: {
    fontSize: 13,
    color: '#57534e',
    lineHeight: 20,
  },
  // 动爻
  dongYaoItem: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f4',
    paddingBottom: 12,
    marginBottom: 12,
  },
  dongYaoTitle: {
    fontSize: 13,
    fontWeight: 'bold',
    color: '#6366f1',
    marginBottom: 6,
  },
  dongYaoDesc: {
    fontSize: 12,
    color: '#64748b',
    lineHeight: 18,
  },
  yingQiContainer: {},
  yingQiTitle: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#f43f5e',
    marginBottom: 8,
  },
  yingQiGrid: {
    flexDirection: 'row',
    backgroundColor: '#f8fafc',
    borderRadius: 12,
    padding: 12,
  },
  yingQiBox: {
    flex: 1,
    alignItems: 'center',
  },
  yingQiLabel: {
    fontSize: 10,
    color: '#a8a29e',
    marginBottom: 4,
  },
  yingQiValue: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  yingQiDivider: {
    width: 1,
    backgroundColor: '#e7e5e4',
    marginHorizontal: 12,
  },
  // 专家建议
  adviceCard: {
    backgroundColor: '#292524',
    borderRadius: 16,
    padding: 16,
    marginBottom: 16,
  },
  adviceHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 8,
    marginBottom: 12,
  },
  adviceTitle: {
    fontSize: 15,
    fontWeight: 'bold',
    color: '#fff',
  },
  adviceList: {
    gap: 12,
  },
  adviceItem: {
    flexDirection: 'row',
    gap: 10,
  },
  adviceBullet: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#fbbf24',
    marginTop: 5,
  },
  adviceText: {
    flex: 1,
    fontSize: 12,
    color: '#d6d3d1',
    lineHeight: 18,
  },
  // 免责声明
  disclaimer: {
    fontSize: 10,
    color: '#a8a29e',
    textAlign: 'center',
    fontStyle: 'italic',
    lineHeight: 16,
    paddingHorizontal: 20,
    marginBottom: 20,
  },
});
