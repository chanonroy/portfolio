<p align="center">
  <img alt="Gatsby" src="./src/images/roy.png" width="60" />
</p>
<h1 align="center">
  My portfolio website
</h1>

<p align="center">
  This is version 2.0 of my portfolio site that is spun up using Gatsby.
</p>

## 📦 Project Setup

1.  **Install dependencies**

    Use the [yarn](https://classic.yarnpkg.com/en/) package manager to install dependencies

    ```shell
    yarn
    ```

1.  **Start developing.**

    Start the development server with the following command:

    ```shell  
    yarn develop
    ```

1.  **Linting**

    To use proper code formatting, this project is setup with eslint + typescript

    ```shell  
    yarn lint --fix
    ```
## 🚀 Deployment

  The code for this project is deployed to my personal [GitHub Pages](https://pages.github.com/) account and uses a custom domain to point to [chanonroy.com](https://chanonroy.com).

  There are two important branches for this projects:
  - `develop` - where Gatsby code is written and tested
  - `master` - where Gatsby static code is exported and picked up by GitHub pages. (Don't touch this).

  Make code changes by branching off of `develop` and open a pull request when ready to review. If everything looks good, squash and merge the pull request into develop and GitHub actions will automatically handle the deploy to the `master` branch.

  If needed, the repo is setup to trigger a manual Gatsby gh-pages deploy as described [here](https://www.gatsbyjs.org/docs/how-gatsby-works-with-github-pages/#deploying-to-a-path-on-github-pages).
