
import Link from 'next/link'
import Image from 'next/image'
import Layout from "../components/layout"

const Index = () =>
{
  return (
    <Layout>
      <div>
        <Image src="/images/index-hero.jpg" alt="hero" layout="fill" objectFit="cover" quality={90} />
        <div>
          <h1>I'm Koya!</h1>
          <h3> Using JavaScript </h3>
        </div>
        <div>
          <div>
            <div>
              <h2>JavaScript Nerd</h2>
              <p>I made this Web site using Next.js.</p>
            </div>
              <Image src="/images/profile.jpg" alt="hero" height={1195} width={1000} quality={90} />
          </div>
          <div>
            <h2>Skills</h2>
            <div>
              <div><img src="/images/javascript.svg" alt="javascript" /><span>JavaScript / 1 years</span></div>
              <div><img src="/images/react.svg" alt="react" /><span>React / 0.1 years</span></div>
              <div><img src="/images/next.svg" alt="next" /><span>Next.JS / 0.1 years</span></div>
            </div>
          </div>
          <div>
            <Link href="/contact"><a>Make It Happen!</a></Link>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default Index;
