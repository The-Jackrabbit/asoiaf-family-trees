import { Component, OnInit, Input, ElementRef, ViewEncapsulation } from '@angular/core';
import { environment } from '../../environments/environment';
import { D3Service, D3, Selection } from 'd3-ng2-service';

@Component({
  encapsulation: ViewEncapsulation.None,
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css']
})
export class TreeComponent implements OnInit {
  private d3: D3;
  private parentNativeElement: any;
  arr = [1, 2, 3, 4, 5]
  @Input() dataset;

  constructor(element: ElementRef, d3Service: D3Service) {
    this.d3 = d3Service.getD3();
    this.parentNativeElement = element.nativeElement;
  }

  ngOnInit() {
    console.log(this.dataset);
     const d3 = this.d3; // <-- for convenience use a block scope variable
    let d3ParentElement: Selection<any, any, any, any>; // <-- Use the Selection interface (very basic here for illustration only)

      function link(d) {
        return 'M' + d.source.y + ',' + d.source.x
            + 'C' + (d.source.y + d.target.y) / 2 + ',' + d.source.x
            + ' ' + (d.source.y + d.target.y) / 2 + ',' + d.target.x
            + ' ' + d.target.y + ',' + d.target.x;
      }

    if (this.parentNativeElement !== null) {

      d3ParentElement = d3.select(this.parentNativeElement); // <-- use the D3 select method

      const tree = d3.tree().size([500, 500]);

      const svg = d3ParentElement.append<SVGSVGElement>('svg');

      svg.append<SVGCircleElement>('circle').attr('r', 10).attr('x', 100);

    }

  }
}
