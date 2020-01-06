# git-flush-cli


<a href="https://actions-badge.atrox.dev/Jaid/git-flush-cli/goto"><img src="https://img.shields.io/endpoint.svg?style=flat-square&url=https%3A%2F%2Factions-badge.atrox.dev%2FJaid%2Fgit-flush-cli%2Fbadge" alt="Build status"/></a> <a href="https://raw.githubusercontent.com/Jaid/git-flush-cli/master/license.txt"><img src="https://img.shields.io/github/license/Jaid/git-flush-cli?style=flat-square" alt="License"/></a>  
<a href="https://github.com/Jaid/git-flush-cli/commits"><img src="https://img.shields.io/github/commits-since/Jaid/git-flush-cli/v2.0.1?style=flat-square&logo=github" alt="Commits since v2.0.1"/></a> <a href="https://github.com/Jaid/git-flush-cli/commits"><img src="https://img.shields.io/github/last-commit/Jaid/git-flush-cli?style=flat-square&logo=github" alt="Last commit"/></a> <a href="https://github.com/Jaid/git-flush-cli/issues"><img src="https://img.shields.io/github/issues/Jaid/git-flush-cli?style=flat-square&logo=github" alt="Issues"/></a>  
<a href="https://npmjs.com/package/git-flush-cli"><img src="https://img.shields.io/npm/v/git-flush-cli?style=flat-square&logo=npm&label=latest%20version" alt="Latest version on npm"/></a> <a href="https://github.com/Jaid/git-flush-cli/network/dependents"><img src="https://img.shields.io/librariesio/dependents/npm/git-flush-cli?style=flat-square&logo=npm" alt="Dependents"/></a> <a href="https://npmjs.com/package/git-flush-cli"><img src="https://img.shields.io/npm/dm/git-flush-cli?style=flat-square&logo=npm" alt="Downloads"/></a>

**CLI version of git-flush, commits and pushed git changes if repository is dirty.**












## Installation
<a href="https://npmjs.com/package/git-flush-cli"><img src="https://img.shields.io/badge/npm-git--flush--cli-C23039?style=flat-square&logo=npm" alt="git-flush-cli on npm"/></a>
```bash
npm install --global git-flush-cli@^2.0.1
```
<a href="https://yarnpkg.com/package/git-flush-cli"><img src="https://img.shields.io/badge/Yarn-git--flush--cli-2F8CB7?style=flat-square&logo=yarn&logoColor=white" alt="git-flush-cli on Yarn"/></a>
```bash
yarn global add git-flush-cli@^2.0.1
```




## CLI Usage
After installing package `git-flush-cli` globally, you can use its command line interface.
```bash
git-flush-cli "Edited some files"
```
For usage instructions:
```bash
git-flush-cli --help
```



## Development



Setting up:
```bash
git clone git@github.com:Jaid/git-flush-cli.git
cd git-flush-cli
npm install
```
Testing:
```bash
npm run test:dev
```
Testing in production environment:
```bash
npm run test
```


## License
```text
MIT License

Copyright © 2020, Jaid <jaid.jsx@gmail.com> (github.com/jaid)

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.
```
