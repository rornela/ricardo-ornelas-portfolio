import React, { useState, useEffect } from 'react';
import {
  StyleSheet,
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  Dimensions,
  StatusBar,
  Platform,
  Animated,
  Linking,
  Image,
} from 'react-native';

const { width, height } = Dimensions.get('window');

interface Project {
  id: number;
  title: string;
  description: string;
  technologies: string[];
  year: string;
  link?: string;
  highlights: string[];
}

interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  duration: string;
  description: string;
  achievements: string[];
  technologies: string[];
}

const projects: Project[] = [
  {
    id: 1,
    title: 'TaskTrak - Task Management Platform',
    description: 'Comprehensive task management platform with automated scheduling algorithm and real-time collaboration features.',
    technologies: ['React', 'Firebase', 'JavaScript', 'CSS', 'HTML'],
    year: '2023',
    link: 'https://cs0320-s2023.github.io/TaskTrak/',
    highlights: [
      'Collaboratively designed and developed comprehensive task management platform',
      'Built responsive frontend using React with Firebase backend integration',
      'Implemented real-time data synchronization for seamless collaboration',
      'Conducted market analysis and created financial projections',
      'Automated scheduling algorithm for optimal task distribution'
    ]
  },
  {
    id: 2,
    title: 'Music Streaming Platform',
    description: 'Web-based music streaming platform with AI-driven music transition detection and real-time audio processing.',
    technologies: ['React', 'Node.js', 'AI/ML', 'Web Audio API', 'Real-time Processing'],
    year: '2024',
    link: 'https://github.com/johnsfarrell/djmixes.git',
    highlights: [
      'Led development of responsive web-based music streaming platform',
      'Collaborated with 4-person backend team for seamless integration',
      'Implemented AI-driven music transition detection algorithms',
      'Optimized application performance, reducing load times by 40%',
      'Built user authentication system with secure access controls'
    ]
  },
  {
    id: 3,
    title: 'NeatContents.com Website',
    description: 'Professional website development for content management and digital solutions company.',
    technologies: ['React', 'Node.js', 'CSS', 'Responsive Design', 'SEO'],
    year: '2024',
    highlights: [
      'Developed modern, responsive website with optimal user experience',
      'Implemented SEO best practices for improved search visibility',
      'Created intuitive content management system',
      'Optimized for cross-platform compatibility and performance'
    ]
  },
  {
    id: 4,
    title: 'Stages of Freedom Website & Digital Platform',
    description: 'Comprehensive digital transformation for non-profit organization, including website development, digital archiving, and social media management.',
    technologies: ['React', 'WordPress', 'Adobe Creative Suite', 'Social Media', 'Digital Archiving', 'Database Design'],
    year: '2025',
    link: 'https://stagesoffreedom.org',
    highlights: [
      'Developed and maintained mobile-responsive website for non-profit organization',
      'Implemented digital archival systems for historical document preservation',
      'Created and managed social media campaigns, increasing engagement by 150%',
      'Designed promotional materials and marketing collateral using Adobe Creative Suite',
      'Streamlined donation processing through custom database solutions',
      'Coordinated with institutional clients for rare book acquisitions and sales'
    ]
  },
  {
    id: 5,
    title: 'NLP Judicial Document Analysis',
    description: 'Machine learning solution for automated classification of Latin American judicial documents using BERT framework.',
    technologies: ['Python', 'BERT', 'NLP', 'Machine Learning', 'Data Analysis'],
    year: '2024',
    highlights: [
      'Developed NLP solutions using BERT framework for 1,000+ judicial documents',
      'Implemented automated classification for Latin American court systems',
      'Applied bias detection techniques for fair algorithmic recommendations',
      'Conducted comprehensive literature reviews and data preprocessing',
      'Correlated document similarity with crime categories and sentencing patterns'
    ]
  }
];

