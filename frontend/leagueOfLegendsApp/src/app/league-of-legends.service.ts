import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import { ChampionsDataDTO } from "@shared/models/dtos/ChampionsDataDTO";
import {LanguageCodeEnum} from "@shared/LanguageCodeEnum";

@Injectable({
  providedIn: 'root'
})
export class LeagueOfLegendsService {
  private baseUrl: string = 'http://localhost:3000/lol/champions/';
  constructor(private http: HttpClient) {}

  getChampions(params: LanguageCodeEnum): Observable<ChampionsDataDTO[]> {
    const url = `${this.baseUrl}${params}/`;
    return this.http.get<ChampionsDataDTO[]>(url);
  }
}
