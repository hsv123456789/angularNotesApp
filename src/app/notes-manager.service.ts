import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Note } from './note';
import { Observable } from 'rxjs';
import { NoteWithoutId } from './note-without-id';
@Injectable({
  providedIn: 'root',
})
export class NotesManagerService {
  constructor(private http: HttpClient) {}
  note_no_id: NoteWithoutId = new NoteWithoutId('', '');
  private url = ' http://localhost:3000/notes';
  getAllNotes(): Observable<Note[]> {
    return this.http.get<Note[]>(this.url);
  }

  createNewNote(note: Note): Observable<Object> {
    return this.http.post<Note>(this.url, note);
  }
  updateExistingNote(id: string, note: Note): Observable<Object> {
    this.note_no_id.content = note.content;
    this.note_no_id.title = note.title;
    return this.http.patch(`${this.url}/${id}`, note);
  }
  deleteEmployee(id: string): Observable<Object> {
    return this.http.delete(`${this.url}/${id}`);
  }
}
