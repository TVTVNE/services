import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms'; // Import nécessaire pour [(ngModel)]

@Component({
  selector: 'app-todo-list',
  standalone: true, // Marque le composant comme autonome
  imports: [FormsModule], // Ajoute FormsModule ici
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  tasks: string[] = []; // Liste des tâches
  newTask: string = ''; // Nouvelle tâche

  // Ajouter une tâche à la liste
  addTask() {
    if (this.newTask.trim()) {
      this.tasks.push(this.newTask.trim());
      this.newTask = ''; // Réinitialise le champ de saisie
    }
  }

  // Supprimer une tâche de la liste
  removeTask(index: number) {
    this.tasks.splice(index, 1); // Supprime l'élément à l'indice donné
  }
}
