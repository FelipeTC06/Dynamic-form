import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SimpleResponse } from '../models/simple-response';
import { SimpleResponseService } from '../service/simple-response.service';
import { LayoutComponent } from "../../layout/layout.component";

@Component({
  selector: 'app-form-simple-response',
  standalone: true,
  templateUrl: './form-simple-response.component.html',
  styleUrl: './form-simple-response.component.scss',
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule, LayoutComponent]
})
export class FormSimpleResponseComponent {

  public simpleResponseForm!: FormGroup;

  public id!: number;

  public fields: any[] = [
    {
      type: 'separator',
      label: 'Personal Information',
    },
    {
      type: 'text',
      label: 'First Name',
      name: 'firstName',
    },
    {
      type: 'text',
      label: 'Last Name',
      name: 'lastName',
    },
    {
      type: 'radio',
      label: 'Gender',
      name: 'gender',
      options: [
        { value: 'M', label: 'Male' },
        { value: 'F', label: 'Female' }
      ]
    },
    {
      type: 'checkbox',
      label: 'Do you like sports?',
      name: 'likeSports',
    },
    {
      type: 'select',
      label: 'Favorite sport?',
      name: 'favSport',
      options: [
        { value: 'SU', label: 'Surf' },
        { value: 'SO', label: 'Soccer' },
        { value: 'SW', label: 'swimming' }
      ]
    },
    {
      type: 'separator',
      label: 'Work Information',
    },
    {
      type: 'checkbox',
      label: 'Is employed?',
      name: 'isEmployed',
    },
    {
      type: 'text',
      label: 'Company Name',
      name: 'companyName',
    },
    {
      type: 'radio',
      label: 'Are you happy with your position?',
      name: 'happyPosition',
      options: [
        { value: 'H', label: 'Happy' },
        { value: 'S', label: 'Satisfied' },
        { value: 'UN', label: 'Unhappy' },
      ]
    },
  ]

  constructor(
    private formBuilder: FormBuilder,
    private simpleResponseService: SimpleResponseService,
    private activeRoute: ActivatedRoute,
    private router: Router
  ) { }

  public ngOnInit() {
    this.id = +this.activeRoute.snapshot.params['id'];
    this.createForm();
    if (this.id) {
      this.editItem(this.id);
    }
  }

  public createForm() {
    this.simpleResponseForm = this.formBuilder.group({});
    this.fields.forEach(field => {
      if (field.type !== 'separator') {
        this.simpleResponseForm.addControl(field.name, new FormControl(null));
      }
    });
  }

  public onSubmit() {
    console.log('simpleResponseForm', this.simpleResponseForm.value);
    const data: SimpleResponse = this.simpleResponseForm.value;
    if (this.id) {
      this.simpleResponseService.updateItem(data, this.id).subscribe({
        next: (response) => {
          console.log('Formulário editado com sucesso', response);
        },
        error: (error) => {
          console.error('Erro ao enviar formulário', error);
        },
        complete: () => {
          console.log('Edição Completo!');
          this.back();
        }
      })
    } else {
      this.simpleResponseService.createForm(data).subscribe({
        next: (response) => {
          console.log('Formulário enviado com sucesso', response);
        },
        error: (error) => {
          console.error('Erro ao enviar formulário', error);
        },
        complete: () => {
          console.log('Envio Completo!');
          this.back();
        }
      });
    }

  }

  public editItem(id: number) {
    this.simpleResponseService.getItemById(id).subscribe({
      next: (data) => {
        console.log('Dados recebidos:', data);
        this.simpleResponseForm.patchValue(data);
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
    this.router.navigate(['/simple/list']);
  }

}
