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
  rawDanses = ['Rock', 'Salsa', 'Forro', 'Kizomba', 'bachata'];
  listDanses = [
    {
      nomDanse: 'rock',
      niveau: [
        {
          nomNiveau: 'débutant',
          urlVideos: 'lien1;lien2;lien3; lien4; lien5; lien6; lien7; lien8'
        },
        {
          nomNiveau: 'intermédiaire',
          urlVideos: 'lien9;lien10;lien11;lien12;lien13; lien14; lien15; lien16'
        },
        {
          nomNiveau: 'avancé',
          urlVideos:
            'lien17; lien18; lien19;lien20;lien21;lien22;lien23; lien24'
        }
      ]
    },
    {
      nomDanse: 'salsa',
      niveau: [
        {
          nomNiveau: 'débutant',
          urlVideos: 'lien1;lien2;lien3; lien4; lien5; lien6; lien7; lien8'
        },
        {
          nomNiveau: 'intermédiaire',
          urlVideos: 'lien9;lien10;lien11;lien12;lien13; lien14; lien15; lien16'
        },
        {
          nomNiveau: 'avancé',
          urlVideos:
            'lien17; lien18; lien19;lien20;lien21;lien22;lien23; lien24'
        }
      ]
    },
    {
      nomDanse: 'forro',
      niveau: [
        {
          nomNiveau: 'débutant',
          urlVideos: 'lien1;lien2;lien3; lien4; lien5; lien6; lien7; lien8'
        },
        {
          nomNiveau: 'intermédiaire',
          urlVideos: 'lien9;lien10;lien11;lien12;lien13; lien14; lien15; lien16'
        },
        {
          nomNiveau: 'avancé',
          urlVideos:
            'lien17; lien18; lien19;lien20;lien21;lien22;lien23; lien24'
        }
      ]
    },
    {
      nomDanse: 'kizomba',
      niveau: [
        {
          nomNiveau: 'débutant',
          urlVideos: 'lien1;lien2;lien3; lien4; lien5; lien6; lien7; lien8'
        },
        {
          nomNiveau: 'intermédiaire',
          urlVideos: 'lien9;lien10;lien11;lien12;lien13; lien14; lien15; lien16'
        },
        {
          nomNiveau: 'avancé',
          urlVideos:
            'lien17;lien18;lien19;lien20;lien21;lien22;lien23;lien24;lien17;lien18;lien19;lien20;lien21;lien22;lien23;lien24; '
        }
      ]
    },
    {
      nomDanse: 'bachata',
      niveau: [
        {
          nomNiveau: 'débutant',
          urlVideos: 'lien1;lien2;lien3; lien4; lien5; lien6; lien7; lien8'
        },
        {
          nomNiveau: 'intermédiaire',
          urlVideos: 'lien9;lien10;lien11;lien12;lien13; lien14; lien15; lien16'
        },
        {
          nomNiveau: 'avancé',
          urlVideos:
            'lien17; lien18; lien19;lien20;lien21;lien22;lien23; lien24'
        }
      ]
    }
  ];
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
