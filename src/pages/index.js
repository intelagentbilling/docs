import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import Head from '@docusaurus/Head';
import Footer from '@theme/Footer';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import useBaseUrl from '@docusaurus/useBaseUrl';
import ReCAPTCHA from "react-google-recaptcha";
import styles from './styles.module.css';
import {Feature} from '../components/feature';
import {Pricing} from '../components/pricing';
import {Highlights} from '../components/highlights';
import Image from '@theme/IdealImage';
import {Nav} from '../components/nav';
import {ContactForm} from '../components/contact';


const squares = [
  {
    title: 'Secure',
    imageUrl: 'img/undraw_secure.svg',
    subtitle: (
      <> 
      Built with the highest standards of data protection.
      </>
    ),
    description: (
      <>
      It has passed conformance testing by the Ontario Ministry of Health 
      and is used by physicians across the province. 
      </>
    ),
  },
  {
    title: 'Specialized',
    imageUrl: 'img/undraw_medicine.svg',
    subtitle: (
      <> 
      The IntelAGENT service is simple yet very powerful.
      </>
    ),
    description: (
      <>
      We’ve worked with physicians across all specialties to ensure we fit 
      their requirements. We’re an agile, responsive company focused on physicians.
      </>
    ),
  },
  {
    title: 'Superior',
    imageUrl: 'img/undraw_solution.svg',
    subtitle: (
      <> 
      We’re designed to simplify the physician workflow.
      </>
    ),
    description: (
      <>
      Everything we offer, from our label scanner to our curated billing 
      codes to revenue trackers to instant OHIP card validation, is built 
      around your needs. 
      </>
    ),
  },
];

