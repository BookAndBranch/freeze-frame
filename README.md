# Freeze Frame
For researchers of infant cognition and human development, Freeze Frame is an interactive computer application that provides experimental control of visual cues, animation and stimuli for scientific trials of early visual inhibition. The software is derived from the behavior and code used in [established research](http://doi.org/10.1016/j.jecp.2007.09.004) and supports data collection for a lab environment using Microsoft Windows 10.

> Holmboe, K., Fearon, R. M. P., Csibra, G., Tucker, L. A., & Johnson, M. H. (2008). Freeze-Frame: A new infant inhibition task and its relation to frontal cortex tasks during infancy and early childhood. Journal of Experimental Child Psychology, 100, 89–114.

:rocket: The [latest version](https://bookandbranch.github.io/freeze-frame/) of the Freeze Frame (2017) software is available as a hosted application.

# Development Guide
- [Installation](#installation)
- [Development](#development)

## Installation

Install dependencies using [Yarn](https://yarnpkg.com):
```sh
yarn install
```

This software uses [webpack] to compile JavaScript, [Less](https://lesscss.org/) styles, images and sound clips into a single package. Browser compatibility is automated using [Babel](https://babeljs.io/) and includes Internet Explorer 11 and the two (2) most recent versions of other major desktop browsers.

## Development
Start a local server:
```sh
yarn start
```
Run tests using [Jest](https://facebook.github.io/jest/):
```sh
yarn test
```
…or test continuously as you make changes with:
```sh
yarn jest
```
Run UI tests in a browser using [Tape](https://github.com/substack/tape):
```sh
yarn test:browser
```
Run all tests and create a production-ready release in `public`:
```sh
yarn release
```

# Acknowledgements

Funding for the Freeze Frame software was supported by grant R03HD091644 from the Eunice Kennedy Shriver National Institute of Child Health and Human Development (NICHD/NIH) awarded to Martha Ann Bell. The content of this software and resulting research publications is solely the responsibility of the authors and does not necessarily represent the official view of the National Institutes of Health. We are grateful that Karla Holmboe and Gergley Csibra shared their original Freeze Frame source code and stimuli with us. The original Freeze Frame publication can be found at: Holmboe, K., Fearon, R.M.P., Csibra, G., Tucker, L.A., & Johnson, M.H. (2008). Freeze-Frame: A new infant inhibition task and its relation to frontal cortex tasks during infancy and early childhood. Journal of Experimental Child Psychology, 100, 89-114.
 
# License

MIT

[webpack]: https://webpack.github.io
