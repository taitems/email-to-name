# Email to Name [![Build Status](https://travis-ci.org/taitems/email-to-name.svg?branch=master)](https://travis-ci.org/taitems/email-to-name) [![Reviewed by Hound](https://img.shields.io/badge/Reviewed_by-Hound-8E64B0.svg)](https://houndci.com)
A Node.js and web browser compatible script that takes an email address and tries to generate a name.

![image](https://i.imgur.com/dgshroz.png)

## Company Names
Privacy conscious individuals often use the name of website as the email identifier. If Jane Smith has her own domain name with an email server, she might sign up as `suspiciouswebsite@janesmith.com`. That way if "Suspicious Website" ends up selling her email address on to a third party, if they send this exact email address spam, it's possible to see who leaked her email address.

It's also therefore possible to invert this method and detect the personal domain if the email identifier matches your company/website name.

**No Company Names**
- `emailToName.process('acloudguru@janesmith.com')`
  - Output: `Acloudguru`

**With Company Names**
- `emailToName.process('acloudguru@janesmith.com', ['acg', 'acloudguru'])`
  - Output: `Janesmith`

## Common Email Identifiers
Users who operate a personal email domain sometimes use prefixes like `contact`, `hello`, `me` and others. This script also tries to invert those.

## Parameters

Value | Default | Example (Input) | Example (On) | Example (Off)
--- | --- | --- | --- | ---
`removePlusWords` | `true` | `tait.brown+test@gmail.com` | `Tait Brown` | `Tait Brown+test`
`removeNumbers` | `true` | `tait123@gmail.com` | `Tait` | `Tait123`
`titleCase` | `true` | `tait.brown@gmail.com` | `Tait Brown` | `tait brown`
`caseMc` | `true` | `john.mckim@gmail.com` | `John McKim` | `John Mckim`
`caseLetterApostrophe` | `true` | `flannery.o'connor@gmail.com` | `Flannery O'Connor` | `Flannery O'connor`
`uppercaseGenerationalNumbers` | `true` | `tait.brown.iii@gmail.com` | `Tait Brown III` | `Tait Brown Iii`
`commaPrependGenerationalPhrase` | `true` | `tait.brown.jr@gmail.com` | `Tait Brown, Jr.` | `Tait Brown Jr`
`appendPeriodToTitlePrefix` | `true` | `prof.tait.brown@gmail.com` | `Prof. Tait Brown` | `Prof Tait Brown`

## Default Values

#### Common Personal Identifiers
Attempt to use the domain name as the personal identifier when these common email identifiers are used `'hello', 'me', 'email', 'contact'`

#### Generational Suffixes
Prepend a comma and append a period for the following, when at the end of a string and preceded by a space `'jr', 'jnr', 'sr', 'snr'`

#### Generational Numbers
Uppercase these whe at the end of a string and preceded by a space `'ii', 'iii', 'iv'`

#### Titles
Append a period when the following occur at the beginning of a string and are followed by a space `'mr', 'mrs', 'ms', 'dr', 'prof'`

## Development

Run tests. Requires yarn.

`yarn test`

## Changelog
- `0.2.0` **Bugfix:** Couldn't use in browser due to `module` check
- `0.1.0` added generational handling (Jr, Sr, III etc) as well as titles (Mr, Mrs, Dr, Prof)
- `0.0.0` init commit
