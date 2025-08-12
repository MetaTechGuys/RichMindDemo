// const vercelCDN = 'https://dxsqole8a0eh2pol.public.blob.vercel-storage.com';
// const imagekitCDN = 'https://ik.imagekit.io/richmind/cdn';
const jsDeliverCDN = 'https://cdn.jsdelivr.net/gh/MetaTechGuys/RichMindDemo/public';
const nextjsFolder = '';

export const CDN_BASE = process.env.NODE_ENV === 'production' ? jsDeliverCDN : nextjsFolder;

export const MEDIA = {
  logomotion: CDN_BASE + '/video/logomotion.webm',
  heroAudio: CDN_BASE + '/audio/richmind-corporate-video-3-lq.mp3',
  globe: CDN_BASE + '/video/0101.webm',
  RAK: CDN_BASE + '/video/richmind-corporate-video-3-lq.webm',
  RAKFallback1: '/video/richmind-corporate-video-3-lq.webm',
  gallery011: CDN_BASE + '/video/011.webm',
  gallery02: CDN_BASE + '/video/02.webm',
  gallery021: CDN_BASE + '/video/021.webm',
  gallery031: CDN_BASE + '/video/031.webm',
  gallery04: CDN_BASE + '/video/04.webm',
  gallery05: CDN_BASE + '/video/05.webm',
  blackBackground: CDN_BASE + '/video/0505.webm',
  canada: CDN_BASE + '/video/Canada.webm',
  china: CDN_BASE + '/video/China.webm',
  dubai: CDN_BASE + '/video/Dubia.webm',
  frence: CDN_BASE + '/video/France.webm',
  germany: CDN_BASE + '/video/Germany.webm',
  india: CDN_BASE + '/video/India.webm',
  italy: CDN_BASE + '/video/Italy.webm',
  london: CDN_BASE + '/video/London.webm',
  mapWhite: CDN_BASE + '/video/worldmap-white.webm',
  mapPart1: CDN_BASE + '/video/Part1.webm',
  mapPart2: CDN_BASE + '/video/Part2.webm',
  portughal: CDN_BASE + '/video/Portughal.webm',
  richmindIntroDemo: CDN_BASE + '/video/richmind-corporate-video-demo.webm',
  richmindIntro: CDN_BASE + '/video/richmind-corporate-video.webm',
  richmindIntroFallback1: '/video/richmind-corporate-video.webm',
  saudi: CDN_BASE + '/video/Saudi.webm',
  southAfrica: CDN_BASE + '/video/South-africa.webm',
  spain: CDN_BASE + '/video/Spain.webm',
  uae: CDN_BASE + '/video/Uae.webm',
  usa: CDN_BASE + '/video/Usa.webm',
  aboutUs: CDN_BASE + '/video/about-us.webm',
  black: CDN_BASE + '/video/black.webm',
  galleryTop: CDN_BASE + '/video/gallery-top.webm',
  siteBanner_old: CDN_BASE + '/video/site-banner.webm',
  siteBanner: jsDeliverCDN + '/video/baner-site-2.webm',
  siteBannerFallback1: '/video/baner-site-2.webm',
  siteBannerFallback2: '/video/baner-site-2.mp4',
  // needs video
  aus: CDN_BASE + '/video/Saudi.webm',
  jpn: CDN_BASE + '/video/Saudi.webm',
  try: CDN_BASE + '/video/Saudi.webm',
} as const;

export const POSTERS = {
  richmindCorporate: '/posters/richmind-corporate.webp',
  siteBanner: '/posters/site-banner.webp',
  RAK: '/posters/gallery-main.webp',
  gallery011: '/posters/011.webp',
  gallery02: '/posters/02.webp',
  gallery021: '/posters/021.webp',
  gallery031: '/posters/031.webp',
  gallery04: '/posters/04.webp',
  gallery05: '/posters/05.webp',
  galleryTop: '/posters/top.webp',
  purpleglobe: '/posters/purple-globe.webp',
  black: '/posters/black.webp',
  blackDot: 'data:image/gif;base64,R0lGODlhAQABAIAAAAUEBAAAACwAAAAAAQABAAACAkQBADs=',
  darkPurpleDot:
    'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR4AWJiZ5X5DwAAAP//BfvfEAAAAAZJREFUAwABcQEqmU32+wAAAABJRU5ErkJggg==',
} as const;
