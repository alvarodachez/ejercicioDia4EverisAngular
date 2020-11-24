import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-info-content',
  templateUrl: './info-content.component.html',
  styleUrls: ['./info-content.component.css']
})
export class InfoContentComponent implements OnInit {

  content: any;
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {

    const idContent = this.route.snapshot.paramMap.get('id');
    this.searchService.searchById(idContent).subscribe(
      response => {
        console.log(response);
        this.content = response;
      },
      error => {
        console.log(error);
      }
    );

  }

}
