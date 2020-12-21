import { Injectable             } from '@angular/core';
import { Apollo                 } from 'apollo-angular';
import {Login, UserInfo, UserLogin} from '../models/userLogin';
import {LOGIN_AUTH, REGISTRER_AUTH} from './graphQL/auth';
import { Subscription           } from 'rxjs';
import {Router} from '@angular/router';

@Injectable()
export class AuthService
{
    private querySubscription: Subscription;

    constructor(private apollo: Apollo, private router: Router) {}

    login(userInfo: UserLogin)
    {
        return this.apollo.mutate({
            mutation: LOGIN_AUTH,
            variables: {
                'input': {'identifier': userInfo.email, 'password': userInfo.password, 'provider': 'local'}
            }
        });

    }

    // @ts-ignore
    register(userInfo: UserLogin)
    {
        return this.apollo.mutate({
            mutation: REGISTRER_AUTH,
            variables: {
                'input': {
                    'data': {
                        "username": userInfo.username,
                        "email": userInfo.email,
                        "password": userInfo.password,
                        "provider": "local",
                        "confirmed": true
                    }
                }
            }
        });
    }

    userInfo(): UserInfo
    {
        let userInfo: UserInfo = new class implements UserInfo {
            email: string;
            id: string;
            jwt: string;
            username: string;
        };
        userInfo.jwt = localStorage.getItem("jwt");
        userInfo.username = localStorage.getItem("username");
        userInfo.email = localStorage.getItem("email");
        userInfo.id = localStorage.getItem("id");

        return userInfo;
    }


    loginWithCredential(userInfo: UserLogin)
    {
        this.login(userInfo).subscribe(({data}) => {
            // @ts-ignore
            let test = data.login as Login;
            console.log('got data', data);
            console.log(test.jwt);
            localStorage.setItem("jwt", test.jwt);
            localStorage.setItem("username", test.user.username);
            localStorage.setItem("email", test.user.email);
            localStorage.setItem("id", test.user.id);
            this.router.navigateByUrl('').then();

        }, (error) => {
            console.log('there was an error sending the query', error);
        });
    }
}
