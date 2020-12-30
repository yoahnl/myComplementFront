import {Type} from './userLogin';

export interface ComplementType {
    id                  : string;
    name                : string;
    description         : string;
    image               : string;
    dosage              : number;
    dosage_description  : string;
    type                : Type;
}
