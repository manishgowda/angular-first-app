import { CloneVisitor } from '@angular/compiler/src/i18n/i18n_ast';
import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild } from '@angular/core';

@Component({
  selector: 'app-cockpit',
  templateUrl: './cockpit.component.html',
  styleUrls: ['./cockpit.component.css']
})
export class CockpitComponent implements OnInit {
  @Output() serverCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  @Output() blueprintCreated = new EventEmitter<{serverName: string, serverContent: string}>();
  // serverName: string;
  // serverContent: string;
  @ViewChild('serverContent', {static: true}) serverContent: ElementRef;
  constructor() { }

  ngOnInit(): void {
  }

  onAddServer(serverName: HTMLInputElement): void{
    console.log(serverName);
    this.serverCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }
  onAddBlueprint(serverName: HTMLInputElement): void{
    this.blueprintCreated.emit({
      serverName: serverName.value,
      serverContent: this.serverContent.nativeElement.value
    });
  }

}
