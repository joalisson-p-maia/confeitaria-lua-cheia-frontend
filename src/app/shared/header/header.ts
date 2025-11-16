import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  imports: [],
  templateUrl: './header.html',
  styleUrl: './header.scss',
})
export class Header {
  @Output() abrirFecharMenu = new EventEmitter<void>();
  isMenuMobileOpened: boolean = false;

  abrirFecharMenuMobile(){
    this.isMenuMobileOpened = !this.isMenuMobileOpened;

    const headerContainer = document.getElementById("header__container") 

    if(headerContainer){
      if(this.isMenuMobileOpened){
        headerContainer.style.position = "fixed";
        headerContainer.style.top = "0";
        headerContainer.style.left = "0";
      }else{
        headerContainer.style.position = "relative";
      }
    }
  }
}
