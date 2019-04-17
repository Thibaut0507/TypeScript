export class ToHtml {
    private static readonly placeholder: string = 'myApp';

<<<<<<< HEAD
    public toPage(object: any, howTo: number = 1) {
        const htmlPlaceHolder: JQuery = $('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.html();
        content += object.toString(howTo);
        htmlPlaceHolder.html(content);
    }

    public appendToPage(object: JQuery): void {
        const placeholder: JQuery = $('[' + ToHtml.placeholder + ']');
        object.appendTo(placeholder);
    }
=======
    public toPage(object: any) {
        const htmlPlaceHolder: any = document.querySelector('[' + ToHtml.placeholder + ']');
        let content: string = htmlPlaceHolder.innerHTML;
        content += object.toString();
        htmlPlaceHolder.innerHTML = content;   
    }

>>>>>>> 79858e55a554ea38e990e3e9bb5f004eedde5a7d
}