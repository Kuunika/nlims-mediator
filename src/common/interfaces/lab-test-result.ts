export interface LabTestResult {
    body: Array<TestResult>
}

export interface TestResult {
    autoID: string;
    LabID: string;
    firstname: string;
    surname: string;
    gender: string;
    patientResidenceVillage: string;
    patientResidenceDistrict: string;
    location: string;
    town: string;
    dateSentFormToDistrict: string;
    dateSeenAtFacility: string;
    facilitycode: string;
    riskFactor1: string;
    finalClassification: string;
    sampleviability: string;
    status: string;
    datecollected: string;
    dateinput: string;
    datetested: string;
    result: string;
    dateapproved: string;
    dateresultprinted: string;
    labcode: string;
    trackingno: string;
    dob: string;
    patientID: string;
    nameOfPersonCompletingForm: string;
    datespecimenreceivedatlab: string;
    datespecimensenttolab: string;
}