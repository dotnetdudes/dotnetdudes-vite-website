const articlesTemplate /*html*/  = `
    <article>
        <div class="article-item-container">
            <header class="article-item-header">
                <h2><a href="#">Item title</a></h2>
                <div class="article-item-metadata">
                    Posted: <time></time>
                </div>
            </header>
            <div class="article-item-summary">
                <figure></figure>
                <p></p>
                <p>Read more...</p>
            </div>
            <footer>
                <div class="article-item-tags"></div>
                <span>Comments: disabled</span>
            </footer>
        </div>
    </article>
`;

export default articlesTemplate;
