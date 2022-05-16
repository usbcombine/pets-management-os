import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Pet, PetStatuses } from '../models/pet.model';
import { v4 as uuidv4 } from 'uuid';

@Injectable({
  providedIn: 'root',
})
export class PetsService {
  model = 'pet';

  constructor(private http: HttpClient) {}

  all(status: PetStatuses = PetStatuses.Available): Observable<Pet[]> {
    return this.http.get<Pet[]>(
      `${this.getUrl()}/findByStatus?status=${status}`
    );
  }

  create(pet: Pet) {
    return this.http.post<Pet>(this.getUrl(), this.getFullPet(pet));
  }

  update(pet: Pet) {
    const body = new HttpParams()
      .set('name', pet.name)
      .set('status', pet.status);

    const headers = new HttpHeaders().set(
      'Content-Type',
      'application/x-www-form-urlencoded'
    );
    return this.http.post<Pet>(
      this.getUrlWithId(String(pet.id)),
      body.toString(),
      { headers }
    );
  }

  delete(pet: Pet) {
    return this.http.delete<Pet>(this.getUrlWithId(String(pet.id)));
  }

  private getUrl() {
    return `${environment.apiEndpoint}/${this.model}`;
  }

  private getUrlWithId(id: string) {
    return `${this.getUrl()}/${id}`;
  }

  private generateId(): Number {
    return parseInt(Date.now().toString() + Math.floor(Math.random() * 100000));
  }

  private getFullPet(pet: Pet) {
    return {
      id: pet.id ? pet.id : this.generateId(),
      category: {
        id: 0,
        name: 'string',
      },
      name: pet.name,
      photoUrls: ['string'],
      tags: [
        {
          id: 0,
          name: 'string',
        },
      ],
      status: pet.status,
    };
  }
}
