const commentTemplate = /* html */ `
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
`;

export default commentTemplate;
