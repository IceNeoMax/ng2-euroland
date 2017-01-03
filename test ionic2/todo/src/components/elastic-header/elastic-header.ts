import { Directive, ElementRef, Renderer } from '@angular/core';

@Directive({
  selector: '[elastic-header1]',
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})
export class ElasticHeader {

  header: any;
  mainContent:any;
  contentHeight:any;
  translateAmt: any;
  scaleAmt: any;
  temparr:any;
  i:number;
  level:any=[];

  constructor(public element: ElementRef, public renderer: Renderer) {
   
  }
 ngOnInit(){
        let height=0;
        let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
        this.header = content.getElementsByClassName('header-image')[0];
        this.mainContent = content.getElementsByClassName('main-content')[0];
        

        this.i = content.getElementsByClassName('header-image').length;
        for(let i=0;i<this.i;i++){
          height+= parseInt(this.element.nativeElement.getElementsByClassName('scroll-content')[0].getElementsByClassName('main-content')[i].clientHeight);
          this.level.push(height);
       }
        this.contentHeight = this.mainContent.clientHeight;
        this.renderer.setElementStyle(this.header, 'position', 'fixed');
        this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,42px,0) scale(1,1)');
        
        //this.renderer.setElementStyle(mainContent, 'position', 'absolute');
        
        console.log(this.level);
    }
 
 
    onContentScroll(ev){
 
        ev.domWrite(() => {
            this.updateParallaxHeader(ev);
        });
 
    }
   

    updateParallaxHeader(ev){
        let temp;
          for(let i=0; i< this.level.length;i++){
            if (ev.scrollTop>this.level[i])
            temp = i;
            else break;
          }
           //temp<scrollTop<temp+1 =>temp fixed temp+1 static
           
          //let height = this.getHeight();
          // if(ev.scrollTop  >= height){
            let content = this.element.nativeElement.getElementsByClassName('scroll-content')[0];
            
            if(temp<this.level.length){
              this.header = content.getElementsByClassName('header-image')[temp+1];
              this.renderer.setElementStyle(this.header, 'position', 'fixed');
              this.renderer.setElementStyle(this.header, 'webkitTransform', 'translate3d(0,42px,0) scale(1,1)');
            }
            if(ev.scrollTop>this.level[temp]){
              let oldHeader = content.getElementsByClassName('header-image')[temp];
              this.renderer.setElementStyle(oldHeader, 'position', 'static');
              console.log(oldHeader);
            }
             console.log(temp);
           // this.contentHeight = content.getElementsByClassName('main-content')[count+1].clientHeight;
            if(ev.scrollTop==this.level[this.level.length-1]){
              let temp = content.getElementsByClassName('header-image')[this.level.length];
              this.renderer.setElementStyle(temp, 'position', 'static');
            }
            
            //this.renderer.setElementStyle(oldHeader, 'position', 'static');
                   //}
        
       

        
    }
 

}
