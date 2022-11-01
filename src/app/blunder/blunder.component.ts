import { AfterViewChecked, Component, NgZone, OnInit } from '@angular/core';

function timeIn() {
  setTimeout(() => {
    console.log('barry');
  }, 1000);
}

@Component({
  selector: 'app-blunder',
  templateUrl: './blunder.component.html',
  styleUrls: ['./blunder.component.css']
})
export class BlunderComponent implements OnInit {

  cs: number[] = [];
  bColor: string = "blue";
  numArray = Array(100).fill(1);

  constructor(private zone: NgZone) { }
  ngOnInit() {
    // timeIn();
  }

  generateRandomColor() {
      return Math.floor(Math.random() * 100);
  }  

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random()*16)];      
    }
    return color;
  }

  add() {
    this.cs.push(this.bColor.length);
    setTimeout(() => {
      this.add();      
    }, 1000);
  }
}
