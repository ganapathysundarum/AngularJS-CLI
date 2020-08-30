import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { IfscCLientService } from '../service/data/ifsc/ifsc-client.service';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.css']
})
export class HelloWorldComponent implements OnInit {

  name = ''
  ifscCode = ''

  constructor(private route: ActivatedRoute,
    private ifscDataService: IfscCLientService) { }

  ngOnInit(): void {
    console.log(this.route.snapshot.params['name'])
    this.name = this.route.snapshot.params['name']
  }

  getIFSC(){
    this.ifscDataService.getIFSCService(this.ifscCode);    
  }

}
