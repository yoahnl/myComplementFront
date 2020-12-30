import { Injectable                                 } from '@angular/core';
import { Apollo                                     } from 'apollo-angular';
import {Login, Type, UserBoarded, UserInfo, UserLogin} from '../models/userLogin';
import {GET_USER, GET_USERINFO, LOGIN_AUTH, REGISTRER_AUTH, UPDATE_USERINFO} from './graphQL/auth';
import { Subscription                               } from 'rxjs';
import { Router                                     } from '@angular/router';
import { ApolloQueryResult                          } from '@apollo/client/core';



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

            username:   string;
            email:      string;
            id:         string;
            jwt:        string;
            age:        number;
            weight:     number;
            Height:     number;
            gender:     string;
            workOut:    string;
            type:       Type;
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
            localStorage.setItem("jwt", test.jwt);
            localStorage.setItem("username", test.user.username);
            localStorage.setItem("email", test.user.email);
            localStorage.setItem("id", test.user.id);
            this.router.navigateByUrl('').then();

        }, (error) => {
            console.log('there was an error sending the query', error);
        });
    }

    getuserBoardedStatus()
    {
        this.apollo.query(
            {
                query: GET_USER,
                fetchPolicy: 'network-only',
                variables: {
                    'input' : localStorage.getItem("id")
                },
            }).subscribe((data:ApolloQueryResult<UserBoarded>) => {
                if (!data.data.user.boarded)
                {
                    this.router.navigateByUrl('onBoarding').then();
                }
        })
    }

    updateUserInfo(response: string[])
    {
        console.table(response);
        let gender  : string = response[0];
        let weight  : number = Number(response[1]);
        let workout : string = response[2];
        let height  : number = Number(response[3]);
        let age     : number = Number(response[4]);
        let type    : string = response[6];

        return this.apollo.mutate({
            mutation: UPDATE_USERINFO,
            variables: {
                "input": {
                    "where": {"id": localStorage.getItem("id")},
                    "data": {
                        "age"       : age,
                        "Height"    : height,
                        "weight"    : weight,
                        "gender"    : gender,
                        "workout"   : workout,
                        "boarded"   : true,
                        "type"      : type
                    }
                }
            }
        });
    }

    getAllUserInfo()
    {
        return this.apollo.query(
            {
                query: GET_USERINFO,
                fetchPolicy: 'network-only',
                variables: {
                    'input' : localStorage.getItem("id")
                },
            });
    }
}
