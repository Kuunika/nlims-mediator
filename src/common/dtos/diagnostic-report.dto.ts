import { ApiProperty } from "@nestjs/swagger";

class Performer {
    @ApiProperty()
    reference: string;

    @ApiProperty()
    display: string;
}

class Coding {
    @ApiProperty({ nullable: true })
    system?: string;

    @ApiProperty()
    code: string;

    @ApiProperty()
    display: string;
}

class Category {
    @ApiProperty({ isArray: true })
    coding: Coding;
}

class Result {
    @ApiProperty()
    result: string;
}

export class DiagnosticReportDto {
    @ApiProperty()
    resourceType: string;

    @ApiProperty({ isArray: true })
    performer: Performer;

    @ApiProperty({ isArray: true })
    category: Category;

    @ApiProperty({ isArray: true })
    result: Result;
}
  