import Link from 'next/link';
import Image from 'next/image';

import { NavLinks } from '@/constants';
import { AuthProviders, ProfileMenu } from '.';
import { getCurrentUser } from '@/lib/session';

const Navbar: React.FC = async () => {
  const session = await getCurrentUser();

  console.log(session);

  return (
    <nav className="flexBetween navbar">
      <div className="flex-1 flexStart gap-10">
        <Link href="/">
          <Image
            src="/favicon.ico"
            alt="Freelancers Marketplace"
            width={115}
            height={43}
          ></Image>
        </Link>
        <ul className="xl:flex hidden gap-7 text-small">
          {NavLinks.map((link) => (
            <Link href={link.href} key={link.key}>
              {link.text}
            </Link>
          ))}
        </ul>
      </div>

      <div className="flexCenter gap-4">
        {session?.user ? (
          <>
            <ProfileMenu session={session} />
            <Link href="/create-post">+ Share Post</Link>
          </>
        ) : (
          <AuthProviders />
        )}
      </div>
    </nav>
  );
};

export default Navbar;
