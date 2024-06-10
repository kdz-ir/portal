 export interface Profile {
    name: string;
    nationalCode: string;
    address: string;
    birthday: string;
    city: string;
    cityRaw: number;
    family: string;
    fatherName: string;
    phone: string;
    sex: string;
    sexRaw: number;
    IdCardPhoto: string;
    IdCardPhotoUrl: string;
    personalPhoto: string;
    personalPhotoUrl: string;
    created_at: string;
  }
  
  interface Datum {
    profile: Profile;
  }
  
  interface RootObject {
    data: Datum[];
  }