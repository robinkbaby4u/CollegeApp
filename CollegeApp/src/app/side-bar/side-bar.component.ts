import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [CommonModule, RouterModule],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  @Input() isExpanded:boolean=false;
  @Output() toggleSidebar:EventEmitter<boolean>=new EventEmitter<boolean>();

  handleSidebarToggle=()=>this.toggleSidebar.emit(!this.isExpanded);
}
