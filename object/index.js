function createBook(title,author){
    return{
        title:title,
        author:author,
        describe:function(){
            console.log(`"${this.title}" by ${this.author}`);
        }
    }
}
const book1=createBook('1984','George Orwell');
const book2=createBook('Brave New World','Aldous Huxley');
book1.describe();
book2.describe();