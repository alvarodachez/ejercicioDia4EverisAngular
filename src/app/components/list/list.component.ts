import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SearchService } from 'src/app/services/search.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  lista: any[];
  titulo: string;
  constructor(private route: ActivatedRoute, private searchService: SearchService) { }

  ngOnInit(): void {

    this.titulo = this.route.snapshot.paramMap.get('title');
    this.searchService.searchResults(this.titulo).subscribe(
      response => {
        this.lista = response;
        console.log(this.lista);
      },
      error => {
        console.log(error);
      }
    )
  }

}
