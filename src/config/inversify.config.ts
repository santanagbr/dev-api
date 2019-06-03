import 'reflect-metadata';
import { Container } from 'inversify';

import '../api/controllers/user.controller';

import { RequestService } from '../api/services/request.service';

const container = new Container();

container.bind(RequestService).toSelf();

export default container;