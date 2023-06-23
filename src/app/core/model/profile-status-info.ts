export interface ProfileStatusInfo {
    status:  boolean;
    message: string;
    entity:  null;
}
export interface CheckFieldStatus {
    status: boolean;
    message: null;
    entity: null;
  }
  export interface IGetProfileRoot {
    profile:     IGetProfile;
    isCompleted: boolean;
    editable:    boolean;
}

export interface IGetProfile {
    nationalCode:   string;
    sportInsurance: string;
    name:           string;
    address:        string;
    birthday:       string;
    city:           string;
    family:         string;
    fatherName:     string;
    phone:          string;
    sex:            string;
    postalCode:     string;
    IdCardPhoto:    string;
    personalPhoto:  string;
    created_at:     string;
}
