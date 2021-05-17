export interface gataHaRegisterFilledInfo {
    status:  boolean;
    message: string;
    entity:  gataHaRegisterFilledEntity;
}

export interface gataHaRegisterFilledEntity {
    registerFiled:   number[];
    subject:         string;
    isOrdooHamayesh: string;
    ageType:         string;
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
