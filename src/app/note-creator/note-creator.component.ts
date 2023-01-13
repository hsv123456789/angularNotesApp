import { Component, HostListener, Input } from '@angular/core';
import { Note } from '../note';
import { NotesManagerService } from '../notes-manager.service';
@Component({
  selector: 'app-note-creator',
  templateUrl: './note-creator.component.html',
  styleUrls: ['./note-creator.component.css'],
})
export class NoteCreatorComponent {
  @Input() visible: boolean = false;

  note: Note = new Note('', '', '');
  constructor(private notesManager: NotesManagerService) {}

  visiblityChanger() {
    this.notesManager.createNewNote(this.note).subscribe((data) => {
      console.log(data);
    });
    window.location.reload();
    this.visible = !this.visible;
  }
}