const experiences: Experience[] = [
  {
    id: 1,
    title: 'Full-stack Developer',
    company: 'AI-Centric Labs',
    location: 'Phoenix, AZ',
    duration: 'June 2025 – Present',
    description: 'Develop enterprise AI solutions, including scalable infrastructure, cross-platform software systems, and fully-integrated custom LLM user applications.',
    achievements: [
      'Engineering full-stack web and mobile applications using React, React Native, and Django',
      'Built and maintained distributed backend systems with distributed task queues',
      'Integrated LangChain pipelines for fine-tuned language models',
      'Delivered responsive, user-friendly interfaces with robust APIs',
      'Optimized AI workflows for high-throughput processing'
    ],
    technologies: ['React', 'React Native', 'Django', 'LangChain', 'AI/ML', 'Distributed Systems']
  },
  {
    id: 2,
    title: 'Non-Profit Technology Consultant',
    company: 'Stages of Freedom',
    location: 'Providence, RI',
    duration: 'January 2025 – May 2025',
    description: 'Lead technology initiatives for non-profit organization focused on funding swimming lessons for low-income youth through rare book sales and community programs.',
    achievements: [
      'Developed and maintained mobile-responsive website (stagesoffreedom.org) using modern web technologies',
      'Managed rare book acquisitions and sales, coordinating with universities, historical societies, and private collectors',
      'Implemented digital archival systems for historical document preservation and cataloging',
      'Created and managed social media campaigns, increasing online engagement by 150%',
      'Designed promotional materials and marketing collateral using Adobe Creative Suite',
      'Streamlined donation processing and donor management through custom database solutions'
    ],
    technologies: ['React', 'WordPress', 'Adobe Creative Suite', 'Social Media Management', 'Database Design', 'Digital Archiving']
  },
  {
    id: 3,
    title: 'Machine Learning Researcher',
    company: 'University of Barcelona',
    location: 'Barcelona, ES',
    duration: 'January 2024 – May 2024',
    description: 'Research position focusing on NLP solutions for judicial document analysis and bias detection in algorithmic decision-making.',
    achievements: [
      'Developed NLP solutions using BERT framework for judicial document analysis',
      'Conducted comprehensive literature reviews and implemented data preprocessing pipelines',
      'Applied bias detection techniques for fair algorithmic recommendations',
      'Analyzed 1,000+ judicial documents for automated classification',
      'Correlated document similarity with crime categories and sentencing patterns'
    ],
    technologies: ['Python', 'BERT', 'NLP', 'Machine Learning', 'Data Analysis', 'Bias Detection']
  },
  {
    id: 4,
    title: 'Library Service Desk Specialist',
    company: 'Brown University Library',
    location: 'Providence, RI',
    duration: 'September 2023 – December 2024',
    description: 'Provided comprehensive library services including technical support, digital resource management, and customer service for academic community.',
    achievements: [
      'Assisted 500+ patrons weekly with research inquiries and technical troubleshooting',
      'Managed digital library resources and maintained organization of electronic materials',
      'Implemented new circulation desk procedures, improving efficiency by 25%',
      'Provided technical support for library databases, e-resources, and research tools',
      'Trained new staff members on library management systems and customer service protocols',
      'Coordinated with IT department to resolve complex technical issues and system updates'
    ],
    technologies: ['Library Management Systems', 'Database Administration', 'Customer Service', 'Technical Support', 'Digital Resource Management']
  }
];

const skills = {
  'Programming Languages': ['Python (Proficient)', 'Java (Proficient)', 'C (Proficient)', 'C# (Proficient)', 'C++ (Proficient)', 'Assembly Language (Proficient)', 'Reason ML (Proficient)', 'R (Statistical Software)'],
  'Web Technologies': ['React', 'React Native', 'JavaScript', 'HTML', 'CSS', 'Node.js', 'Django', 'WordPress'],
  'Databases & Cloud': ['Firebase', 'SQL', 'MongoDB', 'AWS', 'Google Cloud', 'Database Design'],
  'AI/ML & Tools': ['Machine Learning', 'NLP', 'BERT', 'LangChain', 'Git', 'Docker', 'Data Analysis'],
  'Software & Design': ['Microsoft Office', 'Adobe Creative Suite', 'Figma', 'UI/UX Design', 'Digital Archiving'],
  'Professional Skills': ['Project Management', 'Customer Service', 'Technical Support', 'Social Media Management', 'Non-Profit Consulting']
};

