import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const menuItems = [
  { icon: 'book-open-variant', label: '阅读历史', arrow: true },
  { icon: 'star-outline', label: '我的收藏', arrow: true },
  { icon: 'cog-outline', label: '系统设置', arrow: true },
  { icon: 'help-circle-outline', label: '帮助与反馈', arrow: true },
  { icon: 'information-outline', label: '关于我们', arrow: true },
];

export default function MinePage() {
  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.headerTitle}>个人中心</Text>
      </View>

      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {/* 用户信息卡片 */}
        <View style={styles.userCard}>
          <View style={styles.userInfo}>
            <View style={styles.avatarContainer}>
              <View style={styles.avatar}>
                <MaterialCommunityIcons name="account" size={32} color="#fff" />
              </View>
            </View>
            <View style={styles.userText}>
              <Text style={styles.userName}>易友_2402</Text>
              <Text style={styles.userLevel}>潜龙在渊 · 活跃会员</Text>
            </View>
          </View>
        </View>

        {/* 数据统计 */}
        <View style={styles.statsCard}>
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statValue}>12</Text>
            <Text style={styles.statLabel}>我的测算</Text>
          </TouchableOpacity>
          <View style={styles.statDivider} />
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statValue}>5</Text>
            <Text style={styles.statLabel}>已购课程</Text>
          </TouchableOpacity>
          <View style={styles.statDivider} />
          <TouchableOpacity style={styles.statItem}>
            <Text style={styles.statValue}>86</Text>
            <Text style={styles.statLabel}>积分余额</Text>
          </TouchableOpacity>
        </View>

        {/* 菜单列表 */}
        <View style={styles.menuCard}>
          {menuItems.map((item, index) => (
            <TouchableOpacity
              key={index}
              style={[
                styles.menuItem,
                index < menuItems.length - 1 && styles.menuItemBorder,
              ]}
            >
              <View style={styles.menuLeft}>
                <MaterialCommunityIcons
                  name={item.icon}
                  size={22}
                  color="#78716c"
                  style={styles.menuIcon}
                />
                <Text style={styles.menuLabel}>{item.label}</Text>
              </View>
              {item.arrow && (
                <MaterialCommunityIcons
                  name="chevron-right"
                  size={22}
                  color="#d6d3d1"
                />
              )}
            </TouchableOpacity>
          ))}
        </View>

        {/* 会员卡片 */}
        <TouchableOpacity style={styles.vipCard}>
          <View style={styles.vipLeft}>
            <MaterialCommunityIcons name="crown" size={24} color="#fbbf24" />
            <View style={styles.vipText}>
              <Text style={styles.vipTitle}>开通会员</Text>
              <Text style={styles.vipSubtitle}>解锁全部功能</Text>
            </View>
          </View>
          <View style={styles.vipBadge}>
            <Text style={styles.vipBadgeText}>限时优惠</Text>
          </View>
        </TouchableOpacity>

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
  userCard: {
    backgroundColor: '#1c1917',
    paddingVertical: 40,
    paddingHorizontal: 20,
  },
  userInfo: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 16,
  },
  avatarContainer: {
    width: 64,
    height: 64,
    borderRadius: 32,
    borderWidth: 2,
    borderColor: 'rgba(251, 191, 36, 0.3)',
    padding: 2,
    backgroundColor: 'rgba(255,255,255,0.1)',
  },
  avatar: {
    width: '100%',
    height: '100%',
    borderRadius: 30,
    backgroundColor: '#f59e0b',
    alignItems: 'center',
    justifyContent: 'center',
  },
  userText: {
    gap: 4,
  },
  userName: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#fff',
  },
  userLevel: {
    fontSize: 12,
    color: 'rgba(251, 191, 36, 0.8)',
  },
  statsCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: -20,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    justifyContent: 'space-around',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 2,
  },
  statItem: {
    alignItems: 'center',
    flex: 1,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#1c1917',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 11,
    color: '#a8a29e',
  },
  statDivider: {
    width: 1,
    backgroundColor: '#f5f5f4',
    marginVertical: 4,
  },
  menuCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 20,
    borderRadius: 16,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  menuItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingVertical: 14,
    paddingHorizontal: 16,
  },
  menuItemBorder: {
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f4',
  },
  menuLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  menuIcon: {
    marginRight: 12,
  },
  menuLabel: {
    fontSize: 15,
    fontWeight: '500',
    color: '#44403c',
  },
  vipCard: {
    backgroundColor: '#fff',
    marginHorizontal: 16,
    marginTop: 16,
    borderRadius: 16,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.05,
    shadowRadius: 2,
    elevation: 1,
  },
  vipLeft: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 12,
  },
  vipText: {
    gap: 2,
  },
  vipTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#1c1917',
  },
  vipSubtitle: {
    fontSize: 12,
    color: '#78716c',
  },
  vipBadge: {
    backgroundColor: '#fef3c7',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 12,
  },
  vipBadgeText: {
    fontSize: 11,
    fontWeight: '600',
    color: '#b45309',
  },
});
