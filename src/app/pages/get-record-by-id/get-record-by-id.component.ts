import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RecordsService } from 'src/app/services/records.service';

@Component({
  selector: 'app-get-record-by-id',
  templateUrl: './get-record-by-id.component.html',
  styleUrls: ['./get-record-by-id.component.css']
})
export class GetRecordByIdComponent implements OnInit {
  constructor(private RecordsService: RecordsService, private router: Router, private route: ActivatedRoute){}

  id: number = 0;
  hasData: boolean = false;
  records: any;
  recordArray = [];

  ngOnInit(): void {
    this.getRecordById()
  }

  getRecordById(){
    this.id = this.route.snapshot.params['id'];

    const singleRecord = this.RecordsService.getRecordById(this.id).subscribe((res)=>{
      if(res['status'] !== 'error'){
        this.records = res['data']['records'];
        this.hasData = true;
      }else{
        this.hasData = false;
      }
    })
  }
}
