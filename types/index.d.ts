export interface EmailToNameOptions {
    removeNumbers?: boolean;
    removePlusWords?: boolean;
    titleCase?: boolean;
    caseMc?: boolean;
    caseLetterApostrophe?: boolean;
    uppercaseGenerationalNumbers?: boolean;
    commaPrependGenerationalPhrase?: boolean;
    appendPeriodToTitlePrefix?: boolean;
    lowercaseFamilyParticle?: boolean;
    commonPersonalIdentifiers?: string[];
    reverseCommonEmailAddresses?: boolean;
    companyNames?: string[];
}

export interface EmailToName {
    process: (str: string, params?: EmailToNameOptions) => string;
}

declare const emailToName: EmailToName;
export default emailToName;
