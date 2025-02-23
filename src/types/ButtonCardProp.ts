import { StackParamList } from "./StackParamList";

export interface ButtonCardProp {
    title: string;
    navigateTo: keyof StackParamList;
}