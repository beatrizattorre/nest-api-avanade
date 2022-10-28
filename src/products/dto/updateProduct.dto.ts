import { PartialType } from "@nestjs/mapped-types";
import { createProductDTO } from "./createProduct.dto";

export class UpdateProductDTO extends PartialType(createProductDTO) {}