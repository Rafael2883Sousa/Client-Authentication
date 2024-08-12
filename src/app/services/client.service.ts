import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

// Interface defining the structure of a client object
interface Client {
  internal_code_required: boolean; // Indicates if an internal code is required
  internal_code?: string; // Optional internal code
  external_code_required: boolean; // Indicates if an external code is required
  external_code?: string; // Optional external code
}

@Injectable({
  providedIn: 'root'
})
export class ClientService {
  private clientsUrl = 'assets/clients.json'; // Path to the JSON file containing client data

  constructor(private http: HttpClient) { }

  // Method to fetch all clients from the JSON file

  getClients(): Observable<{ [key: string]: Client }> {
    return this.http.get<{ [key: string]: Client }>(this.clientsUrl);
  }
  // getClients(): Observable<{ [key: string]: Client }> { 
  //   //console.log( 'Log in screen ',this.http.get<any>('assets/clients.json')
  //   /*this.http.get<{ [key: string]: Client }>(this.clientsUrl)*/ //);
  //   return this.http.get<any>('assets/clients.json');
  //   //return this.http.get<{ [key: string]: Client }>(this.clientsUrl);
  // }

  // Method to validate the client name and code
  validateClient(name: string, code: string): Observable<boolean> {
    return new Observable(observer => {
      this.getClients().subscribe(clients => {
        const client = clients[name]; 
        if (client /*&& client.internal_code_required*/ && client.internal_code === code) {
          observer.next(true); // Valid client
        } else {
          observer.next(false); // Invalid client
        }
        observer.complete();
      });
    });
  }
}
