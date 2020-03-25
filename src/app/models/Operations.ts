import { CompteService } from '../compte.service';
import { Compte } from './Compte';

export class Operations{
    idoperations:number;
    nomoperations:String;
    dateoperations:Date;
    emetteur:Compte;
    receveur:Compte;
    montant:number;
}