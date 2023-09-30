import { Component, OnInit, AfterViewInit, ElementRef } from '@angular/core';
import Typed from 'typed.js';
import { ToastrService } from 'ngx-toastr';
import { mostrarMensaje } from 'src/app/utilidades/mensajes/toast.func';
import { NgForm } from '@angular/forms';
import emailjs from '@emailjs/browser';

import { CargarScriptsService } from 'src/app/cargar-scripts.service';
declare var Waypoint: any;

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css'],
})
export class InicioComponent implements OnInit, AfterViewInit {
  formData = {
    from_name: '',
    to_name: 'Juan Pablo',
    form_email: '',
    subject: '',
    message: '',
  };
  constructor(
    private _CargaScripts: CargarScriptsService,
    private elementRef: ElementRef,
    public toastr: ToastrService
  ) {
    _CargaScripts.Carga(['main']);
  }
  ngOnInit() {
    const options = {
      strings: [
        'Designer',
        'Developer',
        'Backend Developer',
        'Frontend Developer',
        'FullStack Developer',
        'Freelancer',
      ], // Lista de textos para el efecto typewriter
      typeSpeed: 100, // Velocidad de escritura (milisegundos por caracter)
      loop: true, // Repetir el efecto en bucle
    };

    const typed = new Typed('.typed-element', options);
  }

  //Happy Clients
  happyClients: number = 0;

  happyClienntscountstop: any = setInterval(() => {
    this.happyClients++;

    if (this.happyClients == 232) {
      clearInterval(this.happyClienntscountstop);
    }
  }, 10);
  //Projects
  projects: number = 0;

  procestscountStop: any = setInterval(() => {
    this.projects++;

    if (this.projects == 521) {
      clearInterval(this.procestscountStop);
    }
  }, 10);

  //Hours of support
  hoursSupport: number = 0;

  hoursSupportCountStop: any = setInterval(() => {
    this.hoursSupport++;

    if (this.hoursSupport == 1453) {
      clearInterval(this.hoursSupportCountStop);
    }
  }, 1);
  //Hard Workers
  hardWorkers: number = 0;

  hardWorkersCountStop: any = setInterval(() => {
    this.hardWorkers++;

    if (this.hardWorkers == 32) {
      clearInterval(this.hardWorkersCountStop);
    }
  }, 10);
  ngAfterViewInit() {
    const skillsContentElement =
      this.elementRef.nativeElement.querySelector('.skills-content');
    if (skillsContentElement) {
      new Waypoint({
        element: skillsContentElement,
        offset: '80%',
        handler: (direction: any) => {
          const progressBars = this.elementRef.nativeElement.querySelectorAll(
            '.progress .progress-bar'
          );
          progressBars.forEach((progressBar: HTMLElement) => {
            progressBar.style.width =
              progressBar.getAttribute('aria-valuenow') + '%';
          });
        },
      });
    }
  }
  scrollToTop() {
    const mainElement = document.getElementById('main');
    if (mainElement) {
      mainElement.scrollIntoView({ behavior: 'smooth' });
    }
  }

  async send(formulario: NgForm) {
    emailjs.init('DeBau_lVq3cnKHsUc');
    try {
      const response = await emailjs.send(
        'service_fm34zg1',
        'template_dc4b1qc',
        this.formData
      );

      if (response && response.status === 200) {
        mostrarMensaje(
          'success',
          'Mensaje enviado con éxito',
          'Correcto',
          this.toastr
        );
        formulario.resetForm();
      } else {
        mostrarMensaje('error', 'Correo inválido', 'Error', this.toastr);
      }
    } catch (error) {
      mostrarMensaje('error', 'Correo inválido', 'Error', this.toastr);
    }
  }
}
