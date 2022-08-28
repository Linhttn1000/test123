import {
  Facebook,
  Instagram,
  Pinterest,
  Twitter,
  Wifi,
  YouTube,
  Translate,
  ContactMail,
  AccountBalance,
  ContactSupport,
  SelfImprovement,
  ContactMailOutlined,
} from '@mui/icons-material';

export const FOOTER_SOCIAL_NETWORKS = [
  {
    id: 'facebook',
    icon: <Facebook />,
  },
  {
    id: 'twitter',
    icon: <Twitter />,
  },
  {
    id: 'instagram',
    icon: <Instagram />,
  },
  {
    id: 'youtube',
    icon: <YouTube />,
  },
  {
    id: 'pinterest',
    icon: <Pinterest />,
  },
  {
    id: 'wifi',
    icon: <Wifi />,
  },
  {
    id: 'translate-language',
    icon: (
      <>
        <Translate /> Language
      </>
    ),
  },
];

export const FOOTER_ADDITIONAL_INFO = [
  [
    {
      id: 'send_feedback',
      title: 'Send feedback',
      icon: null,
    },
    {
      id: 'about_us',
      title: 'About us',
      icon: <ContactMail />,
    },
  ],
  [
    {
      id: 'privacy_policy',
      title: 'Privacy policy',
      icon: <AccountBalance />,
    },
    {
      id: 'support',
      title: 'Support',
      icon: <ContactSupport />,
    },
  ],
  [
    {
      id: 'careers',
      title: 'Careers',
      icon: <SelfImprovement />,
    },
    {
      id: 'testimonials',
      title: 'Testimonials',
      icon: <ContactMailOutlined />,
    },
  ],
];
