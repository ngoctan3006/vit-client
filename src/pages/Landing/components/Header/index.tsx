export { default as HeaderDesktop } from './Desktop';
export { default as HeaderMobile } from './Mobile';

interface Link {
  title: string;
  id: string;
}

export const HEADER_LINKS: Link[] = [
  {
    title: 'Thông tin chung',
    id: 'about',
  },
  {
    title: 'Các hoạt động nổi bật',
    id: 'about',
  },
  {
    title: 'Những gương mặt tiêu biểu',
    id: 'about',
  },
  {
    title: 'Liên hệ',
    id: 'about',
  },
];
