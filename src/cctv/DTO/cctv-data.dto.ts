import { IsNotEmpty, IsString } from "class-validator";
import { cctvData } from "../entity/cctvData.entity";

export class CctvDataDTO {
    @IsNotEmpty()
	@IsString()
	cctv_number: string;

    public async toEntity() {
		const { cctv_number } = this;
		const Data_Entity = new cctvData;
		Data_Entity.cctv_number = cctv_number;
		return Data_Entity;
	}
}