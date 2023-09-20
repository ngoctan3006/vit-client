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
    id: 'featured-activities',
  },
  {
    title: 'Những gương mặt tiêu biểu',
    id: 'featured-members',
  },
  {
    title: 'Liên hệ',
    id: 'contact',
  },
];
