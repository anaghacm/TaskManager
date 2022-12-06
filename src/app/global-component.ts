export class GlobalComponent {
 
    public static item: number = 0;
    public static compl = JSON.parse(localStorage.getItem('completed') || '')
    public static incompl = JSON.parse(localStorage.getItem('incomplete') || '')
    public static total = this.compl + this.incompl
 
}