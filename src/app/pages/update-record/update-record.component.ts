import { Component, OnInit, ViewChild } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-record',
  templateUrl: './update-record.component.html',
  styleUrls: ['./update-record.component.css']
})
export class UpdateRecordComponent implements OnInit {
  constructor(private RecordsService: RecordsService,  private route: ActivatedRoute, private router: Router){}

  id: number = 0;
  record: any;
  hasData: boolean = false;
  hasError: boolean = false;

  ngOnInit(): void {
    this.getRecordById()
  }

  @ViewChild('updateRecordForm') updateRecordForm?: NgForm

  getRecordById(){
    this.id = this.route.snapshot.params['id'];

    const singleRecord = this.RecordsService.getRecordById(this.id).subscribe((res)=>{
      if(res['status'] !== 'error'){
        const recordData = res!['data']['record'];

        this.updateRecordForm?.setValue({
          patient_name: recordData['patient_name'],
          patient_sex: recordData['patient_sex'],
          attending_physician: recordData['attending_physician'],
          last_visit: recordData['last_visit'],
          diagnosis: recordData['diagnosis'],
          medicine: recordData['medicine'],
          treatment_plan: recordData['treatment_plan'],
          next_visit: recordData['next_visit']
        });

        this.hasData = true;
      }else{
        this.hasData = false;
      };
    })
  }

  updateRecord(recordForm: NgForm){
    this.id = this.route.snapshot.params['id'];

    const updateRecord = this.RecordsService.updateRecord(this.id, recordForm.value).subscribe((res)=>{
      if(res['status'] !== 'error'){
        this.router.navigateByUrl('/records');
        this.hasError = false;
      }else{
        this.hasError = true;
      }

    })
  }

}
