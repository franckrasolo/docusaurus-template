import type * as PluginContentDocs from '@docusaurus/plugin-content-docs';
import type * as Preset from '@docusaurus/preset-classic';
import type {Config} from '@docusaurus/types';
import path from 'path';

const copyright = `Copyright © ${new Date().getFullYear()} My Docusaurus Site.`;

const config: Config = {
  title: 'My Docusaurus Site',
  tagline: 'Dinosaurs are cool',
  organizationName: 'TBD',
  projectName: 'my-docusaurus-site',
  url: 'https://docusaurus.io',
  baseUrl: '/',
  future: {
    experimental_faster: true,
  },
  trailingSlash: false, // because trailing slashes can break some existing relative links
  scripts: [
    {
      src: 'https://cdn.jsdelivr.net/npm/focus-visible@5.2.0/dist/focus-visible.min.js',
      defer: true,
    },
    {
      src: 'https://widget.surveymonkey.com/collect/website/js/tRaiETqnLgj758hTBazgd8ryO5qrZo8Exadq9qmt1wtm4_2FdZGEAKHDFEt_2BBlwwM4.js',
      defer: true,
    },
    {src: 'https://snack.expo.dev/embed.js', defer: true},
    {src: 'https://platform.twitter.com/widgets.js', async: true},
  ],
  favicon: 'img/favicon.ico',
  titleDelimiter: '·',
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },
  onBrokenLinks: 'warn',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: './sidebars.ts',
        },
        blog: {
          path: 'blog',
          blogTitle: 'My Docusaurus Blog',
          blogDescription: 'Musings from Jurassic times...',
          blogSidebarCount: 'ALL',
          blogSidebarTitle: 'All Posts',
          showLastUpdateAuthor: true,
          showLastUpdateTime: true,
          showReadingTime: true,
          postsPerPage: 5,
          feedOptions: {
            type: ['rss', 'atom'],
            copyright: copyright,
            xslt: true,
          },
          // Useful options to enforce blogging best practices
          onInlineTags: 'warn',
          onInlineAuthors: 'warn',
          onUntruncatedBlogPosts: 'warn',
        },
        theme: {
          customCss: [
            require.resolve('./src/css/customTheme.scss'),
            require.resolve('./src/css/index.scss'),
            require.resolve('./src/css/showcase.scss'),
            require.resolve('./src/css/versions.scss'),
          ],
        },
      } satisfies Preset.Options,
    ],
  ],
  plugins: [
    'docusaurus-plugin-sass',
  ],
  themes: [
    [
      require.resolve("@easyops-cn/docusaurus-search-local"),
      /** @type {import("@easyops-cn/docusaurus-search-local").PluginOptions} */
      ({
        indexBlog: true,
        indexDocs: true,
        indexPages: true,
        hashed: true, // recommended as long-term cache of index file is possible
        highlightSearchTermsOnTargetPage: true,
        language: ["en"],
        searchBarPosition: "auto",
        searchBarShortcut: true,
        searchBarShortcutHint: true,
        searchResultLimits: 10,
        searchResultContextMaxLength: 240,
      }),
    ],
  ],
  themeConfig: {
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },
    announcementBar: {
      id: 'banner',
      content:
        '✨ New Docusaurus template styled after the clean <a target="_blank" rel="noopener noreferrer" href="https://reactnative.dev/">React Native</a> docs ✨',
      backgroundColor: '#20232a',
      textColor: '#fff',
      isCloseable: true,
    },
    prism: {
      defaultLanguage: 'plain',
      theme: require('./core/PrismTheme'),
      additionalLanguages: [
        'applescript',
        'bash',
        'diff',
        'editorconfig',
        'graphql',
        'haskell',
        'hcl',
        'java',
        'jq',
        'json',
        'json5',
        'jsx',
        'kotlin',
        'lua',
        'markdown',
        'mermaid',
        'moonscript',
        'nix',
        // 'plantuml',
        'python',
        'rust',
        // 'shell',
        'sql',
        // 'svg',
        'swift',
        'toml',
        'tsx',
        'typescript',
        'yaml',
      ],
      magicComments: [
        {
          className: 'theme-code-block-highlighted-line',
          line: 'highlight-next-line',
          block: {start: 'highlight-start', end: 'highlight-end'},
        },
        {
          className: 'code-add-line',
          line: 'highlight-add-next-line',
          block: {start: 'highlight-add-start', end: 'highlight-add-end'},
        },
        {
          className: 'code-remove-line',
          line: 'highlight-remove-next-line',
          block: {
            start: 'highlight-remove-start',
            end: 'highlight-remove-end',
          },
        },
      ],
    },
    navbar: {
      title: 'My Docusaurus Site',
      logo: {
        src: 'img/logo.svg',
        alt: 'My Docusaurus Site',
      },
      style: 'dark',
      items: [
        {
          label: 'Tutorials',
          type: 'dropdown',
          position: 'right',
          items: [
            {
              label: 'Basics',
              type: 'doc',
              docId: '/category/tutorial---basics',
            },
            {
              label: 'Extras',
              type: 'doc',
              docId: '/category/tutorial---extras',
            },
          ],
        },
        {
          to: '/blog',
          label: 'Blog',
          position: 'right',
        },
        {
          href: 'https://github.com/facebook/docusaurus',
          'aria-label': 'GitHub repository',
          className: 'navbar-github-link',
          position: 'right',
        },
      ],
    },
    image: 'img/logo-share.png',
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Tutorials',
          items: [
            {
              label: 'Basics',
              to: 'docs/category/tutorial---basics',
            },
            {
              label: 'Extras',
              to: 'docs/category/tutorial---extras',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Help',
              href: 'https://docusaurus.io/community/support',
            },
            {
              label: 'Feature Requests',
              href: 'https://docusaurus.io/feature-requests',
            },
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
      logo: {
        alt: 'Dinosaur Logo',
        src: 'img/logo.svg',
        href: 'https://docusaurus.io',
      },
      copyright,
    },
    metadata: [
      {
        property: 'og:image',
        content: 'https://reactnative.dev/img/logo-share.png',
      },
      {name: 'twitter:card', content: 'summary_large_image'},
      {
        name: 'twitter:image',
        content: 'https://reactnative.dev/img/logo-share.png',
      },
      {name: 'twitter:site', content: '@reactnative'},
    ],
  } satisfies Preset.ThemeConfig,
};

module.exports = config;
