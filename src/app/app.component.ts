import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Array of dropdown options
  dropdownOptions: string[] = ['Option 1', 'Option 2', 'Option 3', 'Option 4', 'Option 5', 'Option 6', 'Option 7', 'Option 8'];

  // Variable to hold the selected option
  selectedOption: string | undefined = 'gg';

  // Placeholder text for the dropdown
  customPlaceholder: string = 'Select an option';

  // Function called when an option is selected in the dropdown
  handleOptionSelected(option: string) {
    this.selectedOption = option; // Update the selected option
    console.log('Selected option:', option);
  }
}