import {Component, OnInit} from '@angular/core';
import {DictionaryService} from "../../service/dictionary.service";
import {Word} from "../../model/word";

@Component({
  selector: 'app-word-list',
  templateUrl: './word-list.component.html',
  styleUrls: ['./word-list.component.css']
})
export class WordListComponent implements OnInit{
  constructor(private dicSvr: DictionaryService) {
  }

  dictionary: Word[] = [];

  ngOnInit() {
    this.dictionary = this.dicSvr.getAll();
  }
}
