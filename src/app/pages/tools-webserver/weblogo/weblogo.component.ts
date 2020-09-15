import {Component, OnInit} from '@angular/core';
import {FormControl} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {WeblogoService} from '../../../services/weblogo.service';
import {HttpErrorResponse} from '@angular/common/http';

@Component({
  selector: 'ngx-weblogo',
  templateUrl: './weblogo.component.html',
  styleUrls: ['./weblogo.component.scss'],
})
export class WeblogoComponent implements OnInit {

  query_seq = '';
  sequence = new FormControl('');
  selectedItemPair = 'fast';
  selectedItemMat = 'blosum';
  option = ' ';
  clustal_result = '';

  constructor(private route: ActivatedRoute,
              private weblogo: WeblogoService) {
  }

  ngOnInit() {
    this.query_seq = this.route.snapshot.queryParamMap.get('sequence');
  }

  gotoWebLogo(image: boolean = true): void {
    if (this.sequence.value !== null && this.sequence.value !== '' && this.sequence.value.includes('\n')) {
      this.weblogo.send(encodeURI(this.sequence.value)).subscribe(
        (data_send) => {
          this.clustal_result = data_send['data'];
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        });
    } else if (this.query_seq !== null && this.query_seq !== '' && this.query_seq.includes('\n')) {
      this.weblogo.send(encodeURI(this.query_seq)).subscribe(
        (data_send) => {
          this.clustal_result = data_send['data'];
        },
        (error: HttpErrorResponse) => {
          alert(error.message);
        });
    }

    if (image) {
      if (this.sequence.value !== null && this.sequence.value !== '' && this.sequence.value.includes('\n')) {
        this.weblogo.send(this.sequence.value).subscribe(
          (data_send) => {
            this.clustal_result = data_send['data'];

            window.open('http://weblogo.threeplusone.com/create.cgi?sequences=' +
              encodeURI(this.clustal_result) +
              '&format=png_print&stacks_per_line=40&ignore_lower_case=true&unit_name=bits' +
              '&show_errorbars=true&show_fineprint=true', '_blank');
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          });
      } else if (this.query_seq !== null && this.query_seq !== '' && this.query_seq.includes('\n')) {

        this.weblogo.send(this.query_seq).subscribe(
          (data_send) => {
            this.clustal_result = data_send['data'];

            window.open('http://weblogo.threeplusone.com/create.cgi?sequences=' +
              encodeURI(this.clustal_result) +
              '&format=png_print&stacks_per_line=40&ignore_lower_case=true&unit_name=bits' +
              '&show_errorbars=true&show_fineprint=true', '_blank');
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          });
      } else {
        alert('ERROR: MULTIPLE SEQUENCE NEEDS TO BE FILLED');
      }
    } else {
      if (this.sequence.value !== null && this.sequence.value !== '' && this.sequence.value.includes('\n')) {

        this.weblogo.send(encodeURI(this.sequence.value)).subscribe(
          (data_send) => {
            this.clustal_result = data_send['data'];

            window.open('http://weblogo.threeplusone.com/create.cgi?sequences=' +
              encodeURI(this.clustal_result) +
              '&format=logodata&stacks_per_line=40&ignore_lower_case=true&unit_name=bits' +
              '&show_errorbars=true&show_fineprint=true', '_blank');
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          });
      } else if (this.query_seq !== null && this.query_seq !== '' && this.query_seq.includes('\n')) {
        this.weblogo.send(encodeURI(this.query_seq)).subscribe(
          (data_send) => {
            this.clustal_result = data_send['data'];

            window.open('http://weblogo.threeplusone.com/create.cgi?sequences=' +
              encodeURI(this.clustal_result) +
              '&format=logodata&stacks_per_line=40&ignore_lower_case=true&unit_name=bits' +
              '&show_errorbars=true&show_fineprint=true', '_blank');
          },
          (error: HttpErrorResponse) => {
            alert(error.message);
          });
      } else {
        alert('ERROR: MULTIPLE SEQUENCE NEEDS TO BE FILLED');
      }
    }
  }
}

/**
 PythonShell = require('python-shell');

 options = {
    mode: 'text',
    pythonPath: 'path/to/python',
    pythonOptions: ['-u'],
    scriptPath: 'path/to/my/scripts',
    args: ['value1', 'value2', 'value3'],
  };
 this.PythonShell.run('BLAST_VFP.py', this.options, function (err, results) {
      if (err)
        throw err;
      // Results is an array consisting of messages collected during execution
      console.log('results: %j', results);
    });
 */
