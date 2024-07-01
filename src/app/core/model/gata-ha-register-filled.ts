import { AgeType } from './age-type-enum';

export interface gataHaRegisterFilledInfo {
    status:  boolean;
    message: string;
    entity:  gataHaRegisterFilledEntity;
}

export interface gataHaRegisterFilledEntity {
    registerFiled:   number[];
    subject:         string;
    isOrdooHamayesh: string;
    ageType:         AgeType;
    state:           string;
    oordoHamayesh:   OordoHamayesh;
}

export interface OordoHamayesh {
    learnPC:       boolean;
    ravanShenasi:  boolean;
    amazingFact:   boolean;
    other:         null;
    digitalMarket: boolean;
    startup:       boolean;
    bitcoin:       boolean;
    research:      boolean;
}
