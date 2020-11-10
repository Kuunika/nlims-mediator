interface IDiagnosticReport {
  resourceType: string;
  performer: Array<IPerformer>;
  category: Array<ICategory>;
  result: Array<IResult>;
}

interface IPerformer {
  reference: string;
  display: string;
}

interface ICategory {
  coding: Array<ICoding>;
}

interface ICoding {
  system?: string;
  code: string;
  display: string;
}

interface IResult {
  reference: string;
}
