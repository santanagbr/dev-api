import { controller, BaseHttpController, httpGet } from 'inversify-express-utils';
import { BAD_REQUEST } from 'http-status';

import { RequestService } from '../services/request.service';

@controller('/user')
export default class UserController extends BaseHttpController {
    constructor(
        private requestService: RequestService
    ) {
        super();
    }

    @httpGet('/data')
    public async getAllData() {
        try {
            return await this.requestService.getUserData();
        } catch (err) {
            return this.statusCode(BAD_REQUEST);
        }
    }

    @httpGet('/data/websites')
    public async getWebsiteData() {
        try {
            const usersData = await this.requestService.getUserData();

            return usersData!.map((user) => user.website)
        } catch (err) {
            return this.statusCode(BAD_REQUEST);
        }
    }

    @httpGet('/data/personal')
    public async getPersonalData() {
        try {
            const usersData = await this.requestService.getUserData();

            return usersData!.map((user) => ({ name: user.name, email: user.email, companyName: user.company.name }))
        } catch (err) {
            return this.statusCode(BAD_REQUEST);
        }
    }

    @httpGet('/data/suite')
    public async getSuiteData() {
        try {
            const usersData = await this.requestService.getUserData();

            return usersData!.filter((user) => user.address.suite.startsWith('Suite'))

        } catch (err) {
            return this.statusCode(BAD_REQUEST);
        }
    }
}
