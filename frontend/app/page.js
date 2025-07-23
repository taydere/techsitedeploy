import styles from './HomePage.module.css';

export default function HomePage() {
  return (
    <main className={styles.briefingContainer}>
      <header className={styles.briefingHeader}>
        <h1>Your briefing</h1>
        <p className={styles.dateText}>Wednesday, July 16</p>
      </header>

      <section className={styles.briefingContent}>
        <div className={styles.topStoriesSection}>
          <h2>Top stories</h2>

          <div className={styles.topStoriesWrapper}>
            <div className={styles.featuredStory}>
              <img src="/trump-thumbnail.jpg" alt="Trump" className={styles.featuredImage} />
              <div className={styles.featuredHeadline}>Trump lashes out at ‘weaklings’ who believe Epstein claims</div>
              <p className={styles.articleMeta}>1 hour ago • CNN</p>
            </div>

            <div className={styles.storyList}>
              <div className={styles.storyItem}>Trump can’t get his base to move on from Epstein – NBC News • 17m ago</div>
              <div className={styles.storyItem}>Republicans call for transparency in Epstein probe – NPR • 6h ago</div>
              <div className={styles.storyItem}>Trump criticized for Epstein handling – Washington Post • 30m ago</div>
            </div>
          </div>

          <div className={styles.topStoriesWrapper}>
            <div className={styles.featuredStory}>
              <img src="/israel-syria.jpg" alt="Israel Syria" className={styles.featuredImage} />
              <div className={styles.featuredHeadline}>Israel bombs Damascus, all parties agree on 'specific response'</div>
              <p className={styles.articleMeta}>5 hours ago • Reuters</p>
            </div>

            <div className={styles.storyList}>
              <div className={styles.storyItem}>Israel strikes Syria’s capital, pledging to defend Druze – NPR • 8h ago</div>
              <div className={styles.storyItem}>Why did Israel strike Damascus? – The Economist • 41m ago</div>
              <div className={styles.storyItem}>New ceasefire announced – AP News • 1h ago</div>
            </div>
          </div>
        </div>

        <aside className={styles.sidebarSection}>
          <section className={styles.sidebarBlock}>
            <h3>Local news</h3>
            <ul className={styles.newsList}>
              <li><strong>Suspect Charged With Hate Crime At East Bay BART Station</strong><br /><small>22 hours ago • Patch</small></li>
              <li><strong>Cal-OSHA recommends criminal charges for San Leandro company</strong><br /><small>2 hours ago • KTVU</small></li>
              <li><strong>Mother arrested in Union City cold case of baby found in dumpster</strong><br /><small>Yesterday • KTVU</small></li>
            </ul>
          </section>

          <section className={styles.sidebarBlock}>
            <h3>Picks for you</h3>
            <ul className={styles.newsList}>
              <li><strong>Waymo Vets Are Automating Construction Sites...</strong><br /><small>11 hours ago • Forbes</small></li>
              <li><strong>Bill Belichick fires back at Robert Kraft’s ‘big risk’ comment</strong><br /><small>6 hours ago • New York Post</small></li>
              <li><strong>Emmy Nods, ‘Fun’ Facts: Network Dramas Get Back in the Game...</strong><br /><small>21 hours ago • TVLine</small></li>
            </ul>
          </section>
        </aside>
      </section>
    </main>
  );
}
