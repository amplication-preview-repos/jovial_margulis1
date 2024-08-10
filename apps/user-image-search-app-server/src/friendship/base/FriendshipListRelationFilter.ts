/*
------------------------------------------------------------------------------ 
This code was generated by Amplication. 
 
Changes to this file will be lost if the code is regenerated. 

There are other ways to to customize your code, see this doc to learn more
https://docs.amplication.com/how-to/custom-code

------------------------------------------------------------------------------
  */
import { InputType, Field } from "@nestjs/graphql";
import { ApiProperty } from "@nestjs/swagger";
import { FriendshipWhereInput } from "./FriendshipWhereInput";
import { ValidateNested, IsOptional } from "class-validator";
import { Type } from "class-transformer";

@InputType()
class FriendshipListRelationFilter {
  @ApiProperty({
    required: false,
    type: () => FriendshipWhereInput,
  })
  @ValidateNested()
  @Type(() => FriendshipWhereInput)
  @IsOptional()
  @Field(() => FriendshipWhereInput, {
    nullable: true,
  })
  every?: FriendshipWhereInput;

  @ApiProperty({
    required: false,
    type: () => FriendshipWhereInput,
  })
  @ValidateNested()
  @Type(() => FriendshipWhereInput)
  @IsOptional()
  @Field(() => FriendshipWhereInput, {
    nullable: true,
  })
  some?: FriendshipWhereInput;

  @ApiProperty({
    required: false,
    type: () => FriendshipWhereInput,
  })
  @ValidateNested()
  @Type(() => FriendshipWhereInput)
  @IsOptional()
  @Field(() => FriendshipWhereInput, {
    nullable: true,
  })
  none?: FriendshipWhereInput;
}
export { FriendshipListRelationFilter as FriendshipListRelationFilter };
