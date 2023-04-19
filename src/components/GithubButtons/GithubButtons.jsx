import React from 'react';
import GitHubButton from 'react-github-btn';

const GithubButton = () => (
  <>
    <GitHubButton
      className="github-button"
      href="https://github.com/JadeRemi/netlify-gatsby/fork"
      data-icon="octicon-repo-forked"
      data-size="large"
      data-show-count="true"
      aria-label="Fork JadeRemi/netlify-gatsby on GitHub"
    >
      Fork
    </GitHubButton>
    <GitHubButton
      className="github-button"
      href="https://github.com/JadeRemi/netlify-gatsby"
      data-icon="octicon-star"
      data-size="large"
      data-show-count="true"
      aria-label="Star JadeRemi/netlify-gatsby on GitHub"
    >
      Star
    </GitHubButton>
  </>
);

export default GithubButton;
