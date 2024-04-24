import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './drop-down.component.html',
  styleUrls: ['./drop-down.component.css']
})
export class DropdownMenuComponent {
  @Input() options: string[] = []; // Input property to receive the dropdown options
  @Input() placeholder: string = 'Select an option'; // Input property for the placeholder text
  @Input() selectedOption: string | undefined; // Input property to hold the selected option
  @Output() selectedOptionChange = new EventEmitter<string>(); // Output property to emit the selected option change

  isDropdownOpen: boolean = false; // Flag to track the dropdown open/close state

  toggleDropdown() {
    this.isDropdownOpen = !this.isDropdownOpen; // Toggle the dropdown open/close state
  }

  selectOption(option: string) {
    this.selectedOption = option; // Update the selected option
    this.selectedOptionChange.emit(option); // Emit the selected option change event
    this.isDropdownOpen = false; // Close the dropdown
  }
}