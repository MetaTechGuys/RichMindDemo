interface LinkData {
  title: string;
  href: `/${string}`;
  hash?: `#${string}`;
  mobile?: boolean;
}

export const links: LinkData[] = [
  {
    title: 'Home',
    href: '/',
    mobile: true,
  },
  {
    title: 'Branches',
    href: '/',
    hash: '#worldmap',
  },
  {
    title: 'Standards',
    href: '/',
    hash: '#standards',
  },
  {
    title: 'Companies',
    href: '/',
    hash: '#companies',
  },
  {
    title: 'Strategy',
    href: '/',
    hash: '#strategy',
  },
  {
    title: 'About Us',
    href: '/about-us',
    mobile: true,
  },
];
