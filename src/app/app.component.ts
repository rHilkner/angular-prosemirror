import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {

    public fields = [
        {id: "NOME", title: "nome", value: "João"},
        {id: "IDADE", title: "idade", value: "20"},
        {id: "ENDERECO", title: "endereço", value: "Rua da Barra, 93"}
    ];
    public content: any;

    constructor() {

    }

    ngOnInit(): void {
        this.content = `
# This is just a test
## This is a subtitle
This is normal content
* this is a bullet point
* another bullet point
`;
    }
}
