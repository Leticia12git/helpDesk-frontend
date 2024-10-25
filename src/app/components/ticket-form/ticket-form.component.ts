import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Ticket } from '../../models/ticket';
import { TicketService } from '../../services/ticket.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-ticket-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './ticket-form.component.html',
  styleUrl: './ticket-form.component.css',
})
export class TicketFormComponent {
  ticket: Ticket = {
    subject: '',
    description: '',
    status: '',
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  constructor(private ticketService: TicketService, private router: Router) {}

  onSubmit() {
    this.ticketService.createTicket(this.ticket).subscribe({
      next: (response) => {
        console.log('Ticket cadastrado com sucesso!', response);
        this.router.navigate(['/tickets']);
        // Aqui, você pode limpar o formulário ou navegar para outra página
        this.ticket = {
          subject: '',
          description: '',
          status: '',
          createdAt: new Date(),
          updatedAt: new Date(),
        };
      },
      error: (error) => {
        console.error('Erro ao cadastrar ticket:', error);
      },
    });
  }
}
