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
            onHireMeClick(NOCO, [HireType.General]);
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
            onHireMeClick(NOPL, [HireType.General]);
            break;
        case SocialAccount.SMS:
            window.location.href = "sms:+639273894063";
            break;
        default:
            window.location.href = '/norman';
    }
};

const fixWorkOpportunityPath =(opp: string, index: number, hireType: HireType[]): string => {
    if (hireType.length == 1) {
        return opp;
    } else {
        if ((index + 1) == hireType.length) {
            return opp;
        } else {
            return opp += " / ";
        }
    }
}

export const onHireMeClick =(email: string, hireType: HireType[]) => {
    var workOp = `mailto:${email}?subject=`;
    hireType.forEach((type, index) => {
        switch (type) {
            case HireType.General:
                workOp += fixWorkOpportunityPath("Work Opportunity", index, hireType);
                break;
            case HireType.Android:
                workOp += fixWorkOpportunityPath("Android", index, hireType);
                break;
            case HireType.Web:
                workOp += fixWorkOpportunityPath("Web Application", index, hireType);
                break;
            case HireType.Consulting:
                workOp += fixWorkOpportunityPath("IT Consulting", index, hireType);
                break;
            case HireType.Freelancing:
                workOp += fixWorkOpportunityPath("Freelancing", index, hireType);
                break;
            case HireType.PartTime:
                workOp += fixWorkOpportunityPath("Part-time", index, hireType);
                break;
            case HireType.Contract:
                workOp += fixWorkOpportunityPath("Contract-based", index, hireType);
                break;
            case HireType.TechTalk:
                workOp += fixWorkOpportunityPath("Invitation for Tech Talk Discussion", index, hireType);
                break;
            default:
                workOp += fixWorkOpportunityPath("Work Opportunity", index, hireType);
                break;
        }
    });
    window.location.href = (workOp += " | Norman Palisoc");
};

export const onDownloadCVClick =(link: string) => {
    window.location.href = `/norman/#${link}`;
};

export const getSerializedPath =(path: string) => {
    return `/${path}`;
};

export const NOCO = "noco.palisoc@up.phinma.edu.ph";
export const NOPL = "normanpalisoc@outlook.com";

export * from './Spacer';
export * from './Divider';