import { Component, OnInit  } from '@angular/core';
import { ApolloQueryResult  } from '@apollo/client/core';
import { AuthService        } from '../services/authService';
import { Type               } from '../models/userLogin';
import { ComplementService  } from '../services/complementService';
import { ComplementType     } from '../models/complement';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})
export class Tab1Page implements OnInit
{
  complementElems: ComplementType[];
  showComplement: boolean = false;

  constructor(private auth: AuthService, private complement: ComplementService) {}

  ngOnInit()
  {
    this.getAllUserInfo();
  }

  getAllUserInfo()
  {
    this.auth.getAllUserInfo().subscribe((data:ApolloQueryResult<any>) => {

      this.getComplement(data.data.user.type)
    }, (error: Error) =>{
      alert("Oups ! something goes wrong !" + error.message)
    } )
  }

  getComplement(type: Type)
  {
    this.complement.getComplementByType(type).subscribe((data: ApolloQueryResult<any>) => {
      this.complementElems = data.data.complements;
      console.log(data.data.complements)
      data.data.complements.map((data) => {
        console.log(data);
      })
      this.showComplement = true;
    });
  }
}
