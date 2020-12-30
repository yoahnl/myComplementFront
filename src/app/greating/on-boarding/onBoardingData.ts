import {OnBoardingQuestion, OnBoardingType} from '../../models/onBoarding';

export let questionsForBoarding : OnBoardingQuestion[] = [
    {
        title: "Are you a male or a female ?",
        question: ["Male", "Female"],
        type: OnBoardingType.select
    },
    {
        title: "What is your weight ?",
        question: ["Kg","20", "160"],
        type: OnBoardingType.ranking
    },
    {
        title: "How many times do you go the gym per week ?",
        question: ["less than 1 time a week", "1 time a week", "2 times a week", "3 times a week", "4 times a week", "5 times a week", "more than 5 times a week"],
        type: OnBoardingType.select
    },
    {
        title: "Quelle est votre taille ?",
        question: ["cm", "120", "220"],
        type: OnBoardingType.ranking
    },
    {
        title: "Quelle âge avez vous ?",
        question: ["ans", "15", "120"],
        type: OnBoardingType.ranking
    },
    {
        title: "Why do you go to the gym ?",
        question: ["to loose weight", "to gain muscle", "both "],
        type: OnBoardingType.select
    },
];



