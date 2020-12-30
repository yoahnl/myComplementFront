export interface OnBoardingQuestion {
    title       : string;
    question    : string[];
    type        : OnBoardingType;
}

export enum OnBoardingType
{
    select,
    ranking
}
