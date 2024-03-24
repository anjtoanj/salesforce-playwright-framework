export interface IPageActions{
    
    load():Promise<void>;
    reload():Promise<void>;
    loadUrl(url:string);
    verifyIfPagesLoaded():Promise<void>;

}