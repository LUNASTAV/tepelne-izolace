import { Benefits, Footer, DemandFormSection, Header, Hero, Process, Services, Navbar, WebsiteHead, Gallery, ImageSection, Offer, FVE } from '../components';
import configuration from '../conf';
import CookieBot from 'react-cookiebot';

const { url } = configuration;
const domainGroupId = process.env.NEXT_PUBLIC_COOKIEBOT_DOMAIN_GROUP_ID;

export default function Home() {
  return (
    <div>
      <WebsiteHead canonicalHref={url} />
      {domainGroupId && (
        <CookieBot domainGroupId={domainGroupId} />
      )}
      <Header />
      <main className=''>
        <Hero />
        {/* <ImageSection sectionName='predvadeci-obrazek' imageUrl='/business/vata.jpg' /> */}
        {/*<Services />*/}
        <Offer />
        {/* <FVE /> */}
        <Benefits />
        <Process />
        <DemandFormSection />
        <Gallery />
      </main>
      <Footer />
    </div>
  );
}
