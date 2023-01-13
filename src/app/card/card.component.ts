import { Component, Input } from '@angular/core';
import { Note } from '../note';
import { NotesManagerService } from '../notes-manager.service';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css'],
})
export class CardComponent {
  visible: boolean = false;
  @Input() note: Note = new Note('', '', '');
  constructor(private notesManager: NotesManagerService) {}
  visiblityChanger() {
    this.visible = !this.visible;
  }

  DeleteHandler() {
    this.notesManager.deleteEmployee(this.note._id).subscribe((data) => {
      console.log(data);
    });
    window.location.reload();
  }
  UpdateHandler() {
    console.log(this.note.content);
    this.notesManager
      .updateExistingNote(this.note._id, this.note)
      .subscribe((data) => {
        console.log(data);
      });
    window.location.reload();
  }
}
