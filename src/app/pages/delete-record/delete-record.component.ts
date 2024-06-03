import { Component, OnInit, ViewChild } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-delete-record',
  templateUrl: './delete-record.component.html',
  styleUrls: ['./delete-record.component.css']
})
export class DeleteRecordComponent implements OnInit {
  constructor(private RecordService: RecordsService,  private route: ActivatedRoute, private router: Router){}

  id: number = 0;
  hasData: boolean = false;
  hasError: boolean = false;
  record: any;

  ngOnInit(): void {
    this.getSingleRecordById();
  }

  @ViewChild('deleteRecordForm') deleteRecordForm?: NgForm;

  getSingleRecordById(){
    this.id = this.route.snapshot.params['id'];

    const singleRecord = this.RecordService.getRecordById(this.id).subscribe((res)=>{
      if(res['status'] !== 'error'){
        const recordData = res!['data']['record'];

        this.deleteRecordForm?.setValue({
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

  deleteRecord(){
    this.id = this.route.snapshot.params['id'];

    const delRecord = this.RecordService.deleteRecord(this.id).subscribe((res)=>{
      if(res['status'] !== 'error'){
        this.router.navigateByUrl('/records');
        this.hasError = false;
      }else {
        this.hasError = true;
      }
    })
  }
    
  
}
