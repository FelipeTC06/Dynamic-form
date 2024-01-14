import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ReactiveFormsModule, FormGroup, FormBuilder, FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { LayoutComponent } from "../../layout/layout.component";
import { FormField } from '../model/form-fields';
import { ThreadedResponse } from '../model/threaded-response';
import { ThreadedResponseService } from '../service/threaded-response.service';

@Component({
    selector: 'app-form-threaded-response',
    standalone: true,
    templateUrl: './form-threaded-response.component.html',
    styleUrl: './form-threaded-response.component.scss',
    imports: [CommonModule, LayoutComponent, ReactiveFormsModule, HttpClientModule]
})
export class FormThreadedResponseComponent {

    public simplesThreadedResponse!: FormGroup;
    public id!: number;
    public fields: FormField[] = [
        {
            type: 'separator',
            label: 'Personal Information',
            name: 'personalInfo',
            fields: [
                {
                    type: 'text',
                    label: 'First Name',
                    name: 'per_firstName',
                },
                {
                    type: 'text',
                    label: 'Last Name',
                    name: 'per_lastName',
                },
                {
                    type: 'radio',
                    label: 'Gender',
                    name: 'per_gender',
                    options: [
                        { value: 'M', label: 'Male' },
                        { value: 'F', label: 'Female' }
                    ]
                },
                {
                    type: 'checkbox',
                    label: 'Do you like sports?',
                    name: 'per_likeSports',
                },
                {
                    type: 'select',
                    label: 'Favorite sport?',
                    name: 'per_favSport',
                    options: [
                        { value: 'SU', label: 'Surf' },
                        { value: 'SO', label: 'Soccer' },
                        { value: 'SW', label: 'swimming' }
                    ]
                },
            ]
        },
        {
            type: 'separator',
            label: 'Work Information',
            name: 'workInfo',
            fields: [
                {
                    type: 'checkbox',
                    label: 'Is employed?',
                    name: 'wor_isEmployed',
                },
                {
                    type: 'text',
                    label: 'Company Name',
                    name: 'wor_companyName',
                },
                {
                    type: 'radio',
                    label: 'Are you happy with your position?',
                    name: 'wor_happyPosition',
                    options: [
                        { value: 'H', label: 'Happy' },
                        { value: 'S', label: 'Satisfied' },
                        { value: 'UN', label: 'Unhappy' },
                    ]
                },
            ]
        },

    ]

    constructor(
        private formBuilder: FormBuilder,
        private threadedResponseService: ThreadedResponseService,
        private activeRoute: ActivatedRoute,
        private router: Router
    ) { }

    public ngOnInit() {
        this.id = +this.activeRoute.snapshot.params['id'];
        this.simplesThreadedResponse = this.createGroup(this.fields);
        if (this.id) {
            this.editItem(this.id);
        }
    }

    public createGroup(fields: any[]): FormGroup {
        const group = this.formBuilder.group({});
        fields.forEach(field => {
            if (field.type === 'separator') {
                group.addControl(field.name, this.createGroup(field.fields));
            } else {
                group.addControl(field.name, new FormControl(''));
            }
        });
        return group;
    }

    public onSubmit() {
        const data: ThreadedResponse = this.simplesThreadedResponse.value;
        if (this.id) {
            this.threadedResponseService.updateItem(data, this.id).subscribe({
                next: (response) => {
                    console.log('Formulário enviado com sucesso');
                },
                error: (error) => {
                    console.error('Erro ao enviar formulário', error);
                },
                complete: () => {
                    console.log('Envio Completo!');
                    this.back();
                }
            })
        } else {
            this.threadedResponseService.createThreadedItem(data).subscribe({
                next: (response) => {
                    console.log('Formulário enviado com sucesso');
                },
                error: (error) => {
                    console.error('Erro ao enviar formulário', error);
                },
                complete: () => {
                    console.log('Envio Completo!');
                    this.back();
                }
            })
        }
    }

    public editItem(id: number) {
        console.log('this.simplesThreadedResponse.value', this.simplesThreadedResponse.value)
        this.threadedResponseService.getThreadedItemById(id).subscribe({
            next: (data: ThreadedResponse[]) => {
                this.simplesThreadedResponse.patchValue(data);
            },
            error: (error) => {
                console.error('Erro ao receber dados:', error);
            },
            complete: () => {
                console.log('Requisição completada.');
            }
        })
    }

    public back() {
        this.router.navigate(['/threaded/list']);
    }

}
