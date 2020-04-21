import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apply-leave-onbehalf',
  templateUrl: './apply-leave-onbehalf.component.html',
  styleUrls: ['./apply-leave-onbehalf.component.css']
})
export class ApplyLeaveOnbehalfComponent implements OnInit {
  startDate = new Date(1990, 0, 1);
  enamehaserror=true;
  ecodehaserror=true;
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
  applyhaserror=this.enamehaserror && this.ecodehaserror && this.categoryhaserror && this.purposehaserror && this.addreshhaserror
  &&this.contacthaserror && this.leavefromtypehaserror && this.leavetotypehaserror && this.approverhaserror && this.statushaserror
  ;


  validateename(value){
    if(value==='default'||value===''){
        this.enamehaserror=true;
       
    }
    else{
    this.enamehaserror=false;
    }
  }
  validateecode(value){
    if(value==='default'||value===''){
        this.ecodehaserror=true;
    }
    else{
    this.ecodehaserror=false;
    }
  }
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
      
    }
    else
    {
      this.leavefromtypehaserror=false;
    
    }
  }
  validateleavetotype(value){
    if(value==='default' || value==='')
    {
      this.leavetotypehaserror=true;
      
    }
    else
    {
      this.leavetotypehaserror=false;
    
    }
  }
  validateapprover(value){
    if(value==='default'||value==='')
    {
      this.approverhaserror=true;
     
    }
    else{
      this.approverhaserror=false;
      
    }
  }
  validatestatus(value){
    if(value==='default'||value===''){
    this.statushaserror=true;
    }
    else{
      this.statushaserror=false;
      
    }
  }
 
  formvalue(value){
    console.log(value);
    

  }

  constructor() { 
    
    
  }

  ngOnInit(): void {
  }


}