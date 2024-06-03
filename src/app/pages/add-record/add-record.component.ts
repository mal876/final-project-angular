import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-add-record',
  templateUrl: './add-record.component.html',
  styleUrls: ['./add-record.component.css']
})
export class AddRecordComponent implements OnInit {
  constructor(private RecordsService: RecordsService, private router: Router ){}


  ngOnInit(): void {
    
  }

  createRecord(recordForm: NgForm){
    const createRecord = this.RecordsService.createRecord(recordForm.value).subscribe((res)=>{
      if(res['status'] == 'success'){
        this.router.navigateByUrl('/records')
      }
    })
  }
}
