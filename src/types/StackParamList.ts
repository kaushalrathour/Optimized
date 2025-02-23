import { StackScreenProps } from "@react-navigation/stack";

export type StackParamList = {
    Home: undefined;
    BasicList: undefined;
    OptimizedList: undefined;
    AdvancedList: undefined;
    HorizontalList: undefined;
    VerticalList: undefined;
}

export type HomeScreenProp = StackScreenProps<StackParamList, "Home">
export type BasicListScreenProp = StackScreenProps<StackParamList, "BasicList">
export type OptimizedListScreenProp = StackScreenProps<StackParamList, "OptimizedList">
export type AdvancedListScreenProp = StackScreenProps<StackParamList, "AdvancedList">
export type HorizontalListScreenProp = StackScreenProps<StackParamList, "HorizontalList">
export type VerticalListScreenProp = StackScreenProps<StackParamList, "VerticalList">