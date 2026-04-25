import { View, Text, StyleSheet, ScrollView, TextInput, TouchableOpacity } from 'react-native';
import { useState } from 'react';

const years = ['2026年', '2025年', '2024年', '2023年', '2022年', '2021年'];
const months = ['01月', '02月', '03月', '04月', '05月', '06月', '07月', '08月', '09月', '10月', '11月', '12月'];
const days = Array.from({ length: 31 }, (_, i) => `${String(i + 1).padStart(2, '0')}日`);
const hours = Array.from({ length: 24 }, (_, i) => `${String(i).padStart(2, '0')}时`);
const minutes = ['00分', '30分'];

const suggestedNames = [
  { name: '承泽', meaning: '瑞气承传，恩泽深厚', match: '98%', price: '免费' },
  { name: '煜祺', meaning: '光辉灿烂，吉祥如意', match: '95%', price: '免费' },
  { name: '梓涵', meaning: '木之正直，内涵丰富', match: '92%', price: '免费' },
  { name: '晨曦', meaning: '清晨之光，希望初现', match: '89%', price: '免费' },
];

export default function QumingPage() {
  const [surname, setSurname] = useState('');
  const [originalName, setOriginalName] = useState('');
  const [gender, setGender] = useState<'male' | 'female'>('male');
  const [selectedYear, setSelectedYear] = useState(0);
  const [selectedMonth, setSelectedMonth] = useState(1);
  const [selectedDay, setSelectedDay] = useState(0);
  const [selectedHour, setSelectedHour] = useState(10);
  const [selectedMinute, setSelectedMinute] = useState(0);

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>智能取名</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 输入表单 */}
        <View style={styles.formCard}>
          {/* 姓氏 & 原名 */}
          <View style={styles.row}>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>姓氏 <Text style={styles.labelSub}>(可选)</Text></Text>
              <TextInput
                style={styles.input}
                placeholder="Surname"
                placeholderTextColor="#a8a29e"
                value={surname}
                onChangeText={setSurname}
              />
            </View>
            <View style={styles.inputGroup}>
              <Text style={styles.label}>原名 <Text style={styles.labelSub}>(Original)</Text></Text>
              <TextInput
                style={styles.input}
                placeholder="e.g. David / 张三"
                placeholderTextColor="#a8a29e"
                value={originalName}
                onChangeText={setOriginalName}
              />
            </View>
          </View>

          {/* 出生时间 */}
          <View style={styles.inputGroup}>
            <Text style={styles.label}>出生时间 (Birth Date & Time)</Text>
            <View style={styles.dateSelectors}>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{years[selectedYear]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{months[selectedMonth]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{days[selectedDay]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{hours[selectedHour]}</Text>
              </TouchableOpacity>
              <TouchableOpacity style={styles.selector}>
                <Text style={styles.selectorText}>{minutes[selectedMinute]}</Text>
              </TouchableOpacity>
            </View>
          </View>

          {/* 性别选择 */}
          <View style={styles.genderRow}>
            <TouchableOpacity
              style={[styles.genderBtn, gender === 'male' && styles.genderBtnActive]}
              onPress={() => setGender('male')}
            >
              <Text style={[styles.genderBtnText, gender === 'male' && styles.genderBtnTextActive]}>
                男孩名 (Male)
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.genderBtn, gender === 'female' && styles.genderBtnActiveFemale]}
              onPress={() => setGender('female')}
            >
              <Text style={[styles.genderBtnText, gender === 'female' && styles.genderBtnTextActive]}>
                女孩名 (Female)
              </Text>
            </TouchableOpacity>
          </View>

          {/* 生成按钮 */}
          <TouchableOpacity style={styles.generateBtn}>
            <Text style={styles.generateBtnText}>智能测选 Generate</Text>
          </TouchableOpacity>
        </View>

        {/* 推荐名字 */}
        <Text style={styles.sectionTitle}>推荐名字</Text>
        <View style={styles.namesGrid}>
          {suggestedNames.map((item, index) => (
            <View key={index} style={styles.nameCard}>
              <Text style={styles.nameText}>{item.name}</Text>
              <Text style={styles.nameMeaning}>{item.meaning}</Text>
              <View style={styles.matchBadge}>
                <Text style={styles.matchText}>契合度 {item.match}</Text>
              </View>
            </View>
          ))}
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
  headerTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#1c1917',
    letterSpacing: 2,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  formCard: {
    backgroundColor: '#fff',
    borderRadius: 20,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  row: {
    flexDirection: 'row',
    gap: 12,
    marginBottom: 16,
  },
  inputGroup: {
    flex: 1,
  },
  label: {
    fontSize: 12,
    color: '#a8a29e',
    fontWeight: 'bold',
    textTransform: 'uppercase',
    letterSpacing: 1,
    marginBottom: 8,
  },
  labelSub: {
    fontSize: 10,
    fontWeight: 'normal',
    opacity: 0.6,
  },
  input: {
    backgroundColor: '#f5f5f4',
    borderRadius: 12,
    paddingHorizontal: 16,
    paddingVertical: 12,
    fontSize: 14,
    color: '#1c1917',
  },
  dateSelectors: {
    flexDirection: 'row',
    gap: 8,
    backgroundColor: '#f5f5f4',
    borderRadius: 12,
    padding: 8,
  },
  selector: {
    flex: 1,
    alignItems: 'center',
    paddingVertical: 8,
  },
  selectorText: {
    fontSize: 14,
    color: '#1c1917',
  },
  genderRow: {
    flexDirection: 'row',
    gap: 12,
    marginTop: 16,
    marginBottom: 16,
  },
  genderBtn: {
    flex: 1,
    paddingVertical: 14,
    borderRadius: 12,
    backgroundColor: '#f5f5f4',
    alignItems: 'center',
  },
  genderBtnActive: {
    backgroundColor: '#b45309',
  },
  genderBtnActiveFemale: {
    backgroundColor: '#7c3aed',
  },
  genderBtnText: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#78716c',
  },
  genderBtnTextActive: {
    color: '#fff',
  },
  generateBtn: {
    backgroundColor: '#1c1917',
    paddingVertical: 16,
    borderRadius: 16,
    alignItems: 'center',
  },
  generateBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fef3c7',
    letterSpacing: 4,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#1c1917',
    marginBottom: 12,
  },
  namesGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  nameCard: {
    width: '47%',
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
  nameText: {
    fontSize: 28,
    color: '#1c1917',
    marginBottom: 4,
  },
  nameMeaning: {
    fontSize: 11,
    color: '#a8a29e',
    fontStyle: 'italic',
    marginBottom: 8,
    textAlign: 'center',
  },
  matchBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 12,
  },
  matchText: {
    fontSize: 10,
    color: '#b45309',
    fontWeight: '600',
  },
});
