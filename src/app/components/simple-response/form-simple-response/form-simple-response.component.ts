import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { SimpleResponse } from '../models/simple-response';
import { SimpleResponseService } from '../service/simple-response.service';

@Component({
  selector: 'app-form-simple-response',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule ],
  templateUrl: './form-simple-response.component.html',
  styleUrl: './form-simple-response.component.scss'
})
export class FormSimpleResponseComponent {

  public simpleResponseForm!: FormGroup;

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
    private simpleResponseService: SimpleResponseService
  ) { }

  public ngOnInit() {
    this.createForm()
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
    this.simpleResponseService.createForm(data).subscribe({
        next: (response) => {
            console.log('Formulário enviado com sucesso', response);
        },
        error: (error) => {
            console.error('Erro ao enviar formulário', error);
        },
        complete: () => {
            console.log('Envio Completo!');
        }
    });
    
  }

}
