import { Component } from '@angular/core';
import { Note } from './note';
import { NotesManagerService } from './notes-manager.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'notes';
  notes: Note[] = [];

  constructor(private notemanager: NotesManagerService) {}
  ngOnInit(): void {
    this.getNotes();
  }

  getNotes() {
    this.notemanager.getAllNotes().subscribe((data) => {
      this.notes = data;
      console.log(data);
    });
  }
}