const App: React.FC = () => {
  const [currentPage, setCurrentPage] = useState('home');
  const fadeAnim = new Animated.Value(0);

  console.log('App component is rendering, currentPage:', currentPage);

  useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 800,
      useNativeDriver: false,
    }).start();
  }, [currentPage]);

  const renderHomePage = () => (
    <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
      <ScrollView style={styles.homeScrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.heroSection}>
          <Text style={styles.heroTitle}>Ricardo Ornelas</Text>
          <Text style={styles.heroSubtitle}>Software Engineer & AI Researcher</Text>
          <Text style={styles.heroDescription}>
            Passionate about building innovative AI solutions and scalable applications. 
            Recent Brown University graduate with expertise in full-stack development, 
            machine learning, and cross-platform software systems.
          </Text>
          <View style={styles.heroStats}>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>4+</Text>
              <Text style={styles.statLabel}>Years Experience</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>15+</Text>
              <Text style={styles.statLabel}>Projects</Text>
            </View>
            <View style={styles.statItem}>
              <Text style={styles.statNumber}>10+</Text>
              <Text style={styles.statLabel}>Technologies</Text>
            </View>
          </View>
          <View style={styles.heroButtons}>
            <TouchableOpacity 
              style={styles.primaryButton}
              onPress={() => setCurrentPage('experience')}
            >
              <Text style={styles.primaryButtonText}>View Experience</Text>
            </TouchableOpacity>
            <TouchableOpacity 
              style={styles.secondaryButton}
              onPress={() => setCurrentPage('projects')}
            >
              <Text style={styles.secondaryButtonText}>See Projects</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.techShowcaseSection}>
          <Text style={styles.techShowcaseTitle}>Built with Modern Technologies</Text>
          <Text style={styles.techShowcaseSubtitle}>
            This portfolio showcases the latest in web development and design
          </Text>
          <View style={styles.techGrid}>
            <View style={styles.techCard}>
              <Text style={styles.techCardTitle}>React Native</Text>
              <Text style={styles.techCardDescription}>Cross-platform mobile development</Text>
            </View>
            <View style={styles.techCard}>
              <Text style={styles.techCardTitle}>TypeScript</Text>
              <Text style={styles.techCardDescription}>Type-safe JavaScript development</Text>
            </View>
            <View style={styles.techCard}>
              <Text style={styles.techCardTitle}>Expo</Text>
              <Text style={styles.techCardDescription}>Rapid development platform</Text>
            </View>
            <View style={styles.techCard}>
              <Text style={styles.techCardTitle}>Responsive Design</Text>
              <Text style={styles.techCardDescription}>Adaptive layouts for all devices</Text>
            </View>
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );

  const renderAboutPage = () => (
    <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About Me</Text>
                     <View style={styles.aboutContent}>
                     <Text style={styles.aboutText}>
            I'm Ricardo Ornelas, a first-generation college graduate from Brown University, 
            where I studied Computer Science and Economics. My journey from a low-income 
            background to an Ivy League education and machine learning research has given me 
            a unique perspective on resilience, opportunity, and the transformative power of 
            technology and education.
          </Text>
          <Text style={styles.aboutText}>
            Technology can be a monumental tool in multiplying capability, but I believe there 
            is an unreplicable fluidity and intuition in the human experience that gives it 
            true meaning. With a deep appreciation for the visual arts, I try to bring that 
            sensibility into my work, both technical and artistic. The logo for this site reflects that philosophy—blending 
            technical precision with aesthetic expression to represent both my skills and my 
            values.
          </Text>
          <Text style={styles.aboutText}>
            My previous role as a Non-Profit Technology Consultant for Stages of Freedom highlights my 
            belief that technology should serve people and communities, not just businesses. 
            There, I applied my technical skills alongside my lived experience to drive projects 
            that make a real social impact.
          </Text>
          <Text style={styles.aboutText}>
            At Brown, I served as President of First-Gens @ Brown, leading initiatives that 
            supported over 1,000 first-generation college students through 15+ workshops and 
            networking events. That work taught me that true innovation comes from 
            understanding people’s needs and ensuring diverse perspectives are at the center 
            of every project.
          </Text>
          <Text style={styles.aboutText}>
            These experiences continue to shape my mission: to build technology that is not 
            only cutting-edge but also meaningful—solutions that connect people, amplify 
            voices, and create opportunities where they’re needed most.
          </Text>
           </View>
          
          <View style={styles.educationCard}>
            <Text style={styles.educationTitle}>Education</Text>
            <Text style={styles.degree}>Bachelor's in Computer Science</Text>
            <Text style={styles.school}>Brown University</Text>
            <Text style={styles.graduation}>Graduated May 2025 • GPA: 3.6/4.0</Text>
            <Text style={styles.awards}>Sidney E. Frank Scholar</Text>
          </View>

          <View style={styles.skillsSection}>
            <Text style={styles.sectionSubtitle}>Technical Skills</Text>
            {Object.entries(skills).map(([category, skillList]) => (
              <View key={category} style={styles.skillCategory}>
                <Text style={styles.categoryTitle}>{category}</Text>
                <View style={styles.skillTags}>
                  {skillList.map((skill, index) => (
                    <View key={index} style={styles.skillTag}>
                      <Text style={styles.skillText}>{skill}</Text>
                    </View>
                  ))}
                </View>
              </View>
            ))}
          </View>
        </View>
      </ScrollView>
    </Animated.View>
  );

  const renderExperiencePage = () => (
    <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Professional Experience</Text>
          {experiences.map((exp) => (
            <View key={exp.id} style={styles.experienceCard}>
              <View style={styles.experienceHeader}>
                <Text style={styles.experienceTitle}>{exp.title}</Text>
                <Text style={styles.experienceCompany}>{exp.company}</Text>
              </View>
              <Text style={styles.experienceLocation}>{exp.location} • {exp.duration}</Text>
              <Text style={styles.experienceDescription}>{exp.description}</Text>
              
              <Text style={styles.achievementsTitle}>Key Achievements:</Text>
              {exp.achievements.map((achievement, index) => (
                <View key={index} style={styles.achievementItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.achievementText}>{achievement}</Text>
                </View>
              ))}
              
              <View style={styles.techStack}>
                {exp.technologies.map((tech, index) => (
                  <View key={index} style={styles.techTag}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>
            </View>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );

  const renderProjectsPage = () => (
    <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
      <ScrollView style={styles.scrollView} showsVerticalScrollIndicator={false}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Featured Projects</Text>
          {projects.map((project) => (
            <View key={project.id} style={styles.projectCard}>
              <View style={styles.projectHeader}>
                <Text style={styles.projectTitle}>{project.title}</Text>
                <Text style={styles.projectYear}>{project.year}</Text>
              </View>
              <Text style={styles.projectDescription}>{project.description}</Text>
              
              <Text style={styles.highlightsTitle}>Key Features:</Text>
              {project.highlights.map((highlight, index) => (
                <View key={index} style={styles.highlightItem}>
                  <Text style={styles.bulletPoint}>•</Text>
                  <Text style={styles.highlightText}>{highlight}</Text>
                </View>
              ))}
              
              <View style={styles.techStack}>
                {project.technologies.map((tech, index) => (
                  <View key={index} style={styles.techTag}>
                    <Text style={styles.techText}>{tech}</Text>
                  </View>
                ))}
              </View>
              
                             {project.link && (
                 <TouchableOpacity 
                   style={styles.projectLink}
                   onPress={() => Linking.openURL(project.link!)}
                 >
                   <Text style={styles.linkText}>View Project →</Text>
                 </TouchableOpacity>
               )}
            </View>
          ))}
        </View>
      </ScrollView>
    </Animated.View>
  );

  const renderContactPage = () => (
    <Animated.View style={[styles.page, { opacity: fadeAnim }]}>
      <View style={styles.contactSection}>
        <Text style={styles.sectionTitle}>Get In Touch</Text>
        <Text style={styles.contactDescription}>
          I'm always interested in new opportunities and exciting projects. 
          Let's connect and discuss how we can work together!
        </Text>
        
        <View style={styles.contactInfo}>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Email</Text>
            <Text style={styles.contactValue}>RicardoOrnelas02@gmail.com</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Phone</Text>
            <Text style={styles.contactValue}>(520) 840-5560</Text>
          </View>
          <View style={styles.contactItem}>
            <Text style={styles.contactLabel}>Location</Text>
            <Text style={styles.contactValue}>Phoenix, AZ</Text>
          </View>
        </View>
        
                 <View style={styles.contactButtons}>
           <TouchableOpacity 
             style={styles.contactButton}
             onPress={() => Linking.openURL('mailto:RicardoOrnelas02@gmail.com')}
           >
             <Text style={styles.contactButtonText}>Send Email</Text>
           </TouchableOpacity>
           <TouchableOpacity 
             style={[styles.contactButton, styles.secondaryContactButton]}
             onPress={() => Linking.openURL('https://www.linkedin.com/in/ricardo-ornelas-6b293b232')}
           >
             <Text style={[styles.contactButtonText, styles.secondaryContactButtonText]}>LinkedIn</Text>
           </TouchableOpacity>
         </View>
      </View>
    </Animated.View>
  );

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return renderHomePage();
      case 'about':
        return renderAboutPage();
      case 'experience':
        return renderExperiencePage();
      case 'projects':
        return renderProjectsPage();
      case 'contact':
        return renderContactPage();
      default:
        return renderHomePage();
    }
  };

  return (
    <View style={styles.container}>
            <StatusBar barStyle="dark-content" backgroundColor="#ffffff" />
      
      {/* Header */}
      <View style={styles.header}>
        <View style={styles.logoContainer}>
          <Image 
            source={require('./assets/logo.png')} 
            style={styles.logoImage}
            resizeMode="contain"
          />
          {width >= 768 && <Text style={styles.logo}>Ricardo Ornelas</Text>}
        </View>
        <View style={styles.nav}>
          {[
            { key: 'home', label: 'Home' },
            { key: 'about', label: 'About' },
            { key: 'experience', label: 'Experience' },
            { key: 'projects', label: 'Projects' },
            { key: 'contact', label: 'Contact' }
          ].map((item) => (
            <TouchableOpacity
              key={item.key}
              style={[styles.navItem, currentPage === item.key && styles.activeNavItem]}
              onPress={() => setCurrentPage(item.key)}
            >
              <Text style={[styles.navText, currentPage === item.key && styles.activeNavText]}>
                {item.label}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
      </View>

      {renderPage()}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#ffffff',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: width < 768 ? 16 : 24,
    paddingTop: Platform.OS === 'ios' ? 50 : 20,
    paddingBottom: width < 768 ? 12 : 20,
    backgroundColor: '#ffffff',
    borderBottomWidth: 1,
    borderBottomColor: '#f5f5f5',
  },
  logoContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: width < 768 ? 8 : 12,
  },
  logoImage: {
    width: width < 768 ? 32 : 50,
    height: width < 768 ? 32 : 50,
  },
  logo: {
    fontSize: width < 768 ? 16 : 20,
    fontWeight: '600',
    color: '#000000',
    letterSpacing: -0.5,
  },
  nav: {
    flexDirection: 'row',
    gap: width < 768 ? 12 : 32,
  },
  navItem: {
    paddingVertical: width < 768 ? 4 : 8,
    paddingHorizontal: width < 768 ? 2 : 0,
  },
  activeNavItem: {
    borderBottomWidth: 2,
    borderBottomColor: '#000000',
  },
  navText: {
    fontSize: width < 768 ? 12 : 14,
    color: '#666666',
    fontWeight: '400',
  },
  activeNavText: {
    color: '#000000',
    fontWeight: '500',
  },
  page: {
    flex: 1,
  },
  heroSection: {
    minHeight: height * 0.8,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fafafa',
  },
  homeScrollView: {
    flex: 1,
  },
  techShowcaseSection: {
    paddingHorizontal: 24,
    paddingVertical: 80,
    backgroundColor: '#ffffff',
  },
  techShowcaseTitle: {
    fontSize: 28,
    fontWeight: '300',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -0.5,
  },
  techShowcaseSubtitle: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 48,
    lineHeight: 24,
  },
  techGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'center',
    gap: 20,
  },
  techCard: {
    backgroundColor: '#fafafa',
    padding: 24,
    borderRadius: 8,
    minWidth: 200,
    maxWidth: 250,
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#f0f0f0',
  },
  techCardTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 8,
    textAlign: 'center',
  },
  techCardDescription: {
    fontSize: 14,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 20,
  },
  heroTitle: {
    fontSize: 48,
    fontWeight: '300',
    color: '#000000',
    textAlign: 'center',
    marginBottom: 16,
    letterSpacing: -1,
  },
  heroSubtitle: {
    fontSize: 20,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 24,
    fontWeight: '400',
  },
  heroDescription: {
    fontSize: 16,
    color: '#666666',
    textAlign: 'center',
    lineHeight: 24,
    marginBottom: 48,
    maxWidth: 600,
  },
  heroStats: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    width: '100%',
    maxWidth: 400,
    marginBottom: 48,
  },
  statItem: {
    alignItems: 'center',
  },
  statNumber: {
    fontSize: 32,
    fontWeight: '300',
    color: '#000000',
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: '#666666',
    fontWeight: '400',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  heroButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  primaryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#000000',
    borderRadius: 4,
    minWidth: 140,
    alignItems: 'center',
  },
  primaryButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  secondaryButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000000',
    borderRadius: 4,
    minWidth: 140,
    alignItems: 'center',
  },
  secondaryButtonText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  scrollView: {
    flex: 1,
  },
  section: {
    paddingHorizontal: 24,
    paddingVertical: 60,
  },
  sectionTitle: {
    fontSize: 32,
    fontWeight: '300',
    color: '#000000',
    marginBottom: 48,
    letterSpacing: -0.5,
  },
  sectionSubtitle: {
    fontSize: 24,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 24,
  },
  aboutContent: {
    marginBottom: 40,
  },
  aboutText: {
    fontSize: 16,
    lineHeight: 28,
    color: '#666666',
    marginBottom: 20,
    fontWeight: '400',
  },
  educationCard: {
    backgroundColor: '#fafafa',
    padding: 32,
    borderRadius: 8,
    marginBottom: 40,
  },
  educationTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 16,
  },
  degree: {
    fontSize: 18,
    fontWeight: '400',
    color: '#000000',
    marginBottom: 8,
  },
  school: {
    fontSize: 16,
    color: '#666666',
    marginBottom: 4,
  },
  graduation: {
    fontSize: 14,
    color: '#666666',
    marginBottom: 8,
  },
  awards: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  skillsSection: {
    gap: 24,
  },
  skillCategory: {
    marginBottom: 24,
  },
  categoryTitle: {
    fontSize: 18,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 12,
  },
  skillTags: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
  },
  skillTag: {
    backgroundColor: '#f0f0f0',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  skillText: {
    fontSize: 12,
    color: '#000000',
    fontWeight: '400',
  },
  experienceCard: {
    backgroundColor: '#fafafa',
    padding: 32,
    borderRadius: 8,
    marginBottom: 32,
    borderLeftWidth: 3,
    borderLeftColor: '#000000',
  },
  experienceHeader: {
    marginBottom: 8,
  },
  experienceTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 4,
  },
  experienceCompany: {
    fontSize: 16,
    color: '#666666',
    fontWeight: '400',
  },
  experienceLocation: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 16,
  },
  experienceDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    marginBottom: 20,
  },
  achievementsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 12,
  },
  achievementItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    fontSize: 16,
    color: '#000000',
    marginRight: 8,
    marginTop: 2,
  },
  achievementText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
    flex: 1,
  },
  projectCard: {
    backgroundColor: '#fafafa',
    padding: 32,
    borderRadius: 8,
    marginBottom: 32,
    borderLeftWidth: 3,
    borderLeftColor: '#000000',
  },
  projectHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 16,
  },
  projectTitle: {
    fontSize: 20,
    fontWeight: '500',
    color: '#000000',
    flex: 1,
  },
  projectYear: {
    fontSize: 14,
    color: '#999999',
    fontWeight: '400',
  },
  projectDescription: {
    fontSize: 16,
    lineHeight: 24,
    color: '#666666',
    marginBottom: 20,
  },
  highlightsTitle: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000000',
    marginBottom: 12,
  },
  highlightItem: {
    flexDirection: 'row',
    marginBottom: 8,
    alignItems: 'flex-start',
  },
  highlightText: {
    fontSize: 14,
    lineHeight: 20,
    color: '#666666',
    flex: 1,
  },
  techStack: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 20,
  },
  techTag: {
    backgroundColor: '#000000',
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 4,
  },
  techText: {
    fontSize: 12,
    color: '#ffffff',
    fontWeight: '400',
  },
  projectLink: {
    marginTop: 20,
    paddingVertical: 8,
  },
  linkText: {
    fontSize: 14,
    color: '#000000',
    fontWeight: '500',
  },
  contactSection: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 24,
    backgroundColor: '#fafafa',
  },
  contactDescription: {
    fontSize: 18,
    lineHeight: 28,
    color: '#666666',
    textAlign: 'center',
    marginBottom: 48,
    maxWidth: 500,
  },
  contactInfo: {
    marginBottom: 48,
    gap: 24,
  },
  contactItem: {
    alignItems: 'center',
  },
  contactLabel: {
    fontSize: 14,
    color: '#999999',
    marginBottom: 4,
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  contactValue: {
    fontSize: 16,
    color: '#000000',
    fontWeight: '500',
  },
  contactButtons: {
    flexDirection: 'row',
    gap: 16,
  },
  contactButton: {
    paddingHorizontal: 32,
    paddingVertical: 16,
    backgroundColor: '#000000',
    borderRadius: 4,
    minWidth: 120,
    alignItems: 'center',
  },
  contactButtonText: {
    fontSize: 14,
    color: '#ffffff',
    fontWeight: '500',
    textTransform: 'uppercase',
    letterSpacing: 1,
  },
  secondaryContactButton: {
    backgroundColor: 'transparent',
    borderWidth: 1,
    borderColor: '#000000',
  },
  secondaryContactButtonText: {
    color: '#000000',
  },
});

export default App;
