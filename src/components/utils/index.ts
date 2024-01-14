export enum HireType {
    General,
    Android,
    Web,
    Consulting,
    Freelancing,
    PartTime,
    Contract,
    TechTalk
};

export enum SocialAccount {
    Facebook,
    Messenger,
    Google,
    LinkedIn,
    Outlook,
    SMS
};

export const onSocialAccountClick =(account: SocialAccount) => {
    switch (account) {
        case SocialAccount.Google:
            window.location.href = "mailto:noco.palisoc@up.phinma.edu.ph";
            break;
        case SocialAccount.Facebook:
            window.location.href = "https://www.facebook.com/blackhat1999";
            break;
        case SocialAccount.Messenger:
            window.location.href = "https://www.facebook.com/messages/t/100003584134559";
            break;
        case SocialAccount.LinkedIn:
            window.location.href = "https://www.linkedin.com/in/norman-jay-palisoc-9bb512198/";
            break;
        case SocialAccount.Outlook:
            window.location.href = "mailto:normanpalisoc@outlook.com";
            break;
        case SocialAccount.SMS:
            window.location.href = "sms:+639273894063";
            break;
        default:
            window.location.href = '/norman';
    }
};

export const onHireMeClick =(hireType: HireType) => {
    window.location.href = `/norman/#hire?type=${hireType}`;
};

export const onDownloadCVClick =(link: string) => {
    window.location.href = `/norman/#${link}`;
};

export const getSerializedPath =(path: string) => {
    return `/${path}`;
};

export * from './Spacer';
export * from './Divider';