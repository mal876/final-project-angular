import { Component, OnInit } from '@angular/core';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-all-records',
  templateUrl: './all-records.component.html',
  styleUrls: ['./all-records.component.css']
})
export class AllRecordsComponent implements OnInit {

  constructor(private RecordsService: RecordsService){}

  records = [];
 

  ngOnInit(): void {
    this.getAllRecords();
  }

  getAllRecords(){
    const records = this.RecordsService.getAllRecords().subscribe((res)=>{
      if(res['status'] == 'success'){
        this.records = res['data']['records']
      }
    })
  }
}
