import { Module } from '@nestjs/common';
import { CctvModule } from 'src/cctv/cctv.module';
import { TypeOrmModule } from '@nestjs/typeorm';
import { cctvData } from 'src/cctv/entity/cctvData.entity';

const ormconfig = require('../../ormconfig.json');

@Module({
    imports: [
        TypeOrmModule.forRoot({
            type: 'mysql',
            host: 'localhost',
            port: 3306,
            username: 'root',
            password: 'sk362712',
            database: 'fss_db',
            entities: [cctvData],
            synchronize: true,
        }),
        CctvModule],
    controllers: [],
    providers: [],
})

export class AppModule {}
