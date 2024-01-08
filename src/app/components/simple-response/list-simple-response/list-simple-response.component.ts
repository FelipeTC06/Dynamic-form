import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SimpleResponseService } from '../service/simple-response.service';
import { Router, RouterModule } from '@angular/router';
import { LayoutComponent } from "../../layout/layout.component";

@Component({
    selector: 'app-list-simple-response',
    standalone: true,
    templateUrl: './list-simple-response.component.html',
    styleUrl: './list-simple-response.component.scss',
    imports: [CommonModule, HttpClientModule, RouterModule, LayoutComponent]
})
export class ListSimpleResponseComponent {

  items!: any;

  constructor(
    private simpleResponseService: SimpleResponseService,
    private router: Router
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
    this.router.navigate(['/simple/form', id]);
  }

  public deleteItem(id: number) {

  }

}
