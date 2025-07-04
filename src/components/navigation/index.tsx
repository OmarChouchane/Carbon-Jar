import { tw } from 'twind';
import { useState } from 'react';
import Button from '@/components/button';

interface IMenuButton {
  toggleMenu: React.MouseEventHandler<HTMLButtonElement>;
  showMenu: boolean;
}

type Link = {
  label: string;
  href: string;
};

const links = [
  {
    label: `Home`,
    href: `/`,
  },
  {
    label: `About us`,
    href: `/about`,
  },
  {
    label: `Expertise`,
    href: `/expertise`,},
  {
    label: `Trainings`,
    href: `/trainings`,
  },
  {
    label: `Resources`,
    href: `/`,
  },
  {
    label: `Careers`,
    href: `/`,
  },
];



const MenuButton = ({ toggleMenu, showMenu }: IMenuButton) => (
  <button
    type="button"
    aria-controls="mobile-menu"
    aria-expanded={showMenu}
    onClick={toggleMenu}
    className={tw`p-2 text-white`}  
  >
    <span className={tw`sr-only`}>Open menu</span>
    {showMenu ? (
      <svg
        className={tw`h-6 w-6 text-white`}  
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
      </svg>
    ) : (
      <svg
        className={tw`h-6 w-6 text-white`}  
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke="currentColor"
        aria-hidden="true"
        width={24}
        height={24}
      >
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
      </svg>
    )}
  </button>

);

const MobileMenu = () => (
  <div className={tw(`md:hidden`)}>
    <div className={tw(`px-2 pt-2 pb-3 space-y-1 sm:px-3`)}>
      {links.map((link: Link) => (
        <a href={link.href} className={tw(`text-white block px-3 py-2 text-base font-medium`)} key={link.label}>
          {link.label}
        </a>
      ))}
    </div>
  </div>
);

const Navigation = () => {
  const [showMenu, setShowMenu] = useState(false);
  const toggleMenu = () => setShowMenu(!showMenu);

  return (
    <nav className={tw(`bg-green lg:mx-32 sm:mx-8 md:mx-12  lg:mt-8 md:mt-10 px-4 sm:px-4 lg:px-4 rounded-lg lg:rounded-xl border border-border-white`)}> 
      <div className={tw(`flex items-center justify-between lg:h-20 md:h-20 sm:h-18  px-4 sm:px-1 lg:px-1 mx-auto `)}> 
      <div className={tw(`flex-shrink-0`)}>
             <a href="/"><img className={tw(`h-12 w-12`)} src="logoCarbonJar.svg" alt="logo" width={48} height={48} />
            </a></div>
          <div className={tw(`flex items-center justify-between `)}> 
            <div className={tw(`hidden md:block flex-1 justify-center`)}>
              <div className={tw(`ml-10  items-baseline lg:space-x-4 `)}>
                {links.map((link: Link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    className={tw(`text-white hover:text-light-green px-3 py-2 rounded-md font-Inter`)}
                  >
                    {link.label}
                  </a>
                ))}
              </div>
            </div>
          </div>
          <div className={tw(`hidden md:block`)}>
            <div className={tw(`ml-4 flex items-center md:ml-10`)}>
              
              <Button>Contact us</Button>
            </div>
          </div>
          <div className={tw(`-mr-2 flex md:hidden`)}>
            <MenuButton showMenu={showMenu} toggleMenu={toggleMenu} />
          </div>
        </div>
      
      {showMenu ? <MobileMenu /> : null}
    </nav>
  );
};

export default Navigation;
