import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-tutor-list',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './tutor-list.component.html',
  styleUrls: ['./tutor-list.component.css']
})
export class TutorListComponent {
  searchQuery = '';
  sortOption = 'name';

  tutors = [
    {
      name: 'Anushka Jadhav',
      bio: 'Full-stack developer passionate about teaching web technologies.',
      subjects: ['Web Development', 'Angular', 'JavaScript'],
      availability: 'Weekdays 6-9 PM'
    },
    {
      name: 'Rohan Patel',
      bio: 'Backend engineer focused on Node.js and databases.',
      subjects: ['Node.js', 'MongoDB', 'APIs'],
      availability: 'Weekends only'
    },
    {
      name: 'Ishita Verma',
      bio: 'Frontend wizard who loves helping beginners.',
      subjects: ['React', 'CSS', 'HTML'],
      availability: 'Weekdays 3-6 PM'
    }
  ];

  get filteredTutors() {
    let filtered = this.tutors.filter(tutor =>
      tutor.name.toLowerCase().includes(this.searchQuery.toLowerCase()) ||
      tutor.subjects.some(sub =>
        sub.toLowerCase().includes(this.searchQuery.toLowerCase()))
    );

    if (this.sortOption === 'name') {
      filtered.sort((a, b) => a.name.localeCompare(b.name));
    } else if (this.sortOption === 'availability') {
      filtered.sort((a, b) => a.availability.localeCompare(b.availability));
    }

    return filtered;
  }
}
