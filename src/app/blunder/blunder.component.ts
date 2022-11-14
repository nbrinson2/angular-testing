import { AfterViewChecked, Component, NgZone, OnInit } from '@angular/core';

interface BodyPart {
  id: string;
  color: string;
  part: string;
}

@Component({
  selector: 'app-blunder',
  templateUrl: './blunder.component.html',
  styleUrls: ['./blunder.component.scss'],
})
export class BlunderComponent {
  boobId: number = 0;
  bootyId: number = 0;
  bodyPartList: BodyPart[] = [];
  boobList: BodyPart[] = [];
  bootyList: BodyPart[] = [];

  getRandomColor(): string {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let index = 0; index < 6; index++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }

  addBodyPart(bodyPart: BodyPart) {
    this.bodyPartList.push({ id: this.boobId + "-boob", color: this.getRandomColor(), part: bodyPart.part });
  }

  addBoob() {
    this.addBodyPart({ id: this.boobId + "-boob", color: this.getRandomColor(), part: "BOOBS"})
    this.boobId += 1;
    setTimeout(() => {
      this.addBoob();
    }, 750);
  }

  addBooty() {
    this.addBodyPart({ id: this.bootyId + "-booty", color: this.getRandomColor(), part: "BOOTY" })
    this.bootyId += 1;
    setTimeout(() => {
      this.addBooty();
    }, 750);
  }
}
