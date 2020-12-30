import { Injectable                                 } from '@angular/core';
import { Apollo                                     } from 'apollo-angular';
import { Router                                     } from '@angular/router';
import { Type                                       } from '../models/userLogin';
import {GET_COMPLEMENT} from './graphQL/complement';




@Injectable()
export class ComplementService
{

    constructor(private apollo: Apollo, private router: Router) {}

    getComplementByType(type: Type)
    {
        return this.apollo.query(
            {
                query: GET_COMPLEMENT,
                fetchPolicy: 'network-only',
                variables: {
                    'input' : type
                },
            });
    }
}
