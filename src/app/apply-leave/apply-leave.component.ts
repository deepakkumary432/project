import { Component, OnInit } from '@angular/core';

import { FormGroup,FormControl, FormBuilder,NgForm,Validators, MinLengthValidator } from '@angular/forms';
@Component({
  selector: 'app-apply-leave',
  templateUrl: './apply-leave.component.html',
  styleUrls: ['./apply-leave.component.css']
})
export class ApplyLeaveComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  categoryhaserror=true;
  purposehaserror=true;
  addreshhaserror=true;
  contacthaserror=true;
  catone=false;
  cattwo=false;
  catthree=false;
  catfour=false;
  catfive=false;
  catsix=false;
  leavefromtypehaserror=true;
  leavetotypehaserror=true;
  approverhaserror=true;
  statushaserror=true;
  validatecategory(value){
    if(value==='default' || value===''){
      this.categoryhaserror=true;
    }
    else{
      this.categoryhaserror=false;

        this.catone=false;
        this.cattwo=false;
        this.catthree=false;
        this.catfour=false;
        this.catfive=false;
        this.catsix=false;
      if(value==='Working From Home'){
        this.catone=true;
      }
      if(value==='Short Leave'){
        
        this.cattwo=true;
        
      }
      if(value==='On Duty(OD)'){
        this.catthree=true;
      }
      if(value==='Annual Leave'){
        this.catfour=true;
      }
      if(value==='Casual Leave'){
        this.catfive=true;
      }
      if(value==='Earned Leave'){
        this.catsix=true;
      }
    }
  }
  validatepurpose(value){
    if(value===''){
      this.purposehaserror=true;
    }
    else{
      this.purposehaserror=false;
      
    }

  }
  validateaddresh(value){
    if(value===''){
      this.addreshhaserror=true;
    }
    else{
      this.addreshhaserror=false;
      
    }
  }

  validatecontact(value){
    if(value.length!=10){
      this.contacthaserror=true;
      
    }
    else{
      this.contacthaserror=false;
      
    }
    
    
  }

  validateleavefromtype(value){
    if(value==='default' || value==='')
    {
      this.leavefromtypehaserror=true;
      console.log(value);
    }
    else
    {
      this.leavefromtypehaserror=false;
    console.log(value);
    }
  }

  validateleavetotype(value){
    if(value==='default' || value==='')
    {
      this.leavetotypehaserror=true;
      console.log(value);
    }
    else
    {
      this.leavetotypehaserror=false;
    console.log(value);
    }
  }
  validateapprover(value){
    if(value==='default'||value==='')
    {
      this.approverhaserror=true;
      console.log(value)
    }
    else{
      this.approverhaserror=false;
      console.log(value)  
    }
  }
  validatestatus(value){
    if(value==='default'||value===''){
    this.statushaserror=true;
    }
    else{
      this.statushaserror=false;
      console.log(value);
    }
  }

  constructor() { 
    
    
  }

  ngOnInit(): void {
  }


}
