import { ILabel } from "src/app/shared/models/ILabel";

export enum AgeRange {
    Bozorgsal=1,
    Nojavan,
    Nonahal
}
export const BozorgsalLabel: ILabel = {
    label: 'بزرگسالان',
    value: AgeRange.Bozorgsal
};
export const NojavanLabel: ILabel = {
    label: 'نوجوانان',
    value: AgeRange.Nojavan
};
export const NonahalLabel: ILabel = {
    label: 'نونهالان',
    value: AgeRange.Nonahal
};