export enum HireType { General, Android, Web, Consulting, Freelancing, PartTime, Contract, TechTalk };

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