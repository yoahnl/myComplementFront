import {Component, OnInit} from '@angular/core';
import {ComplementType} from '../models/complement';
import {AuthService} from '../services/authService';
import {ComplementService} from '../services/complementService';
import {ApolloQueryResult} from '@apollo/client/core';
import {Type} from '../models/userLogin';
import {PopoverController, ToastController} from '@ionic/angular';
import {DescriptionComponent} from './description/description.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit
{

    complementElems: ComplementType[];
    showComplement: boolean = false;
    private ev: Event;

    constructor(private auth: AuthService, private complement: ComplementService, private popoverController: PopoverController, private toastController: ToastController) {}

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

    async presentPopOver(description: string, name: string) {
        const popover = await this.popoverController.create({
            component: DescriptionComponent,
            cssClass: 'my-custom-class',
            event: this.ev,
            translucent: true,
            componentProps: {
                "description": description,
                "name": name
            }

        });
        return await popover.present();
    }

    async toogleTook($event: any) {

        if ($event.detail.checked) {
            const toast = await this.toastController.create({
                message: 'Your dosage routing have been saved.',
                duration: 1500,
                position: 'top',
                color: 'success',
            });
            await toast.present();
        }
    }
}
