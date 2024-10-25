import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css',
})
export class TicketFormComponent {
  onSubmit() {
    console.log('Formulário enviado com sucesso!');
    // Adicione a lógica necessária para lidar com o envio do formulário
  }
}
