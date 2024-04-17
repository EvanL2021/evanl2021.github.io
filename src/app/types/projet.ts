import { Languages } from "enums/languages";

export type Projet = {
    projectUrl: string;
    imgUrl: string;
    title: string;
    subtitles: string[];
    languages: string[]
};