function AppList() {
  const {siteConfig} = useDocusaurusContext();
  const apps = siteConfig.customFields.users.filter(app => app.pinned);

  return (
    <div className="highlightsContainer">
      <div className="highlightsLimiter">
        <ul className="AppList">
          {apps.map((app, i) => {
            const imgSource = useBaseUrl('img/showcase/' + app.icon);
            return (
              <li key={i} className="applist-item">
                {app.infoLink ? (
                  <a href={app.infoLink}>
                    <img src={imgSource} alt={app.name} />
                  </a>
                ) : (
                  <img src={imgSource} alt={app.name} />
                )}
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

function Square({imageUrl, title, subtitle, description}) {
  const imgUrl = useBaseUrl(imageUrl);
  return (
    <div className={clsx('col col--4', styles.square)}>
      {imgUrl && (
        <div className="text--center">
          <img className={styles.squareImage} src={imgUrl} alt={title} />
        </div>
      )}
      <h2 className="highlightsTitle">{title}</h2>
      <p className="highlightsSubTitle">{subtitle}</p>
      <p>{description}</p>
    </div>
  );
}

const NewMessage = () => {
  return (
  <header className={clsx('hero hero--primary', styles.heroBanner)}>
          <div className="container">
            <h1 className="hero__title">New Web-based Software Now Available!</h1>
            <p className="hero__subtitle">The mobile app remains free for all users.</p>
            <div className={styles.buttons}>
              <Link
                className={clsx(
                  'button button--outline button--secondary button--lg',
                  styles.getStarted,
                )}
                to={useBaseUrl('/')}>
                Learn More
              </Link>
            </div>
          </div>        
        </header>
    ); 
}

const Hero = () => {
  return (
      <div id="main-header">
        <div className="container">
          <h1>
            <span>OHIP Billing</span> <br></br> Made Better.
          </h1>
          <h2>
          IntelAGENT is the best available billing solution for Ontario physicians.
           The iOS and Android apps are secure, work for all specialties, protect your personal data, 
           and are free for the vast majority of claims.
          </h2>
          <Link
            to="https://itunes.apple.com/ca/app/intelagent-ohip-billing/id1394360074?mt=8"
            title="Download iOS"
            className="main-button"
          >
            iOS
          </Link>
          <Link
          to="https://play.google.com/store/apps/details?id=com.intelagent"
          className="main-button"
          title="Download Android"
        >
        Android
        </Link>
        </div>
      </div>
  );
};

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;
  const {title, tagline, url, favicon} = siteConfig;
  const ogImage = `${url}/img/IntelAGENT-logo.svg`;

  return (
    <div>
    <Head>
        <meta charSet="utf-8" />
        <meta property="og:title" content={`${title} - ${tagline}`} />
        <meta name="description" content='Free OHIP Billing' />
        <meta property="og:description" content={tagline} />
        <meta property="og:url" content={url} />
        <meta property="og:image" content={ogImage} />
        <link rel="shortcut icon" href={favicon}></link>
        <title>
          {title} - {tagline}
        </title>
      </Head>          
      <div className="mainContainer">
        <Nav/>
              
        <Hero/>
      </div>

      <AppList />
      <Pricing />
      <Highlights
      highlights={[
        {
          title: 'OHIP Card Lookup',
          text: (
            <p>
            Quickly validate OHIP cards and automatically populate patient information in new claims.
            </p>
          ),
          link: (
            <div className={styles.indexGithubLinks}>
              <Link
                to="/docs/features/hcv"
                title="Health Card Validation Documentation"
              >
                Learn more >
              </Link>              
            </div>
          ),
          img: (
            <img className={styles.squareImage} src={'img/healthcard.svg'}  />
          ),
        },
        {
          title: 'Organized List of Billing Codes',
          text: (
            <p>
            Easily select billing codes from your specialty with our curated menus.
            </p>
          ),
          link: (
            <Link
              to="/docs/features/quick-copy"
              title="Curated Billing Coedes"
            >
              Lean more >
            </Link>
          ),
          img: (
            <img className={styles.squareImage} src={'img/billing-codes.svg'}  />
          ),
        },
        {
          title: 'Recommended Premium Codes',
          text: (
            <p>
            Intelligent billing suggestions derived from our database.
            </p>
          ),
          link: (
            <a
              href="/docs/features/favourites"
              title="Pre-set Favourite codes"
            >
              Learn more >
            </a>
          ),
          img: (
            <img className={styles.squareImage} src={'img/recommendation.svg'} />
          ),
        },
        {
          title: 'Physician Billing Number Database',
          text: (
            <p>
            Lookup a referring physician's billing number in our extensive catalog.
            </p>
          ),
          link: (
            <a
              href="/docs/features/adding-referring-physician"
              title="Referring Physician Billing Numbers"
            >
              Learn more >
            </a>
          ),
          img: (
            <img className={styles.squareImage} src={'img/database.svg'} />
          ),
        }
      ]}
    />
    <main>
      {squares && squares.length > 0 && (
        <section className={styles.squares}>
          <div className="container">
            <div className="row">
              {squares.map((props, idx) => (
                <Square key={idx} {...props} />
              ))}
            </div>
          </div>
        </section>
      )}
     </main>

      
      <Feature
        reversed={true}
        img={
          <Image
            img={require('../../static/img/revenue.png')}
            alt="Notifications"
            loading="lazy"
            size={200}
          />
        }
        title="Track Revenue"
        text={
          <>
            <p><strong>Granular Data</strong><br></br>
            Revenue is displayed in a easily accessible format to show past revenue trends and 
            help you forecast your cashflow for the coming months.            
            </p>
            <p><strong>Code Analysis</strong><br></br>
            Data mining code displays important stats that provide valuable insights into your claims. 
            We provide custom queries to show you the data that matters most to your work.
            </p>
          </>
        }
      />

      <Feature
        img={
          <Image
            img={require('../../static/img/new-claim.png')}
            alt="Schema Validation"
            loading="lazy"
          />
        }
        title="Submit Claims"
        text={
          <>
            <p><strong>Label Scanning</strong><br></br>
            Use your mobile phone's camera to snap a picture of your patient's OHIP Card or Patient Label 
            to automatically input their demographic data.
            </p>
            <p><strong>Validate OHIP Cards</strong><br></br>
            Validates a patient's OHIP card and version number to ensure you'll get paid. If a card is valid 
            the patient's information will be automatically filled in on the claim.
            </p>
            <p><strong>Save Drafts</strong><br></br>
            Drafts are saved in the cloud for secure storage. You can finish claims at your convenience or 
            just start drafts that can be filled out following a patient visit. Come back to claims when you're ready.
            </p>
            <p><strong>Duplicate Claims</strong><br></br>
            Previously submitted claims can be duplicated easily from the new claim screen. Whether you want to 
            repeat a patient entire claim or simply copy the claim and fill in a new patient's information. The duplicated claim will contain today's date for the service date.
            </p>
          </>
        }
      />

      <Feature
        reversed={true}
        img={
          <Image
            img={require('../../static/img/records.png')}
            alt="Intercept changes via HTTP"
            loading="lazy"
          />
        }
        title="Manage Claims"
        text={
          <>
            <p><strong>Organized Claims</strong><br></br>
            Review your claims in a colour coded list to see your claims' status. Sort by date and status to 
            narrow down your searches and get the information you need.
            </p>
            <p><strong>Rejections</strong><br></br>
            Easily review your rejected claims as they are reported and correct errors instantly so you get 
            paid without delay.
            </p>
            <p><strong>Drafts</strong><br></br>
            Store your work in progress on our servers and come at your convenience when you're ready to 
            finalize your claim.
            </p>

          </>
        }
      />   
      <Feature
        img={
          <Image
            img={require('../../static/img/billing-codes.png')}
            alt="Annotations"
            loading="lazy"
          />
        }
        title="Entering Billing Codes - Fast!"
        text={
          <>
            <p><strong>Favourites</strong><br></br>
            Keep a list of your favourite billing codes easily accessible so you can save time and don't need 
            to search for your most commonly used codes.
            </p>
            <p><strong>Frequent Billing Combinations
            </strong><br></br>
            Common sequences of billing codes can be inserted into a claim with two clicks. The 
            billing codes are copied from a previous claim and include the claim's premium codes and units.
            </p>
            <p><strong>Add, Remove or Change Units</strong><br></br>
            If the copied sequence of billing codes need to have a code added or removed that can be done 
            right from the same screen. The unit of each billing code can also be modified right on the screen.
            </p>
          </>
        }
      />
      <ContactForm/>
      <ReCAPTCHA
      sitekey="6LfkQpQaAAAAABK0j4xctiJK6jXq7wY5xQ_kY5zZ"
      />
      <Footer />
    </div>
  );
}

export default Home;
