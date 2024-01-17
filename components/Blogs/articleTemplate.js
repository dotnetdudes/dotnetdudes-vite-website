const articleTemplate = /* html */ `
<article itemscope itemtype="https://schema.org/BlogPosting" itemid="https://www.dataliberate.com/2019/05/14/library-metadata-evolution-final-mile/" itemprop="blogPost">
  <meta itemprop="wordCount" content="481">
  <header>
    <h1 itemprop="name headline">Library Metadata Evolution: The Final Mile</h1>
    <div>
      <p>Posted by <span itemprop="author" itemscope itemtype="https://schema.org/Person">
          <span itemprop="name">
            <a itemprop="url" href="https://www.dataliberate.com/author/richard-wallis/">Richard Wallis</a>
          </span>
        </span> in <span itemprop="locationCreated">Winton on the Green</span> on <time itemprop="datePublished" datetime="2019-05-14T17:30:57+01:00">May 14, 2019</time>, and updated on <time itemprop="dateModified" datetime="2023-03-01T17:18:17+01:00">March 1, 2023</time>.</p>
    </div>
  </header>
  <section itemprop="abstract">
    <h2>Abstract</h2>
    <p>When Schema.org arrived on the scene I thought we might have arrived at the point where library metadata could finally blossom; adding value outside of library systems to help library curated resources become first class citizens, and hence results, in the global web we all inhabit. But as yet it has not happened.</p>
  </section>
  <hr>
  <section itemprop="articleBody">
    <h2>Introduction</h2>
    <p>I have been rattling around the library systems industry/sector for nigh on thirty years, with metadata always being somewhere near the core of my thoughts. From that time as a programmer wrestling with the new to me ‘so-called’ standard <abbr title="Machine-Readable Cataloging">MARC</abbr>; reacting to meet the challenges of the burgeoning web; through the elephantine gestation of <abbr title="Resource Description & Access">RDA</abbr>; several experiments with linked library data; and the false starts of <abbr title="Bibliographic Framework">BIBFRAME</abbr>, it has consistently never scaled to the real world beyond the library walls and firewall.</p>
  </section>
  <section>
    <h2>Comments ( <span itemprop="commentCount">1</span>) </h2>
    <div itemscope itemtype="https://schema.org/Comment">
      <p itemprop="author" itemscope itemtype="https://schema.org/Person">
        <span itemprop="name">
          <a itemprop="url" href="https://schoenstatt.link/en/">Jeff</a>
        </span>
      </p>
      <p itemprop="text">I've been looking for a decent metadata scheme for use in a home-brew library system for the past 4 years now.</p>
      <p>Comment posted on <time itemprop="datePublished" datetime="2019-06-23T17:31:15+01:00"></time>
      </p>
    </div>
  </section>
  <footer>
    <p>Tagged with: <span itemprop="keywords">Bibframe2Schema.org, Libraries, Library of Congress</span>
    </p>
    <p itemprop="copyrightNotice">© 2019 <span itemprop="publisher" itemscope itemtype="https://schema.org/Organization">
        <span itemprop="name">Dataliberate</span>
      </span>
    </p>
  </footer>
</article>
`;

export default articleTemplate;
