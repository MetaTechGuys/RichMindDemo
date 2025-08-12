import { mdxWithData, WithContent } from '../utils';
import * as investmentMdx from './investment.mdx';
import * as virtualAssetsMdx from './virtual-assets.mdx';
import * as mediaMdx from './media.mdx';
import * as propertiesMdx from './properties.mdx';
import * as projectManagerMdx from './project-manager.mdx';
import * as developmentMdx from './development.mdx';
import * as holidayMdx from './holiday.mdx';
import * as cosmomedMdx from './cosmomed.mdx';
import * as vipClubMdx from './vip-club.mdx';
import * as sportMdx from './sport.mdx';
import * as academyMdx from './academy.mdx';
import * as tradingMdx from './trading.mdx';

import { StaticImageData } from 'next/image';

export interface CompanyData {
  title: string;
  slug: string;
  image: StaticImageData;
  imgClassName?: string;
  link?: string;
}

const mdxWithCompany = (mdx: typeof import('*.mdx'), imgClassName = '') => ({
  ...mdxWithData<CompanyData>(mdx),
  imgClassName,
});

export const companies: WithContent<CompanyData>[] = [
  mdxWithCompany(investmentMdx),
  mdxWithCompany(virtualAssetsMdx),
  mdxWithCompany(mediaMdx),
  mdxWithCompany(propertiesMdx),
  mdxWithCompany(projectManagerMdx),
  mdxWithCompany(developmentMdx),
  mdxWithCompany(holidayMdx),
  mdxWithCompany(cosmomedMdx),
  mdxWithCompany(vipClubMdx),
  mdxWithCompany(sportMdx),
  mdxWithCompany(academyMdx, 'object-left'),
  mdxWithCompany(tradingMdx),
];
