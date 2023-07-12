
export interface SportInsurance {
  nationalCode:        string;
  nationalityCode:     null;
  firstName:           string;
  lastName:            string;
  provinceTitle:       string;
  cityTitle:           string;
  areaTitle:           string;
  gymTitle:            string;
  federationTitle:     string;
  sportBranchTitle:    string;
  persianExpireDate:   string;
  membershipIsExpired: boolean;
}

export interface IIndividual {
  min: number;
  max: number;
}
