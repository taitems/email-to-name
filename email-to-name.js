(function() {

    var emailToName = (function() {

        var defaults = {
            removeNumbers: true,
            removePlusWords: true,
            titleCase: true,
            caseMc: true,
            caseLetterApostrophe: true,
            uppercaseGenerationalNumbers: true,
            commaPrependGenerationalPhrase: true,
            appendPeriodToTitlePrefix: true,
        };

        var commonPersonalIdentifiers = ['hello', 'me', 'email', 'contact'];
        var titles = ['mr', 'mrs', 'ms', 'dr', 'prof'];
        var suffixes = ['jr', 'jnr', 'sr', 'snr'];
        var suffixesUpper = ['ii', 'iii', 'iv'];

        return {
            process: process
        };

        //////////////////

        function process(str, companyNames, params) {

            // TODO: Preprocess?
            var settings = Object.assign({}, defaults, params);

            // Is the email address identified a common "hello" type string?
            var identifierIsCommon = matchIdentifierToList(str, commonPersonalIdentifiers);

            // Is the email address from someone with a personal domain?
            // Checks email address for company name as the identifier
            var domainIsIdentifier = matchIdentifierToList(str, companyNames);

            // Get the true identifier
            // -> `companyname@personaldomain.com`. to `personaldomain`
            // -> `john.smith@gmail.com` to `john.smith`
            var output = (identifierIsCommon || domainIsIdentifier) ? reverseDomainAndIdentifier(str) : str.split('@')[0];


            // Drop everything after the '+'
            // `john.smith+test` to `john.smith`
            if (settings.removePlusWords) {
                output = output.split('+')[0];
            }

            if (settings.removeNumbers) {
                output = output.replace(/\d/g,'');
            }

            // Replace periods with spaces
            // `john.smith` to `john smith`
            output = output.replace(/\./g,' ');

            // Replace underscores with spaces
            // `john_smith` to `john smith`
            output = output.replace(/_/g,' ');

            // Replace duplicate strings from inside
            // `john    smith` to `john smith`
            output = output.replace(/\s\s+/g, ' ');

            // Replace whitespace from both sites of string
            // `  john smith  ` to `john smith`
            output = output.trim();

            // Title case
            // `john smith` to `John Smith`
            if (settings.titleCase) {
                output = titleCase(output);
            }

            // Handle Generational (The Third) names
            // `John Smith Iii` to `John Smith III`
            if (settings.uppercaseGenerationalNumbers) {
                suffixesUpper.forEach(function(suffix) {
                    var rx = new RegExp('\\s(' + suffix + ')$','gi');
                    output = output.replace(rx, function(s) {
                        return s.toUpperCase();
                    });
                });
            }

            // Handle 'Jr/Sr' names
            // `John Smith Jr` to `John Smith, Jr.`
            if (settings.commaPrependGenerationalPhrase) {
                suffixes.forEach(function(suffix) {
                    var rx = new RegExp('\\s(' + suffix + ')$','gi');
                    output = output.replace(rx, function(s) {
                        return ',' + s + '.';
                    });
                });
            }

            // Handle title prefixes names
            // `Dr John Smith` to `Dr. John Smith`
            if (settings.appendPeriodToTitlePrefix) {
                titles.forEach(function(prefix) {
                    var rx = new RegExp('^(' + prefix + ')\\s','gi');
                    output = output.replace(rx, function(s) {
                        return s.replace(' ', '. ');
                    });
                });
            }

            // Handle 'Mc' names
            // `Marty Mcfly` to `Marty McFly`
            if (settings.titleCase && settings.caseMc) {
                output = output.replace(/Mc(.)/g, function(m, m1) {
                    return 'Mc' + m1.toUpperCase();
                });
            }

            // Handle 'O'Connor' type names
            // `Flannery O'connor` to `Flannery O'Connor`
            if (settings.titleCase && settings.caseLetterApostrophe) {
                output = output.replace(/[A-Z]\'(.)/g, function(m, m1) {
                    return 'O\'' + m1.toUpperCase();
                });
            }

            return output;

        }

        function matchIdentifierToList(str, identifiers) {
            if (!identifiers || !identifiers.length) {
                return false;
            }
            var identifier = str.split('@')[0];
            var match = false;
            for (var i = 0; i < identifiers.length; i++) {
                if (identifier === identifiers[i]) {
                    match = true;
                    break;
                }
            }
            return match;
        }

        function reverseDomainAndIdentifier(str) {
            var provider = str.split('@')[1];
            var host = provider.split('.')[0];
            return host;
        }

        function titleCase(str) {
            return str.toLowerCase().split(' ').map(function(word) {
                return (word.charAt(0).toUpperCase() + word.slice(1));
            }).join(' ');
        }


    }());

    if (module && module.exports) {
        module.exports = emailToName;
    } else {
        window.emailToName = emailToName;
    }

}());
