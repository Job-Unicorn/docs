export default {
  github: 'https://github.com/Job-Unicorn/docs',
  docsRepositoryBase: 'https://github.com/Job-Unicorn/docs/blob/master',
  titleSuffix: ' – Job Unicorn',
  logo: (
    <>
      <span className="mr-2 font-extrabold hidden md:inline">Job Unicorn</span>
      <span className="text-gray-600 font-normal hidden md:inline">
        Making Hiring Easier
      </span>
    </>
  ),
  head: (
    <>
      <link rel="icon" href="/favicon.ico" />


      <title>Docs</title>
      <meta name="title" content="Job Unicorn — The Best Job Search Tool on the Web." />
      <meta name="description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position." />


      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://jobunicorn.tech/" />
      <meta property="og:title" content="Docs — Job Unicorn — The Best Job Search Tool on the Web." />
      <meta property="og:description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position." />
      <meta property="og:image" content="https://jobunicorn.tech/banner.png" />


      <meta property="twitter:card" content="summary_large_image" />
      <meta property="twitter:url" content="https://jobunicorn.tech/" />
      <meta property="twitter:title" content="Docs — Job Unicorn — The Best Job Search Tool on the Web." />
      <meta property="twitter:description" content="Are you looking for a job? We've partnered with some of the best employers in the world to help you find the perfect job. Job Unicorn is the best place to find your next position." />
      <meta property="twitter:image" content="https://jobunicorn.tech/banner.png"></meta>
    </>
  ),
  search: true,
  prevLinks: true,
  nextLinks: true,
  footer: true,
  footerEditLink: 'Edit this page on GitHub',
  footerText: <> {new Date().getFullYear()} © Job Unicorn</>,
  unstable_faviconGlyph: '🦄',
}
