import { StatusBar } from 'expo-status-bar';
import { Pressable, ScrollView, StyleSheet, Text, View, Linking } from 'react-native';

const timeline = [
  {
    year: '2007',
    title: 'The beginning',
    text: 'Charles Cleaning started as a small family-run service focused on dependable residential cleaning and honest customer care.',
  },
  {
    year: '2013',
    title: 'Growing trust',
    text: 'The business expanded into commercial properties and office cleaning after winning recurring contracts from local businesses.',
  },
  {
    year: '2019',
    title: 'A stronger reputation',
    text: 'Our team grew, our systems improved, and referrals became the foundation of our long-term client relationships.',
  },
  {
    year: '2025',
    title: 'Today',
    text: 'We continue to deliver premium, eco-conscious cleaning services with a modern approach and a people-first culture.',
  },
];

const testimonials = [
  {
    name: 'Jane M.',
    text: 'Their team arrived on time, cleaned every corner, and left our home spotless. Professional, friendly, and truly reliable.',
  },
  {
    name: 'Robert T.',
    text: 'We have used Charles Cleaning for over five years. The quality is consistent and the staff always treat our office with respect.',
  },
  {
    name: 'Aisha K.',
    text: 'The service feels personal and thoughtful. We trust them completely with our family home and holiday rental properties.',
  },
];

const socialLinks = [
  { label: 'Facebook', url: 'https://www.facebook.com/' },
  { label: 'Instagram', url: 'https://www.instagram.com/' },
  { label: 'LinkedIn', url: 'https://www.linkedin.com/' },
  { label: 'WhatsApp', url: 'https://wa.me/27720000000' },
];

