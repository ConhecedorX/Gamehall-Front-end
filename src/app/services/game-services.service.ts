import { Injectable } from '@angular/core';
import { GameModel } from '../models/game-model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class GameServicesService {

  private readonly API = 'http://localhost:8080/Game'

  constructor(private http:HttpClient) { }
  listarJogos(): Observable<GameModel[]> { 
    return this.http.get <GameModel[]>(this.API)
  }
  salvarJogo (game: GameModel) { } 
}
