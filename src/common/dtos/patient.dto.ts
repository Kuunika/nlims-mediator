import { ApiProperty } from "@nestjs/swagger";


class Name {
  @ApiProperty()
  use: string;

  @ApiProperty()
  given: string;

  @ApiProperty()
  family: string;
}

class Telecom {
  @ApiProperty()
  system: string;

  @ApiProperty()
  value: string;

  @ApiProperty({ nullable: true })
  use?: string;
}

class Address {
  @ApiProperty()
  country: string;
}

class Identifier {
  @ApiProperty()
  use: string;

  @ApiProperty()
  value: string;
}

export class PatientDto {
  @ApiProperty()
  resourceType: string;

  @ApiProperty({ isArray: true })
  name: Name;

  @ApiProperty({ isArray: true })
  telecom: Telecom;

  @ApiProperty({ isArray: true })
  address: Address;

  @ApiProperty({ isArray: true })
  identifier: Identifier
}
