import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const categories = ['八字测算', '热门经典', '入门基础', '进阶提升', '名家解惑'];

const courses = [
  {
    id: 1,
    title: '《周易》基础入门详解',
    teacher: '陈国兴 教授',
    students: '1.2万人在学',
    price: '免费',
    isFree: true,
    image: 'https://modao.cc/agent-py/media/generated_images/2026-02-05/6c5ea08b7cc94ff6b5684686cf0f106c.jpg',
  },
  {
    id: 2,
    title: '梅花易数：实战解析',
    teacher: '自得居士',
    students: '4852人在学',
    price: '¥198',
    isFree: false,
    image: 'https://modao.cc/agent-py/media/generated_images/2026-02-05/8a1eaea7a429443987c13fdf07cb63eb.jpg',
  },
  {
    id: 3,
    title: '六爻预测：精讲班',
    teacher: '玄机道人',
    students: '3200人在学',
    price: '¥298',
    isFree: false,
    image: 'https://modao.cc/agent-py/media/generated_images/2026-02-05/6c5ea08b7cc94ff6b5684686cf0f106c.jpg',
  },
  {
    id: 4,
    title: '奇门遁甲入门',
    teacher: '天机子',
    students: '8560人在学',
    price: '¥168',
    isFree: false,
    image: 'https://modao.cc/agent-py/media/generated_images/2026-02-05/8a1eaea7a429443987c13fdf07cb63eb.jpg',
  },
];

export default function XueyiPage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>深度学易</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 分类标签 */}
        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.categoryScroll}
          contentContainerStyle={styles.categoryContainer}
        >
          {categories.map((category, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.categoryTag,
                index === 1 && styles.categoryTagActive,
              ]}
            >
              <Text
                style={[
                  styles.categoryText,
                  index === 1 && styles.categoryTextActive,
                ]}
              >
                {category}
              </Text>
            </TouchableOpacity>
          ))}
        </ScrollView>

        {/* 课程列表 */}
        <View style={styles.courseList}>
          {courses.map((course) => (
            <TouchableOpacity key={course.id} style={styles.courseCard}>
              <Image
                source={{ uri: course.image }}
                style={styles.courseImage}
              />
              <View style={styles.courseInfo}>
                <View style={styles.courseTextContainer}>
                  <Text style={styles.courseTitle} numberOfLines={1}>
                    {course.title}
                  </Text>
                  <Text style={styles.courseTeacher}>{course.teacher}</Text>
                </View>
                <View style={styles.courseFooter}>
                  <Text style={styles.courseStudents}>{course.students}</Text>
                  <Text
                    style={[
                      styles.coursePrice,
                      course.isFree && styles.coursePriceFree,
                    ]}
                  >
                    {course.price}
                  </Text>
                </View>
              </View>
            </TouchableOpacity>
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
  },
  categoryScroll: {
    paddingHorizontal: 16,
    paddingVertical: 12,
  },
  categoryContainer: {
    gap: 10,
    flexDirection: 'row',
  },
  categoryTag: {
    paddingHorizontal: 16,
    paddingVertical: 8,
    backgroundColor: '#fff',
    borderRadius: 20,
    borderWidth: 1,
    borderColor: '#e7e5e4',
  },
  categoryTagActive: {
    backgroundColor: '#b45309',
    borderColor: '#b45309',
  },
  categoryText: {
    fontSize: 14,
    color: '#78716c',
    fontWeight: '500',
  },
  categoryTextActive: {
    color: '#fff',
  },
  courseList: {
    padding: 16,
    gap: 16,
  },
  courseCard: {
    backgroundColor: '#fff',
    borderRadius: 16,
    padding: 12,
    flexDirection: 'row',
    gap: 12,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  courseImage: {
    width: 80,
    height: 96,
    borderRadius: 8,
    backgroundColor: '#f5f5f4',
  },
  courseInfo: {
    flex: 1,
    justifyContent: 'space-between',
    paddingVertical: 4,
  },
  courseTextContainer: {
    gap: 4,
  },
  courseTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  courseTeacher: {
    fontSize: 12,
    color: '#a8a29e',
  },
  courseFooter: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  courseStudents: {
    fontSize: 10,
    color: '#b45309',
    backgroundColor: '#fef3c7',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 8,
    overflow: 'hidden',
  },
  coursePrice: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#b45309',
  },
  coursePriceFree: {
    color: '#16a34a',
  },
});
