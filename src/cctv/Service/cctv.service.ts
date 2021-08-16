import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CctvDataDTO } from '../DTO/cctv-data.dto';
import { cctvData } from "../entity/cctvData.entity";
import { cctvDataRepo } from '../Repo/cctv.repo';


@Injectable()
export class CctvService {

    constructor(
		@InjectRepository(cctvData) private cctvData_Repo: cctvDataRepo,
	) {}

    public async saveData(
        data: CctvDataDTO
    ): Promise<cctvData> {
        const data_dto: CctvDataDTO = new CctvDataDTO;
        data_dto.cctv_number = data.cctv_number;
        const data_entity = await data_dto.toEntity();
        const result = await this.cctvData_Repo.save(data_entity);
        console.log(result);
        return result;
    }
}
