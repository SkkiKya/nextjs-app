

import Link from 'next/link'
import Image from 'next/image'

const Header = () =>
{
  return (
    <header>
      <div>
        <div>
          <Link href="/">
            <a>
              <Image src="/image/logo.png" alt="logo" width={50} height={50} />
            </a>
          </Link>
          <ul>
            <li><Link href="/blog"><a>Blog</a></Link></li>
          </ul>
        </div>
      </div>
    </header>
  )
}

export default Header
