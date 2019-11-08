import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder } from '@angular/forms';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  searchForm: FormGroup;
  isearch: FormControl;
  msgRep = 0;
  rawDanses = ['Rock', 'Salsa', 'Forro', 'Kizomba'];
  dictDanses = {
    danse: [
      {
        nomDanse: 'rock',
        niveau: [
          {
            nomNiveau: 'golio',
            urlVideos: 'lien1;lien2;...'
          },
          {
            nomNiveau: 'boss',
            urlVideos: 'lien9;lien10;...'
          }
        ]
      },
      {
        nomDanse: 'pogo',
        niveau: [
          {
            nomNiveau: 'golio',
            urlVideos: 'lien11;lien21;...'
          },
          {
            nomNiveau: 'boss',
            urlVideos: 'lien91;lien101;...'
          }
        ]
      }
    ]
  };
  danses = this.rawDanses;
  danseSelected = '';

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit() {
    this.searchForm = this.formBuilder.group({ isearch: null });
    this.danses.sort();
  }

  onSearch() {
    const findedDanses = [];
    const formValue = this.searchForm.value;
    console.log(formValue[`isearch`]);
    this.rawDanses.forEach(value => {
      const valueLow = value.toLowerCase();
      if (valueLow.search(formValue[`isearch`]) !== -1) {
        findedDanses.push(value);
      }
    });
    if (findedDanses.length > 0) {
      this.danses = findedDanses;
      this.msgRep = findedDanses.length;
    } else {
      this.danses = this.rawDanses;
      this.msgRep = 0;
    }
  }

  onSelect(danse) {
    console.log(danse);
    this.danseSelected = danse;
  }
}
