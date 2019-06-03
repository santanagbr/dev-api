import axios from 'axios';
import { injectable } from 'inversify';

const http = axios.create({ baseURL: 'https://jsonplaceholder.typicode.com' });

@injectable()
export class RequestService {
    public async getUserData(): Promise<Record<string,any>[] | undefined> {
        try {
            const userData = await http.get('/users');

            return userData.data;
        } catch (err) {
            console.error(err)
        }
    }
}