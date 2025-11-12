import styles from './HomePage.module.css';

const trendingItems = [
  {
    title: 'Big Tech spending spree meets Wall Street pressure',
    link: 'https://www.cnn.com/2025/10/31/tech/microsoft-amazon-meta-google-earnings-ai',
    source: 'CNN Business',
    stat: '4.6K',
    blurb:
      'Meta, Microsoft, Amazon, Apple, and Alphabet keep pouring tens of billions into AI data centers while investors push for faster returns.',
    image: 'https://via.placeholder.com/160x120?text=Story+1',
  },
  {
    title: 'Hollywood legends lend their voices to ElevenLabs clone push',
    link: 'https://apnews.com/article/ai-voice-clones-michael-caine-matthew-mcconaughey-elevenlabs-a906f912c4500bfea35b53f4ad07e846',
    source: 'AP News',
    stat: '2.9K',
    blurb:
      'Michael Caine and Matthew McConaughey struck deals with ElevenLabs to license AI replicas of their voices, positioning the startup for bigger entertainment work.',
    image: 'https://via.placeholder.com/160x120?text=Story+2',
  },
  {
    title: "The end of the government shutdown doesn't mean the end...",
    source: 'Yahoo Per...',
    stat: '404',
    image: 'https://via.placeholder.com/160x120?text=Story+3',
  },
  {
    title: 'Why lung cancer is becoming more common among wom...',
    source: 'USA TODAY',
    stat: '532',
    image: 'https://via.placeholder.com/160x120?text=Story+4',
  },
  {
    title: 'Arrivederci, spaghetti? U.S. plans 107% tariff on Italian pasta.',
    source: 'Food & Wine',
    stat: '174',
    image: 'https://via.placeholder.com/160x120?text=Story+5',
  },
  {
    title: 'Tennessee death row inmate declines to chose between...',
    source: 'Associated Press',
    stat: '946',
    image: 'https://via.placeholder.com/160x120?text=Story+6',
  },
];

const curatedStories = [
  {
    title: 'Nvidia pushes AI factories from DC keynote',
    summary:
      'CEO Jensen Huang framed the GTC keynote around turning data centers into “AI factories,” pairing new telecom, robotics, and transportation deals to embed Nvidia tech in daily infrastructure.',
    source: 'CNN Business',
    meta: 'Oct 28, 2025 • 4 min read',
    image: 'https://via.placeholder.com/120x120?text=Story+A',
    link: 'https://www.cnn.com/2025/10/28/tech/nvidia-gtc-ai-conference-jensen-huang',
  },
  {
    title: '14 Social Security Changes Coming in 2026 That Impact Everyone (Plus Benefits You Could Claim Now)',
    summary: 'Sponsored • FinanceBuzz',
    source: 'FinanceBuzz',
    meta: 'Sponsored',
    image: 'https://via.placeholder.com/120x120?text=Ad',
    sponsored: true,
  },
  {
    title:
      "Warren Buffett admits his Giving Pledge philanthropy was not 'feasible'—he's instead left his three kids $500 million a year to...",
    summary:
      'The Berkshire Hathaway billionaire says his longevity has led to “unavoidable consequences” for his fortune, which he continues to funnel into charity.',
    source: 'USA',
    meta: 'US • 2 min read',
    image: 'https://via.placeholder.com/120x120?text=Story+B',
  },
  {
    title: 'Robotaxi pilot brings overnight deliveries to suburban malls',
    summary:
      'A fictional partnership between a grocer and an autonomous delivery startup is piloting late-night drop-offs to test how AI logistics reshape retail schedules.',
    source: 'TechWire',
    meta: 'Innovation • 3 min read',
    image: 'https://via.placeholder.com/120x120?text=Story+C',
  },
  {
    title: 'Startup spins quantum server heat into district energy grid',
    summary:
      'Engineers say the prototype loop captures waste heat from experimental quantum racks and feeds it into nearby apartments, hinting at new sustainability plays.',
    source: 'GridLab',
    meta: 'Energy • 5 min read',
    image: 'https://via.placeholder.com/120x120?text=Story+D',
  },
];

export default function HomePage() {
  return (
    <main className={styles.page}>
      <section className={styles.heroSection}>
        <div className={styles.heroImageWrapper}>
          <img
            src="https://via.placeholder.com/720x400?text=Smart+City+Expo"
            alt="Smart city skyline"
            className={styles.heroImage}
          />
        </div>
        <div className={styles.heroContent}>
          <span className={styles.heroTag}>Physical AI • Smart Cities</span>
          <h1 className={styles.heroTitle}>
            <a
              href="https://blogs.nvidia.com/blog/physical-ai-smart-city-expo-world-congress/"
              target="_blank"
              rel="noopener noreferrer"
              className={styles.heroLink}
            >
              NVIDIA Partners Bring Physical AI to Smart City Expo World Congress
            </a>
          </h1>
          <p className={styles.heroSummary}>
            NVIDIA showcases an expanding ecosystem of partners using digital twins, synthetic data and vision AI agents to
            tackle congestion, sustainability and real-time safety across cities from Dublin to Ho Chi Minh City.
          </p>
          <div className={styles.heroMeta}>
            <span>NVIDIA Blog</span>
            <span className={styles.dot} aria-hidden="true">
              •
            </span>
            <span>Nov 3, 2025</span>
          </div>
        </div>
      </section>

      <section className={styles.trendingSection}>
        <div className={styles.trendingScroller}>
          {trendingItems.map((story) => (
            <article key={story.title} className={styles.trendingCard}>
              <img src={story.image} alt={story.title} className={styles.trendingImage} />
              <h3 className={styles.trendingTitle}>
                {story.link ? (
                  <a href={story.link} target="_blank" rel="noopener noreferrer">
                    {story.title}
                  </a>
                ) : (
                  story.title
                )}
              </h3>
              {story.blurb && <p className={styles.trendingSummary}>{story.blurb}</p>}
              <div className={styles.trendingMeta}>
                <span>{story.source}</span>
                <span className={styles.dot} aria-hidden="true">
                  •
                </span>
                <span>{story.stat}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className={styles.storiesSection}>
        <div className={styles.storiesHeader}>
          <h2>Stories for you</h2>
        </div>
        <div className={styles.storiesList}>
          {curatedStories.map((story) => (
            <article
              key={story.title}
              className={`${styles.storyCard} ${story.sponsored ? styles.sponsoredCard : ''}`}
            >
              <img src={story.image} alt={story.title} className={styles.storyImage} />
              <div className={styles.storyContent}>
              <h3 className={styles.storyTitle}>
                {story.link ? (
                  <a href={story.link} target="_blank" rel="noopener noreferrer">
                    {story.title}
                  </a>
                ) : (
                  story.title
                )}
              </h3>
                <p className={styles.storySummary}>{story.summary}</p>
                <div className={styles.storyMeta}>
                  <span>{story.source}</span>
                  <span className={styles.dot} aria-hidden="true">
                    •
                  </span>
                  <span>{story.meta}</span>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>
    </main>
  );
}
