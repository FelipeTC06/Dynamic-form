import { SimpleResponse } from './../models/simple-response';
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SimpleResponseService } from '../service/simple-response.service';

@Component({
  selector: 'app-list-simple-response',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './list-simple-response.component.html',
  styleUrl: './list-simple-response.component.scss'
})
export class ListSimpleResponseComponent {

  items!: any;

  constructor(
    private simpleResponseService: SimpleResponseService
  ) { }

  public ngOnInit() {
    this.getItems();
  }

  public getItems() {
    this.simpleResponseService.getAllItems().subscribe({
      next: (data) => {
        console.log('Dados recebidos:', data);
        this.items = data;
      },
      error: (error) => {
        console.error('Erro ao receber dados:', error);
      },
      complete: () => {
        console.log('Requisição completada.');
      }
    });

  }

  public editItem(id: number) {
    
  }

  public deleteItem(id: number) {

  }

}
