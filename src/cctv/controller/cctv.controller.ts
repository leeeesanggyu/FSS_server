import { Body, Controller, Get, Param, Post, Put } from '@nestjs/common';
import { CctvService } from 'src/cctv/Service/cctv.service';
import { CctvDataDTO } from '../DTO/cctv-data.dto';
import admin from 'firebase-admin';

@Controller()
export class CctvController {
    constructor( 
        private readonly cctv_Service: CctvService 
    ) {
        let serAccount = require('../../../path/to/serviceAccountKey.json')

        admin.initializeApp({
            credential: admin.credential.cert(serAccount),
        })
    }

    /**
     * cctv data를 저장하고 파이어 베이스로 알림을 준다.
     * @param _cctvDataDTO 
     * @returns 
     */
    @Post()
    saveData( @Body() _cctvDataDTO: CctvDataDTO ): void {
        this.cctv_Service.saveData(_cctvDataDTO)
            .then((result) => {
                let target_token = 'eOt1LFDKQimQGI94s31hP-:APA91bH8la-K6VSykekND8ypMhmqHiOicGnK91iSTyz4GrZSKrk5gY3z1ZjtDQIfa1iiKSUhXg0WUkeZ9W-UGfXe7lvdnwv-6VBD7f0Pxi7T8-UPOjyMSyaU5oSp-WskvNflaBsnH_Dd';
                // 'cM2aCZfTRv2R9C-lYsnv-u:APA91bF-ymVLLWelitE7HT6v7zZVpShU2_0kImoyg1wZvU09ltCiNID-hEMMpY5khZNpiOF_WPwFUrfpoOjbnw-z1sA-H8I5Lt2yckNRWmKKZRH4lcovUhrTtcH_8f8n8wLKDW-yYODR';
                // put in there device token

                let message = {
                    notification: {
                        title: 'warning...',
                        body: 'warning...' + result.cctv_number,
                    },
                    token: target_token,
                }

                admin
                    .messaging()
                    .send(message)
                    .then(function (response) {
                        console.log('Successfully sent push alarm message : ', response)
                    })
                    .catch(function (err) {
                        console.log('Error sending push alarm message : ', err)
                    })
        });

        return;
    }

}
