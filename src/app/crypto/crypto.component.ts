import { Component, OnInit } from '@angular/core';

const strings = [
  "Welcome",
  "Hey fellow warriors",
  "This is a test",
  "This is another test",
  "You are almost to the last test",
]

function spinWords(string: string): string {
  let newString = '';

  let stringArray = string.split(' ').map(s => {
    if (s.length >= 5) {
      return spinWord(s);
    }
    return s;
  });

  stringArray.forEach(s => {
    newString += s + ' ';
  });

  return newString.trim();
}

function spinWord(string: string): string {
  let newString = '';
  for (let i = string.length - 1; i >= 0; i--) {
    newString += string.charAt(i);
  }
  return newString;
}

function countBits(n: number): number {
  let count = 0;
  console.log('number length',n.toString().length);
  let numArray = Array.from(String(n), Number);

  for (let index = 0; index < numArray.length; index++) {
    const element = numArray[index];
    count += 16^(index - 1);
    console.log('count',count);
  }

  let remainder = [];


  while(count > 1) {
    remainder.unshift(count % 2);
    console.log('remainder',remainder);
    count = count / 2;
  }


  return count;
} 

@Component({
  selector: 'app-crypto',
  templateUrl: './crypto.component.html',
  styleUrls: ['./crypto.component.css']
})
export class CryptoComponent implements OnInit {
  ngOnInit(): void {
    this.idiot();
  }
  title = 'angular-testing';

  idiot(): void {
    const x = 1636414672597339;
    const y = new Date('2020-11-25').getTime();
    const z = new Date().getTime();

    // console.log('VALUE',y);

    const view = z + (0.005 * (z - y));
    // console.log('view', Math.ceil(view));

    const pass = {
      success: true,
      reason: false
    };
    // console.log(pass.hasOwnProperty('success'));

    if(pass.hasOwnProperty('reason')) {
      // console.log('barry is pass')
    }

    // console.log('print words');
    this.printSpinWords();

    console.log('count bits', countBits(14));
  }
  
  printSpinWords(): void {
    strings.forEach(s => {
      // console.log('spun string',spinWords(s));
    });
  }


}
