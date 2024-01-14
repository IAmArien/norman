export enum HireType { General, Android, Web, Consulting, Freelancing, PartTime, Contract, TechTalk };

export const onHireMeClick =(hireType: HireType) => {
    window.location.href = `/norman/hire?type=${hireType}`;
};

export * from './Spacer';
export * from './Divider';