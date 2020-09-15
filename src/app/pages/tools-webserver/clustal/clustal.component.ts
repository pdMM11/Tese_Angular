import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'ngx-clustal',
  templateUrl: './clustal.component.html',
  styleUrls: ['./clustal.component.scss'],
})
export class ClustalComponent implements OnInit {
  selectedItemPair = 'fast';
  selectedItemMat = 'blosum';
  query_seq = '';
  sequence = new FormControl('');
  options = [
    {value: ' ', label: 'CLUSTAL W', checked: true},
    {value: 'fasta', label: 'FASTA'},
    {value: 'phylip', label: 'PHYLIP'},
  ];
  option = ' ';

  constructor(private route: ActivatedRoute) {
  }

  ngOnInit() {
    this.query_seq = this.route.snapshot.queryParamMap.get('sequence');
  }

  gotoEBI(): void {
    if (this.sequence.value !== null && this.sequence.value !== ''
      && this.sequence.value.includes('\n') && this.sequence.value.includes('>')) {
      window.open('https://www.genome.jp/tools-bin/clustalw?output=' +
        encodeURI(this.option) +
        '&pwalignment=' + this.selectedItemPair + '&type=protein&sequence=' +
        encodeURI(this.sequence.value) +
        '&outfmt=' + this.option + '&gapopen=10&gapext=0.05&transitions=No&hgapresidues=GPSNQERK&nohgap=Yes&' +
        'pwmatrix=' + this.selectedItemMat +
        '&ktuple=1&window=5&pairgap=3&topdiags=5&score=PERCENT&pwgapopen=10.0&pwgapext=0.1' +
        '&matrix=' + this.selectedItemMat, '_blank');
    } else if (this.query_seq !== null && this.query_seq !== ''
      && this.query_seq.includes('\n') && this.query_seq.includes('>')) {
      window.open('https://www.genome.jp/tools-bin/clustalw?output=' +
        encodeURI(this.option) +
        '&pwalignment=' + this.selectedItemPair + '&type=protein&sequence=' +
        encodeURI(this.query_seq) +
        '&outfmt=' + this.option + '&gapopen=10&gapext=0.05&transitions=No&hgapresidues=GPSNQERK&nohgap=Yes&' +
        'pwmatrix=' + this.selectedItemMat +
        '&ktuple=1&window=5&pairgap=3&topdiags=5&score=PERCENT&pwgapopen=10.0&pwgapext=0.1' +
        '&matrix=' + this.selectedItemMat, '_blank');
    } else {
      alert('ERROR: MULTIPLE SEQUENCE NEEDS TO BE FILLED in FASTA FORMAT');
    }
  }
}
