import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Connection } from 'typeorm';
import { CctvController } from './controller/cctv.controller';
import { cctvData } from './entity/cctvData.entity';
import { CctvService } from './Service/cctv.service';
import { cctvDataRepo } from './Repo/cctv.repo';

@Module({
    imports: [TypeOrmModule.forFeature([cctvData])],
    controllers: [CctvController],
    providers: [
        CctvService, 
    ]
})

export class CctvModule {
}
