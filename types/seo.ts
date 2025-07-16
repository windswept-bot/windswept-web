export type SEOConfig = {
  title?: string;
  description?: string;
  openGraph?: {
    basic?: {
      title?: string;
      type?: string;
      image?: string;
    };
  };
  twitter?: {
    creator?: string;
  };
  extend?: {
    link?: Array<{ rel: string; href: string }>;
    meta?: Array<{ name: string; content: string }>;
  };
};
