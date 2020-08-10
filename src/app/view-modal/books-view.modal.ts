export class BookViewModal {
    books: any[] = [];        // Boks list.
    displayBooks: any[] = []; // Books to display.

    constructor() {}

    /**
     * Searches book by name.
     *
     * @param searchText search text.
     */
    public searchByName(searchText: string): void {
        if (searchText !== '') {
          this.displayBooks = this.displayBooks.filter(book => book.bookName.toLowerCase().search(searchText.toLowerCase()) !== -1);
        } else {
          this.displayBooks = this.books;
        }
    }

    /**
     * Sorts books based on the sortfiled and order.
     *
     * @param sortField Sort field.
     * @param sortOrder Sort order.
     */
    public sort(sortField, sortOrder: boolean): void {
        this.displayBooks.sort((a, b) => {
          const s1: string = a[sortField] === undefined ? '' : a[sortField];
          const s2: string = b[sortField] === undefined ? '' : b[sortField];
          if (sortOrder) {
              return s1.localeCompare(s2);
          } else {
              return -s1.localeCompare(s2);
          }
        });
    }

    /**
     * Filters books by price range.
     *
     * @param from Lowest price.
     * @param to Highest price.
     */
    public filterPriceRange(from: number, to: number): void {
        this.displayBooks = this.displayBooks.filter(book => {
            const price: number = Number(book.bookPrice.substring(1));
            return (from < price && to > price);
        });
    }

    /**
     * Filters books by date range.
     * 
     * @param startDate start date.
     * @param endDate end date.
     */
    public filterBooksBydate(startDate: any, endDate: any): void {
        this.displayBooks = this.displayBooks.filter(book => {
            const dateString = book.createDate;
            const dateParts = dateString.split('/');
            const dateObject = new Date(+dateParts[2], dateParts[1] - 1, +dateParts[0]);
            return dateObject > startDate && dateObject < endDate;
          });
    }

}
