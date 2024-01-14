import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';
import { LayoutComponent } from "../../layout/layout.component";
import { ThreadedResponse } from '../model/threaded-response';
import { ThreadedResponseService } from '../service/threaded-response.service';

@Component({
    selector: 'app-list-threaded-response',
    standalone: true,
    templateUrl: './list-threaded-response.component.html',
    styleUrl: './list-threaded-response.component.scss',
    imports: [CommonModule, HttpClientModule, RouterModule, LayoutComponent]
})
export class ListThreadedResponseComponent {

    public items: ThreadedResponse[] = [];

    constructor(
        private threadedResponseService: ThreadedResponseService,
        private router: Router
    ) { }

    public ngOnInit() {
        this.getItems();
    }

    public getItems() {
        this.threadedResponseService.getAllThreadedItem().subscribe({
            next: (data: ThreadedResponse[]) => {
                this.items = data;
            },
            error: (error) => {
                console.error('Erro ao receber dados:', error);
            },
            complete: () => {
                console.log('Requisição completada.');
            }
        })
    }


    public editItem(id: number) {
        this.router.navigate(['threaded/form', id]);
    }

    public deleteItem(id: number) {
        this.threadedResponseService.deleteItem(id).subscribe({
            next: (data) => {
                console.log('Dados recebidos:');
            },
            error: (error) => {
                console.error('Erro ao receber dados:', error);
            },
            complete: () => {
                console.log('Requisição completada.');
                this.getItems();
            }
        })
    }
}
