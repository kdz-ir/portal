import { IPersonalInformationData } from "./IPersonalInformation";

export interface IOrdooData {
  placeOfBirthCertificate: string;
  grades: string;
  studyField: string;
  lastGPA: number;
  schoolName: string;
  lastSchoolName: string;
  email: string;
  isNavjote: boolean;
  isSpecialSickness: boolean;
  sensetiveSickness: string[];
  otherSensetiveSickness: string;
  drug: string;
  allergicFood: string;
  weight: number;
  height: number;
  bloodType: string;
  clothesHeight: number;
  clothesWidth: number;
  familyHeadName: string;
  familyHeadLastName: string;
  familyHeadRealtion: string;
  familyHeadDependents: number;
  familyHeadMarigeStatus: string;
  familyHeadOld: number;
  familyHeadJob: string;
  familyHeadGraduationRate: string;
  familyHeadPhone: string;
  isLostAnybody: boolean;
  familyMembers: IPersonalInformationData[];
  tehranName: string;
  tehranLastname: string;
  tehranRealtion: string;
  tehranPhone: string;
  tehranHome: string;
  tehranAddress: string;
  haveBeenOrdoo: boolean;
  ordooNumber: number;
  haveTriedOrdoo: boolean;
  isCloseFamilyinOrdoo: boolean;
  personInOrdooRealtion: string;
  howMeetOrdoo: string;
  goal: string;
  goAfterNewPeople: string;
  goesAfterlongPeopleOrNear: string;
  likedTopics: string;
  likeClassSubjects: string;
  likeSports: string;
  likeArt: string;
  likeSpendFreetime: string;
  freeBeInMarkar: string;
  likePlaceInTehran: string;
  goodPoints: string;
  negetivePoints: string;
  bestMemory: string;
  woerstMemory: string;
  biggestLesson: string;
  mostInfuence: string;
  lastAcademicTranscript: string;
  parentsConsent: string;
  successesDocument: string;
  wantBloodTest: boolean;
}
