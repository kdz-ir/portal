export interface ProfileShowInfo {
    status:  boolean;
    message: string;
    entity:  ProfileShowEntity;
}

export interface ProfileShowEntity {
    name:          string;
    sex:           string;
    birthday:      string;
    fatherName:    string;
    address:       string;
    postalCode:    string;
    city:          string;
    phone:         string;
    personalPhoto: string;
    IdCardPhoto:   string;
    family:        string;
}
export interface ProfileSaveInfo{
    name:          string;
    sex:           number;
    birthday:      string;
    fatherName:    string;
    address:       string;
    postalCode:    string;
    city:          number;
    phone:         string;
    personalPhoto: string;
    IdCardPhoto:   string;
    family:        string;
}