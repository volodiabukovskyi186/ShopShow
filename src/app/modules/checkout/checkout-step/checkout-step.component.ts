import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-checkout-step',
  templateUrl: './checkout-step.component.html',
  styleUrls: ['./checkout-step.component.scss']
})
export class CheckoutStepComponent implements OnInit {
  @Input() step: number = 1;
  @Input() title: string = "Step title"

  constructor() { }

  ngOnInit(): void {
  }

}