export default function App() {
  const openLink = async (url: string) => {
    await Linking.openURL(url);
  };

  return (
    <ScrollView style={styles.page} contentContainerStyle={styles.content}>
      <StatusBar style="light" />

      <View style={styles.heroSection}>
        <Text style={styles.eyebrow}>About Charles Cleaning</Text>
        <Text style={styles.title}>Clean spaces. Trusted relationships.</Text>
        <Text style={styles.subtitle}>
          We help homes, businesses, and communities feel brighter, healthier, and more welcoming through reliable cleaning services.
        </Text>

        <View style={styles.statsRow}>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>18+</Text>
            <Text style={styles.statLabel}>Years of service</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>1.2K</Text>
            <Text style={styles.statLabel}>Happy clients</Text>
          </View>
          <View style={styles.statBox}>
            <Text style={styles.statValue}>4.9/5</Text>
            <Text style={styles.statLabel}>Average rating</Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Business history</Text>
        <Text style={styles.sectionText}>
          Charles Cleaning began with a simple promise: to deliver dependable, detail-focused cleaning that makes daily life easier. Over the years, we have grown from a local family business into a trusted name for residential and commercial cleaning, without losing the personal care that built our reputation.
        </Text>

        <View style={styles.timelineContainer}>
          {timeline.map((item) => (
            <View key={item.year} style={styles.timelineItem}>
              <View style={styles.timelineYearBox}>
                <Text style={styles.timelineYear}>{item.year}</Text>
              </View>
              <View style={styles.timelineContent}>
                <Text style={styles.timelineTitle}>{item.title}</Text>
                <Text style={styles.timelineText}>{item.text}</Text>
              </View>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Old clients ratings and recommendations</Text>
        <View style={styles.reviewGrid}>
          {testimonials.map((item, index) => (
            <View key={index} style={styles.reviewCard}>
              <Text style={styles.stars}>★★★★★</Text>
              <Text style={styles.reviewText}>“{item.text}”</Text>
              <Text style={styles.reviewName}>— {item.name}</Text>
            </View>
          ))}
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Founder details</Text>

        <View style={styles.founderCard}>
          <View style={styles.avatarContainer}>
            <Text style={styles.avatarText}>CC</Text>
          </View>

          <View style={styles.founderDetails}>
            <Text style={styles.founderName}>Charles Carter</Text>
            <Text style={styles.founderRole}>Founder & Managing Director</Text>
            <Text style={styles.sectionText}>
              Charles founded the company with the belief that clean environments improve comfort, productivity, and confidence. His leadership is grounded in integrity, service excellence, and a hands-on approach that ensures every client feels valued.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Mission and vision</Text>

        <View style={styles.missionGrid}>
          <View style={styles.missionCard}>
            <Text style={styles.missionHeading}>Our mission</Text>
            <Text style={styles.sectionText}>
              To provide dependable, high-quality cleaning services that create fresh, healthy, and welcoming spaces for every client we serve.
            </Text>
          </View>

          <View style={styles.missionCard}>
            <Text style={styles.missionHeading}>Our vision</Text>
            <Text style={styles.sectionText}>
              To become the preferred cleaning partner in our community by setting the standard for professionalism, trust, and sustainable service.
            </Text>
          </View>
        </View>
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Social media links</Text>
        <View style={styles.socialGrid}>
          {socialLinks.map((item) => (
            <Pressable key={item.label} style={styles.socialButton} onPress={() => openLink(item.url)}>
              <Text style={styles.socialText}>{item.label}</Text>
            </Pressable>
          ))}
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  page: {
    flex: 1,
    backgroundColor: '#f4f8fb',
  },
  content: {
    paddingHorizontal: 20,
    paddingTop: 36,
    paddingBottom: 42,
  },
  heroSection: {
    backgroundColor: '#0d3b66',
    borderRadius: 24,
    padding: 24,
    marginBottom: 24,
    shadowColor: '#0d3b66',
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 0.18,
    shadowRadius: 18,
    elevation: 6,
  },
  eyebrow: {
    color: '#bfe7ff',
    fontSize: 13,
    fontWeight: '700',
    letterSpacing: 1.5,
    textTransform: 'uppercase',
    marginBottom: 10,
  },
  title: {
    color: '#ffffff',
    fontSize: 30,
    fontWeight: '800',
    lineHeight: 38,
    marginBottom: 12,
  },
  subtitle: {
    color: '#dfeefb',
    fontSize: 16,
    lineHeight: 24,
    marginBottom: 22,
  },
  statsRow: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    gap: 12,
  },
  statBox: {
    flex: 1,
    minWidth: 90,
    backgroundColor: 'rgba(255,255,255,0.08)',
    borderRadius: 16,
    paddingVertical: 14,
    paddingHorizontal: 12,
    alignItems: 'center',
  },
  statValue: {
    color: '#ffffff',
    fontSize: 22,
    fontWeight: '800',
  },
  statLabel: {
    color: '#dfeefb',
    fontSize: 12,
    marginTop: 4,
    textAlign: 'center',
  },
  section: {
    backgroundColor: '#ffffff',
    borderRadius: 22,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#61758a',
    shadowOffset: { width: 0, height: 8 },
    shadowOpacity: 0.08,
    shadowRadius: 12,
    elevation: 3,
  },
  sectionTitle: {
    color: '#102d43',
    fontSize: 24,
    fontWeight: '800',
    marginBottom: 12,
  },
  sectionText: {
    color: '#4d6173',
    fontSize: 15,
    lineHeight: 24,
  },
  timelineContainer: {
    marginTop: 18,
  },
  timelineItem: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    marginBottom: 18,
  },
  timelineYearBox: {
    width: 78,
    height: 52,
    borderRadius: 14,
    backgroundColor: '#e6f4ff',
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 14,
  },
  timelineYear: {
    color: '#0d3b66',
    fontSize: 18,
    fontWeight: '800',
  },
  timelineContent: {
    flex: 1,
  },
  timelineTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#102d43',
    marginBottom: 4,
  },
  timelineText: {
    color: '#526d82',
    fontSize: 14,
    lineHeight: 22,
  },
  reviewGrid: {
    marginTop: 12,
    gap: 12,
  },
  reviewCard: {
    backgroundColor: '#f5f9fc',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#dfeaf3',
  },
  stars: {
    color: '#f5b700',
    fontSize: 18,
    letterSpacing: 1,
    marginBottom: 8,
  },
  reviewText: {
    color: '#324b62',
    fontSize: 15,
    lineHeight: 23,
  },
  reviewName: {
    marginTop: 12,
    color: '#0d3b66',
    fontWeight: '700',
    fontSize: 14,
  },
  founderCard: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 18,
    marginTop: 12,
  },
  avatarContainer: {
    width: 100,
    height: 100,
    borderRadius: 50,
    backgroundColor: '#0d3b66',
    alignItems: 'center',
    justifyContent: 'center',
  },
  avatarText: {
    color: '#ffffff',
    fontWeight: '800',
    fontSize: 28,
  },
  founderDetails: {
    flex: 1,
  },
  founderName: {
    color: '#102d43',
    fontSize: 22,
    fontWeight: '800',
    marginBottom: 4,
  },
  founderRole: {
    color: '#0d3b66',
    fontSize: 14,
    fontWeight: '700',
    marginBottom: 8,
  },
  missionGrid: {
    marginTop: 12,
    gap: 12,
  },
  missionCard: {
    backgroundColor: '#eef8ff',
    borderRadius: 18,
    padding: 16,
    borderWidth: 1,
    borderColor: '#d6ebf8',
  },
  missionHeading: {
    fontSize: 18,
    color: '#0d3b66',
    fontWeight: '800',
    marginBottom: 8,
  },
  socialGrid: {
    marginTop: 12,
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 10,
  },
  socialButton: {
    backgroundColor: '#0d3b66',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 16,
  },
  socialText: {
    color: '#ffffff',
    fontWeight: '700',
    fontSize: 14,
  },
});
