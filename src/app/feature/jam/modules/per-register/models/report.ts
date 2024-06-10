
export interface report {
  data: Datum[];
}

interface Profile {
  hasCard?: string;
  nationalCode: string;
  ownerCard?: string;
  name: string;
  address?: string;
  birthday: string;
  city: string;
  cityRaw: number;
  family: string;
  fatherName?: string;
  phone?: string;
  sex: string;
  sexRaw: number;
  postalCode?: string;
  IdCardPhoto?: string;
  IdCardPhotoUrl?: string;
  personalPhoto?: string;
  personalPhotoUrl?: string;
  created_at: string;
  motherCard?: string;
  fatherCard?: string;
}
export interface Datum {
  nationalCode: string;
  profile?: Profile;
  id: number;
  field: number;
  createdAt: string;
}
