# Email to Name
A Node.js and web browser compatible script that takes an email address and tries to generate a name.

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
`titleCase` | `true` | `tait.brown@gmail.com` | `Tait Brown` | `tait brown`
`caseMc` | `true` | `john.mckim@gmail.com` | `John McKim` | `John Mckim`
`caseLetterApostrophe` | `true` | `flannery.o'connor@gmail.com` | `Flannery O'Connor` | `Flannery O'connor`
`removeNumbers` | `true` | `tait123@gmail.com` | `Tait` | `Tait123`

## Development

Run tests. Requires yarn.

`yarn test`