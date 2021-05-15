export interface SubjetInfo {
    status:  boolean;
    message: string;
    entity:  SubjectEntity[];
}

export interface SubjectEntity {
    id:   number;
    data: string;
}
