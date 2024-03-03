import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {BehaviorSubject, Observable} from "rxjs";
import { ChampionsDataDTO } from "@shared/models/dtos/ChampionsDataDTO";
import {LanguageCodeEnum} from "@shared/LanguageCodeEnum";

@Injectable({
  providedIn: 'root'
})
export class LeagueOfLegendsService {
  public indexChamp = new BehaviorSubject<number>(0);
  currentIndex = this.indexChamp.asObservable();
  private baseUrl: string = 'http://localhost:3000/lol/champions/';
  constructor(private http: HttpClient) {}

  getIndex(): number {
    return this.indexChamp.getValue();
  }

  getChampions(params: LanguageCodeEnum): Observable<ChampionsDataDTO[]> {
    const url = `${this.baseUrl}${params}/`;
    return this.http.get<ChampionsDataDTO[]>(url);
  }

  changeIndex(index: number) {
    this.indexChamp.next(index);
  }

  resetIndex() {
    this.indexChamp.next(0);
  }
}
