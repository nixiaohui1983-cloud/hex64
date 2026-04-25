import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { useState } from 'react';

export default function BuguaPage() {
  const [isShaking, setIsShaking] = useState(false);
  const [step, setStep] = useState(0);

  const handleShake = () => {
    if (isShaking) return;
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
      if (step < 2) {
        setStep(step + 1);
      }
    }, 1500);
  };

  const steps = [
    { dots: [false, false, false] },
    { dots: [false, false, false] },
    { dots: [false, false, true] },
  ];

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
          <MaterialCommunityIcons
            name="yin-yang"
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
            <MaterialCommunityIcons
              name="hand-wave"
              size={40}
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
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1917',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    paddingVertical: 40,
    alignItems: 'center',
  },
  yinYangContainer: {
    position: 'absolute',
    top: 80,
    left: 0,
    right: 0,
    alignItems: 'center',
    opacity: 0.08,
  },
  yinYangBg: {
    transform: [{ rotate: '45deg' }],
  },
  textContainer: {
    alignItems: 'center',
    paddingHorizontal: 40,
    marginBottom: 40,
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
});
