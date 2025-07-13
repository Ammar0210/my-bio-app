import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-basic-information',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './basic-information.html',
  styleUrl: './basic-information.css'
})
export class BasicInformation {
  showFunFact: boolean = false;
}
