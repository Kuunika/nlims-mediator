export interface IPatient {
  resourceType: string;
  name: Array<IName>;
  telecom: Array<ITelecom>;
  address: Array<IAddress>;
  identifier: Array<IIdentifier>;
}

interface IName {
  use: string;
  given: Array<string>;
  family: string;
}

interface ITelecom {
  system: string;
  value: string;
  use?: string;
}

interface IAddress {
  country: string;
}

interface IIdentifier {
  use: string;
  value: string;
}
